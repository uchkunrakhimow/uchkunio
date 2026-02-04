export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "getting-started-with-react-typescript",
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a modern React application with TypeScript and best practices for type safety.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["React", "TypeScript", "Web Development"],
    content: `
# Getting Started with React and TypeScript

TypeScript has become the de facto standard for building modern React applications. In this guide, we'll walk through setting up a new React project with TypeScript and explore best practices.

## Why TypeScript?

TypeScript adds static typing to JavaScript, which provides several benefits:

- **Better IDE support** with autocomplete and inline documentation
- **Catch errors early** during development instead of runtime
- **Easier refactoring** with confidence
- **Self-documenting code** through type definitions

## Setting Up Your Project

You can create a new React + TypeScript project using Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## Type-Safe Components

Here's an example of a typed React component:

\`\`\`typescript
interface UserCardProps {
  name: string;
  email: string;
  age?: number;
}

export function UserCard({ name, email, age }: UserCardProps) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      {age && <p>Age: {age}</p>}
    </div>
  );
}
\`\`\`

## Best Practices

1. **Use interfaces for props** - More extensible than types
2. **Enable strict mode** in tsconfig.json
3. **Avoid \`any\` type** - Use \`unknown\` when needed
4. **Leverage type inference** - Don't over-annotate

## Conclusion

TypeScript significantly improves the development experience in React applications. Start small, and gradually adopt more advanced features as you become comfortable.
`
  },
  {
    id: 2,
    slug: "building-scalable-web-applications",
    title: "Building Scalable Web Applications",
    excerpt: "Explore architectural patterns and design principles for creating maintainable and scalable web applications.",
    date: "2024-01-08",
    readTime: "8 min read",
    tags: ["Architecture", "Best Practices", "Software Engineering"],
    content: `
# Building Scalable Web Applications

Scalability isn't just about handling more users—it's about building applications that can grow and evolve without becoming unmaintainable.

## Key Principles

### 1. Separation of Concerns

Keep your business logic, UI, and data layers separate. This makes testing easier and allows parts of your application to evolve independently.

### 2. Modular Architecture

Break your application into independent modules:

- **Feature-based organization** - Group files by feature, not by type
- **Shared utilities** - Common code in a central location
- **Clear boundaries** - Well-defined interfaces between modules

### 3. State Management

Choose the right tool for your needs:

- **Local state** for component-specific data
- **Context** for theme, auth, and other global settings
- **External libraries** (Zustand, Redux) for complex state

## Code Organization

\`\`\`
src/
├── features/
│   ├── auth/
│   ├── dashboard/
│   └── settings/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
└── main.tsx
\`\`\`

## Performance Optimization

1. **Code splitting** - Load only what's needed
2. **Lazy loading** - Defer non-critical resources
3. **Memoization** - Prevent unnecessary re-renders
4. **Bundle analysis** - Monitor and optimize bundle size

## Testing Strategy

- **Unit tests** for business logic
- **Integration tests** for features
- **E2E tests** for critical user flows

Remember: scalability is a journey, not a destination. Build for today's needs while keeping tomorrow's growth in mind.
`
  },
  {
    id: 3,
    slug: "understanding-modern-css-layouts",
    title: "Understanding Modern CSS Layouts",
    excerpt: "A comprehensive guide to Flexbox, Grid, and responsive design techniques for modern web layouts.",
    date: "2023-12-20",
    readTime: "6 min read",
    tags: ["CSS", "Frontend", "Design"],
    content: `
# Understanding Modern CSS Layouts

Modern CSS gives us powerful tools for creating responsive, flexible layouts. Let's explore the main techniques.

## Flexbox

Perfect for one-dimensional layouts (rows or columns):

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

**Common use cases:**
- Navigation bars
- Card layouts
- Centering content

## CSS Grid

Ideal for two-dimensional layouts:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
\`\`\`

**Common use cases:**
- Page layouts
- Image galleries
- Dashboard widgets

## Responsive Design

Use modern CSS features for responsive layouts:

\`\`\`css
/* Container queries */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

/* Clamp for fluid typography */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
\`\`\`

## Best Practices

1. **Mobile-first approach** - Start with mobile styles
2. **Logical properties** - Use \`inline-start\` instead of \`left\`
3. **CSS custom properties** - For maintainable theming
4. **Avoid fixed heights** - Let content determine size

Modern CSS makes building responsive, beautiful layouts easier than ever!
`
  },
  {
    id: 4,
    slug: "api-design-best-practices",
    title: "API Design Best Practices",
    excerpt: "Key principles and patterns for designing RESTful APIs that are intuitive, consistent, and developer-friendly.",
    date: "2023-12-10",
    readTime: "7 min read",
    tags: ["API", "Backend", "REST"],
    content: `
# API Design Best Practices

A well-designed API is intuitive, consistent, and makes developers' lives easier. Here are the key principles.

## RESTful Principles

### Use Proper HTTP Methods

- **GET** - Retrieve resources
- **POST** - Create resources
- **PUT/PATCH** - Update resources
- **DELETE** - Remove resources

### Resource-Based URLs

\`\`\`
Good:
GET /api/users
GET /api/users/123
POST /api/users

Bad:
GET /api/getAllUsers
GET /api/getUserById?id=123
POST /api/createUser
\`\`\`

## Response Structure

Keep responses consistent:

\`\`\`json
{
  "data": {
    "id": "123",
    "name": "John Doe"
  },
  "meta": {
    "timestamp": "2024-01-15T10:00:00Z"
  }
}
\`\`\`

## Error Handling

Use appropriate HTTP status codes:

- **200** - Success
- **201** - Created
- **400** - Bad request
- **401** - Unauthorized
- **404** - Not found
- **500** - Server error

Error response format:

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email"
    }
  }
}
\`\`\`

## Versioning

Include version in URL:

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

## Documentation

- Provide clear examples
- Document all endpoints
- Include authentication details
- Show request/response formats

Great API design reduces integration time and improves developer experience!
`
  },
  {
    id: 5,
    slug: "introduction-to-tanstack-router",
    title: "Introduction to TanStack Router",
    excerpt: "Discover the power of type-safe routing in React applications with TanStack Router and its modern features.",
    date: "2023-11-25",
    readTime: "10 min read",
    tags: ["React", "Routing", "TanStack"],
    content: `
# Introduction to TanStack Router

TanStack Router brings type-safe, modern routing to React applications with a focus on developer experience.

## Why TanStack Router?

- **100% TypeScript** - Full type safety across routes
- **First-class search params** - Type-safe query parameters
- **Built-in data loading** - Loader functions like Remix
- **Nested routes** - Powerful layout composition

## Getting Started

Install the package:

\`\`\`bash
npm install @tanstack/react-router
\`\`\`

## Basic Setup

\`\`\`typescript
import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const router = createRouter({ 
  routeTree: rootRoute.addChildren([indexRoute]) 
});
\`\`\`

## Type-Safe Navigation

\`\`\`typescript
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
\`\`\`

## Search Params

Type-safe query parameters:

\`\`\`typescript
const searchParams = Route.useSearch();
// Fully typed!
\`\`\`

## Data Loading

\`\`\`typescript
const postRoute = createRoute({
  path: '/posts/$postId',
  loader: async ({ params }) => {
    return fetchPost(params.postId);
  },
  component: PostPage,
});
\`\`\`

TanStack Router provides a modern, type-safe routing solution that scales with your application!
`
  },
  {
    id: 6,
    slug: "performance-optimization-techniques",
    title: "Performance Optimization Techniques",
    excerpt: "Practical strategies for improving web application performance, from code splitting to lazy loading.",
    date: "2023-11-15",
    readTime: "9 min read",
    tags: ["Performance", "Optimization", "Web Development"],
    content: `
# Performance Optimization Techniques

Performance directly impacts user experience and conversions. Let's explore proven optimization strategies.

## Code Splitting

Split your bundle into smaller chunks:

\`\`\`typescript
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

## Image Optimization

1. **Use modern formats** - WebP, AVIF
2. **Responsive images** - srcset and sizes
3. **Lazy loading** - Load images as needed
4. **Optimize dimensions** - Don't serve larger than displayed

\`\`\`html
<img 
  src="image.webp"
  srcset="image-small.webp 400w, image-large.webp 800w"
  sizes="(max-width: 600px) 400px, 800px"
  loading="lazy"
  alt="Description"
/>
\`\`\`

## Minimize JavaScript

- **Tree shaking** - Remove unused code
- **Minification** - Compress code
- **Bundle analysis** - Identify large dependencies

\`\`\`bash
npm install -D vite-bundle-visualizer
\`\`\`

## Caching Strategies

- **Service workers** - Offline support
- **CDN** - Distribute static assets
- **HTTP caching** - Cache-Control headers

## Measuring Performance

Use Chrome DevTools and Lighthouse:

- **FCP** - First Contentful Paint
- **LCP** - Largest Contentful Paint
- **CLS** - Cumulative Layout Shift
- **TTI** - Time to Interactive

## Database Optimization

- **Indexing** - Speed up queries
- **Query optimization** - Reduce database load
- **Connection pooling** - Reuse connections
- **Caching** - Redis, Memcached

Remember: measure before optimizing. Focus on bottlenecks that actually impact users!
`
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
