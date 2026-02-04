# Introduction to TanStack Router

TanStack Router brings type-safe, modern routing to React applications with a focus on developer experience.

## Why TanStack Router?

- **100% TypeScript** - Full type safety across routes
- **First-class search params** - Type-safe query parameters
- **Built-in data loading** - Loader functions like Remix
- **Nested routes** - Powerful layout composition

## Getting Started

Install the package:

```bash
npm install @tanstack/react-router
```

## Basic Setup

```typescript
import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute]),
});
```

## Type-Safe Navigation

```typescript
import { Link } from '@tanstack/react-router';

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/blog/$postId" params={{ postId: '123' }}>
        Blog Post
      </Link>
    </nav>
  );
}
```

## Search Params

Type-safe query parameters:

```typescript
const searchParams = Route.useSearch();
// Fully typed!
```

## Data Loading

```typescript
const postRoute = createRoute({
  path: "/posts/$postId",
  loader: async ({ params }) => {
    return fetchPost(params.postId);
  },
  component: PostPage,
});
```

TanStack Router provides a modern, type-safe routing solution that scales with your application!
