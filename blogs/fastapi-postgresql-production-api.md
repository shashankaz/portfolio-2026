---
title: "Building a Production-Grade API with FastAPI and PostgreSQL"
date: "2026-01-20"
description: "Structuring a FastAPI project that scales — async queries, dependency injection, Pydantic validation, and the patterns I wish I'd known before my first production deployment."
sentiment: "technical"
---

## Why FastAPI Over Django REST Framework

Both are solid choices. I reached for FastAPI for the backlink analysis system at SEORCE because:

- **Async by default.** Processing 10K+ links per day means a lot of I/O. FastAPI's async handlers + `asyncpg` let us handle concurrent requests without blocking.
- **Automatic API docs.** Swagger UI generated from type annotations meant the frontend team could explore and test endpoints without waiting for documentation.
- **Pydantic everywhere.** Request validation, response serialisation, and environment config all use the same model system.

## Project Structure

```
app/
  api/
    v1/
      endpoints/
        links.py
        reports.py
      router.py
  core/
    config.py
    database.py
    security.py
  models/
    link.py
    report.py
  schemas/
    link.py
    report.py
  services/
    link_analyzer.py
    report_generator.py
  main.py
```

The key separation: **models** are SQLAlchemy ORM classes (database shape), **schemas** are Pydantic models (API shape). They often look similar but serve different purposes — mixing them leads to leaking database internals into the API.

## Async Database Queries

SQLAlchemy 2.0 with `asyncpg` gives true async database access:

```python
# core/database.py
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

engine = create_async_engine(settings.DATABASE_URL, echo=False)

AsyncSessionLocal = sessionmaker(
    engine, class_=AsyncSession, expire_on_commit=False
)

async def get_db() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        yield session
```

The `get_db` function is a FastAPI dependency — it opens a session per request and closes it automatically:

```python
@router.get("/links/{link_id}", response_model=LinkResponse)
async def get_link(
    link_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    result = await db.execute(
        select(Link).where(Link.id == link_id, Link.user_id == current_user.id)
    )
    link = result.scalar_one_or_none()
    if not link:
        raise HTTPException(status_code=404, detail="Link not found")
    return link
```

## Dependency Injection for Auth

FastAPI's `Depends` system makes auth composable:

```python
# core/security.py
async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: AsyncSession = Depends(get_db),
) -> User:
    payload = decode_jwt(token)
    user = await db.get(User, payload["sub"])
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user

async def get_admin_user(
    current_user: User = Depends(get_current_user),
) -> User:
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Admins only")
    return current_user
```

Chaining dependencies keeps auth logic out of route handlers and easy to test in isolation.

## Background Tasks for Expensive Operations

Analysing a batch of backlinks is too slow for a synchronous response. FastAPI's `BackgroundTasks` handles fire-and-forget work:

```python
@router.post("/links/analyze", status_code=202)
async def trigger_analysis(
    payload: AnalysisRequest,
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    job = await create_analysis_job(db, current_user.id, payload)
    background_tasks.add_task(run_link_analysis, job.id)
    return {"job_id": job.id, "status": "queued"}
```

For heavier workloads, replace `BackgroundTasks` with Celery + Redis. But for jobs that complete in seconds, the built-in approach avoids adding infrastructure.

## Pydantic Settings for Config

Hard-coded config strings are a deployment problem. Pydantic's `BaseSettings` reads from environment variables with type validation:

```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    class Config:
        env_file = ".env"

settings = Settings()
```

Missing required variables fail loudly at startup, not when the first request tries to use them.

## What I Learned the Hard Way

**N+1 queries will ruin you.** Async doesn't make N+1 fast — it makes it harder to notice. Use `selectinload` or `joinedload` eagerly when you know you'll need related objects:

```python
result = await db.execute(
    select(Link).options(selectinload(Link.metrics)).where(Link.user_id == user_id)
)
```

**Response models hide bugs.** Setting `response_model=LinkResponse` on a route doesn't validate that you *return* a `LinkResponse` — it just serialises whatever you return through that schema. A type checker like `mypy` or `pyright` is necessary to catch mismatches.

**Alembic migrations need care in async setups.** Alembic's `env.py` runs synchronously by default. You need a small adapter to run it against an async engine — the FastAPI docs have a recipe for this that's worth copying verbatim rather than improvising.

FastAPI is genuinely pleasant to work with once the project structure clicks. The type annotations pay dividends at every layer — validation, serialisation, docs, and editor autocomplete all flow from the same source.
