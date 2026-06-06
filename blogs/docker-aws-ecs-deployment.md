---
title: "Deploying a React App to AWS ECS with Docker"
date: "2025-11-15"
description: "A practical walkthrough of containerising a React + Node.js app and shipping it to AWS ECS — including ECR, ALB, and the GitHub Actions pipeline that ties it together."
sentiment: "devops"
---

## Why ECS Over Other Options

When I containerised Relix (an interior design SPA with a Node.js API), I evaluated three deployment targets:

- **EC2 directly** — full control, but I'm managing OS patches and capacity myself
- **App Runner** — simpler than ECS, but less flexible for multi-container setups
- **ECS on Fargate** — managed container orchestration, pay-per-use compute, no servers to patch

ECS Fargate hit the right balance: production-grade without requiring a Kubernetes learning curve. Here's the full setup.

## Step 1: The Dockerfile

A multi-stage build keeps the production image lean:

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

The builder stage installs all dependencies and runs the build. The runner stage copies only the compiled output — no `node_modules`, no source files. The final image is around 150MB instead of 800MB+.

## Step 2: Push to ECR

AWS Elastic Container Registry stores the images. The workflow:

```bash
# Authenticate
aws ecr get-login-password --region ap-south-1 | \
  docker login --username AWS --password-stdin <account>.dkr.ecr.ap-south-1.amazonaws.com

# Build and tag
docker build -t my-app .
docker tag my-app:latest <account>.dkr.ecr.ap-south-1.amazonaws.com/my-app:latest

# Push
docker push <account>.dkr.ecr.ap-south-1.amazonaws.com/my-app:latest
```

## Step 3: ECS Task Definition

A task definition is the blueprint for your container — it specifies the image, CPU/memory, environment variables, and port mappings:

```json
{
  "family": "my-app",
  "requiresCompatibilities": ["FARGATE"],
  "networkMode": "awsvpc",
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [
    {
      "name": "my-app",
      "image": "<account>.dkr.ecr.ap-south-1.amazonaws.com/my-app:latest",
      "portMappings": [{ "containerPort": 3000 }],
      "environment": [
        { "name": "NODE_ENV", "value": "production" }
      ],
      "secrets": [
        {
          "name": "DATABASE_URL",
          "valueFrom": "arn:aws:secretsmanager:...:secret:prod/my-app/db-url"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/my-app",
          "awslogs-region": "ap-south-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

Note the `secrets` field — it pulls sensitive values from AWS Secrets Manager at container start. Never put real secrets in `environment`.

## Step 4: Application Load Balancer

ECS tasks get ephemeral IPs. An ALB provides a stable endpoint and handles TLS termination:

1. Create a target group pointing at port 3000
2. Create an ALB with a HTTPS listener (certificate from ACM)
3. Point the listener's default action at the target group
4. Register a Route 53 alias record at your domain pointing to the ALB DNS name

ECS registers and deregisters tasks with the target group automatically during deployments.

## Step 5: GitHub Actions CI/CD

The deployment pipeline runs on every push to `main`:

```yaml
name: Deploy to ECS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-south-1

      - name: Login to ECR
        id: ecr-login
        uses: aws-actions/amazon-ecr-login@v2

      - name: Build, tag, and push image
        id: build
        env:
          ECR_REGISTRY: ${{ steps.ecr-login.outputs.registry }}
          IMAGE_TAG: ${{ github.sha }}
        run: |
          docker build -t $ECR_REGISTRY/my-app:$IMAGE_TAG .
          docker push $ECR_REGISTRY/my-app:$IMAGE_TAG
          echo "image=$ECR_REGISTRY/my-app:$IMAGE_TAG" >> $GITHUB_OUTPUT

      - name: Update ECS service
        run: |
          aws ecs update-service \
            --cluster my-cluster \
            --service my-app-service \
            --force-new-deployment
```

Each deployment tags the image with the Git commit SHA — rollbacks are just re-running the pipeline at an earlier commit.

## Common Gotchas

**Health check path matters.** The ALB performs health checks against your container. If your app doesn't have a `/health` route returning 200, the target group will mark every task as unhealthy and the deployment will stall. Add one:

```typescript
app.get("/health", (_req, res) => res.json({ status: "ok" }));
```

**Fargate needs an internet gateway or NAT.** Tasks in private subnets can't pull ECR images unless there's a NAT gateway or a VPC endpoint for ECR. Either put tasks in a public subnet (fine for non-critical workloads) or configure VPC endpoints.

**ECS rolling deploys don't drain connections.** The default deployment strategy replaces tasks before old ones drain. Configure a minimum healthy percent and deregistration delay on the target group so in-flight requests complete before the old task stops.

The setup has more moving parts than a PaaS like Render or Railway, but once it's running it's solid — and you understand exactly what's happening at every layer.
