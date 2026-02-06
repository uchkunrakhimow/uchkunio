export interface BlogPostMetadata {
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export interface BlogPost extends BlogPostMetadata {
  content: string;
}

export type BlogFrontmatter = Omit<BlogPostMetadata, 'slug'>;
