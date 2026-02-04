import gettingStartedWithReactContent from '../content/blogs/getting-started-with-react-typescript.md?raw';
import buildingScalableWebAppsContent from '../content/blogs/building-scalable-web-applications.md?raw';
import modernCssLayoutsContent from '../content/blogs/understanding-modern-css-layouts.md?raw';
import apiDesignContent from '../content/blogs/api-design-best-practices.md?raw';
import tanstackRouterContent from '../content/blogs/introduction-to-tanstack-router.md?raw';
import performanceOptimizationContent from '../content/blogs/performance-optimization-techniques.md?raw';

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
    content: gettingStartedWithReactContent
  },
  {
    id: 2,
    slug: "building-scalable-web-applications",
    title: "Building Scalable Web Applications",
    excerpt: "Explore architectural patterns and design principles for creating maintainable and scalable web applications.",
    date: "2024-01-08",
    readTime: "8 min read",
    tags: ["Architecture", "Best Practices", "Software Engineering"],
    content: buildingScalableWebAppsContent
  },
  {
    id: 3,
    slug: "understanding-modern-css-layouts",
    title: "Understanding Modern CSS Layouts",
    excerpt: "A comprehensive guide to Flexbox, Grid, and responsive design techniques for modern web layouts.",
    date: "2023-12-20",
    readTime: "6 min read",
    tags: ["CSS", "Frontend", "Design"],
    content: modernCssLayoutsContent
  },
  {
    id: 4,
    slug: "api-design-best-practices",
    title: "API Design Best Practices",
    excerpt: "Key principles and patterns for designing RESTful APIs that are intuitive, consistent, and developer-friendly.",
    date: "2023-12-10",
    readTime: "7 min read",
    tags: ["API", "Backend", "REST"],
    content: apiDesignContent
  },
  {
    id: 5,
    slug: "introduction-to-tanstack-router",
    title: "Introduction to TanStack Router",
    excerpt: "Discover the power of type-safe routing in React applications with TanStack Router and its modern features.",
    date: "2023-11-25",
    readTime: "10 min read",
    tags: ["React", "Routing", "TanStack"],
    content: tanstackRouterContent
  },
  {
    id: 6,
    slug: "performance-optimization-techniques",
    title: "Performance Optimization Techniques",
    excerpt: "Practical strategies for improving web application performance, from code splitting to lazy loading.",
    date: "2023-11-15",
    readTime: "9 min read",
    tags: ["Performance", "Optimization", "Web Development"],
    content: performanceOptimizationContent
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

