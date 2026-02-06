import fm from 'front-matter';
import type { BlogPost, BlogFrontmatter } from '@/types/blog';

// Helper to calculate read time
const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

// Import all markdown files eagerly to get content
const markdownFiles = import.meta.glob('../content/blogs/*.md', { query: '?raw', import: 'default', eager: true });

export const getAllBlogs = (): BlogPost[] => {
  const posts: BlogPost[] = Object.entries(markdownFiles).map(([path, fileContent]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    // Ensure content is a string
    const content = typeof fileContent === 'string' ? fileContent : '';
    
    // Parse frontmatter
    const { attributes, body } = fm<BlogFrontmatter>(content);
    
    if (!attributes.title || !attributes.date) {
      console.warn(`Missing metadata in ${path}`);
    }

    return {
      slug,
      title: attributes.title || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      date: attributes.date ? new Date(attributes.date).toISOString() : new Date().toISOString(),
      excerpt: attributes.excerpt || body.slice(0, 150) + '...',
      readTime: attributes.readTime || calculateReadTime(body),
      tags: attributes.tags || [],
      content: body,
    };
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  const allPosts = getAllBlogs();
  return allPosts.find((post) => post.slug === slug);
};
