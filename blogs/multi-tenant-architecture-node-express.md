---
title: "Building a Multi-Tenant SaaS Backend with Node.js and MongoDB"
date: "2026-04-10"
description: "How I designed tenant isolation, RBAC, and scalable async architecture in a production CRM — and the decisions that saved me from a rewrite."
sentiment: "technical"
---

## What Is Multi-Tenancy and Why Does It Matter?

A multi-tenant application serves multiple customers (tenants) from a single deployment. Each tenant's data must be completely isolated — a bug that leaks data across tenants is a security incident, not just a logic error.

When building Spark CRM, I had to choose between three isolation strategies:

| Strategy | Isolation | Cost | Complexity |
|---|---|---|---|
| Separate database per tenant | Highest | High | High |
| Shared DB, separate schema | Medium | Medium | Medium |
| Shared DB, tenant ID on every row | Lowest | Low | Low |

For a CRM with potentially hundreds of tenants, separate databases would have made operational costs prohibitive. I went with the shared database approach with a `tenantId` field on every document.

## The Tenant Middleware

The core of the isolation is a middleware that extracts the tenant from the JWT and attaches it to the request:

```typescript
export const tenantMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  const payload = verifyToken(token);
  req.tenantId = payload.tenantId;
  req.userId = payload.userId;
  next();
};
```

Every database query then scopes to `req.tenantId`. I created a thin wrapper around Mongoose models to enforce this:

```typescript
export const scopedFind = <T>(
  model: Model<T>,
  tenantId: string,
  filter: FilterQuery<T> = {},
) => {
  return model.find({ ...filter, tenantId });
};
```

Missing `tenantId` on a query is now a compile-time problem, not a runtime leak.

## Role-Based Access Control

RBAC in a multi-tenant system has two layers:

1. **Tenant-level roles** — is this user allowed to be in this tenant at all?
2. **Resource-level permissions** — can this user perform this action on this resource?

I modelled permissions as a flat array on each role document:

```typescript
interface Role {
  tenantId: string;
  name: string;
  permissions: string[]; // ["leads:read", "leads:write", "users:manage"]
}
```

Then a permission guard middleware checks the required permission for each route:

```typescript
export const requirePermission = (permission: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const role = await Role.findOne({
      tenantId: req.tenantId,
      name: req.userRole,
    });

    if (!role?.permissions.includes(permission)) {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  };

// Usage
router.post("/leads", requirePermission("leads:write"), createLead);
```

## Async Architecture with Redis and AWS SQS

Some operations are too slow to do synchronously in an API response — sending emails, processing AI lead enrichment, generating reports. I offloaded these to an async queue.

The flow:

```
API Request → Route Handler → Publish to SQS → Return 202 Accepted
                                   ↓
                           Worker Process
                           → Consume from SQS
                           → Process job
                           → Update DB / Send email
```

For jobs that needed results quickly (under 30 seconds), I used Redis pub/sub so the client could poll a status endpoint. For fire-and-forget jobs (email sends), SQS with a dead-letter queue was enough.

```typescript
export const publishJob = async (queue: string, payload: object) => {
  await sqs.send(
    new SendMessageCommand({
      QueueUrl: process.env[`SQS_${queue.toUpperCase()}_URL`],
      MessageBody: JSON.stringify(payload),
    }),
  );
};
```

## What I'd Do Differently

**Use a request-scoped context instead of req.tenantId.** Passing tenant context through function arguments is fine in small codebases, but in a larger service with deeply nested calls, using Node's `AsyncLocalStorage` to hold a request context would be cleaner:

```typescript
const requestContext = new AsyncLocalStorage<{ tenantId: string }>();

export const getTenantId = () => requestContext.getStore()?.tenantId;
```

**Add a tenant resolver for subdomain routing.** The current system uses JWT for tenant resolution, which works fine, but subdomain-based routing (`acme.app.com`) would allow unauthenticated pages (login, signup) to know which tenant they belong to without a token.

Multi-tenancy is fundamentally about discipline — every query, every log line, every cache key needs the tenant context. Get that right early and the rest is just features.
