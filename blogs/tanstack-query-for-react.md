---
title: "How TanStack Query Helped Me Cut API Calls by 40%"
date: "2026-03-05"
description: "Moving from useEffect + useState data fetching to TanStack Query in a production dashboard — what changed, what got simpler, and what caught me off guard."
sentiment: "practical"
---

## The Problem with useEffect Data Fetching

Before TanStack Query, most data fetching in React looks like this:

```typescript
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetch("/api/orders")
    .then((res) => res.json())
    .then(setData)
    .catch(setError)
    .finally(() => setLoading(false));
}, []);
```

This pattern has a quiet problem: every component that needs the same data fires its own request. A dashboard with five widgets showing order data makes five identical `/api/orders` calls, one per mount.

At Restroworks, the restaurant management dashboard had this problem at scale — multiple panels, each independently fetching overlapping data. Moving to TanStack Query reduced redundant API calls by around 40% in practice.

## Core Concept: The Query Cache

TanStack Query works around a global query cache keyed by query keys:

```typescript
const { data, isLoading, error } = useQuery({
  queryKey: ["orders"],
  queryFn: () => fetch("/api/orders").then((r) => r.json()),
});
```

If five components on the same page call `useQuery({ queryKey: ["orders"] })`, only **one** network request is made. The rest read from cache. The cache also handles background refetching, stale time, and garbage collection automatically.

## Parameterised Queries

For filtering and pagination, the query key acts as the cache identifier:

```typescript
const useOrders = (filters: OrderFilters) => {
  return useQuery({
    queryKey: ["orders", filters],
    queryFn: () => fetchOrders(filters),
    staleTime: 30_000,
  });
};
```

Changing `filters` automatically triggers a new fetch and caches the result separately. Navigating back to previous filter values hits the cache instantly.

## Mutations and Cache Invalidation

Mutations update the server and then invalidate the relevant queries so the UI refetches fresh data:

```typescript
const queryClient = useQueryClient();

const createOrder = useMutation({
  mutationFn: (order: NewOrder) =>
    fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify(order),
    }),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  },
});
```

For a better UX, optimistic updates let you update the UI before the server responds:

```typescript
const updateOrderStatus = useMutation({
  mutationFn: ({ id, status }: { id: string; status: string }) =>
    patchOrder(id, status),

  onMutate: async ({ id, status }) => {
    await queryClient.cancelQueries({ queryKey: ["orders"] });
    const previous = queryClient.getQueryData(["orders"]);

    queryClient.setQueryData(["orders"], (old: Order[]) =>
      old.map((o) => (o.id === id ? { ...o, status } : o)),
    );

    return { previous };
  },

  onError: (_err, _vars, context) => {
    queryClient.setQueryData(["orders"], context?.previous);
  },

  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  },
});
```

The UI updates immediately; if the server rejects it, the change rolls back.

## Dependent Queries

Sometimes you need data from one query before you can make the next. TanStack Query handles this with the `enabled` flag:

```typescript
const { data: user } = useQuery({
  queryKey: ["user"],
  queryFn: getUser,
});

const { data: orders } = useQuery({
  queryKey: ["orders", user?.id],
  queryFn: () => getOrdersForUser(user!.id),
  enabled: !!user?.id,
});
```

The orders query won't fire until the user query resolves and `user.id` exists.

## What Caught Me Off Guard

**Stale time defaults to zero.** By default, every query is considered stale immediately after fetching, which means background refetches happen on every window focus and component remount. For data that doesn't change often, set a reasonable `staleTime`:

```typescript
// Data is fresh for 5 minutes
const { data } = useQuery({
  queryKey: ["menu"],
  queryFn: fetchMenu,
  staleTime: 5 * 60 * 1000,
});
```

**Query keys must be serialisable.** Functions, class instances, and circular references in query keys will cause issues. Keep keys as arrays of strings, numbers, and plain objects.

**`isLoading` vs `isFetching`.** `isLoading` is true only on the initial fetch with no cached data. `isFetching` is true any time a background refetch is happening. Show a skeleton on `isLoading`, but avoid showing a full loading state on `isFetching` — it makes the UI feel unstable.

TanStack Query doesn't eliminate the need to think about data — it gives you the right tools so you're solving business problems instead of managing loading states.
