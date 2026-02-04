import { Link } from '@tanstack/react-router';
import { blogPosts } from '../data/blogData';

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8 max-w-2xl mx-auto">
      <Link to="/" className="text-base text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b border-border pb-6 last:border-0">
            <Link to="/blog/$slug" params={{ slug: post.slug }}>
              <h2 className="text-xl font-semibold mb-2 hover:text-muted-foreground transition-colors cursor-pointer">
                {post.title}
              </h2>
            </Link>
            <div className="flex gap-3 text-sm text-muted-foreground mb-2">
              <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-3">
              {post.excerpt}
            </p>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
