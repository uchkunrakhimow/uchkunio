# Performance Optimization Techniques

Performance directly impacts user experience and conversions. Let's explore proven optimization strategies.

## Code Splitting

Split your bundle into smaller chunks:

```typescript
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}
```

## Image Optimization

1. **Use modern formats** - WebP, AVIF
2. **Responsive images** - srcset and sizes
3. **Lazy loading** - Load images as needed
4. **Optimize dimensions** - Don't serve larger than displayed

```html
<img
  src="image.webp"
  srcset="image-small.webp 400w, image-large.webp 800w"
  sizes="(max-width: 600px) 400px, 800px"
  loading="lazy"
  alt="Description"
/>
```

## Minimize JavaScript

- **Tree shaking** - Remove unused code
- **Minification** - Compress code
- **Bundle analysis** - Identify large dependencies

```bash
npm install -D vite-bundle-visualizer
```

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
