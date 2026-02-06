import { useEffect } from 'react';
import { Link, useParams } from '@tanstack/react-router';
import ReactMarkdown from 'react-markdown';
import { getBlogBySlug } from '@/lib/blogUtils';
import { ReadingProgressBar } from '@/components/ProgressBar';

export default function BlogDetailPage() {
  const { slug } = useParams({ strict: false });
  const post = slug ? getBlogBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground px-4 py-8 max-w-4xl mx-auto">
        <Link to="/blogs" className="text-base text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
          ← Back to Blogs
        </Link>
        <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
        <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8 max-w-4xl mx-auto">
      <ReadingProgressBar />
      <Link to="/blogs" className="text-base text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
        ← Back to Blogs
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-3 text-base text-muted-foreground mb-4">
            <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <span key={tag} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">{children}</h3>,
              p: ({ children }) => <p className="text-base text-muted-foreground leading-relaxed mb-4">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">{children}</ol>,
              li: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
              code: ({ className, children }) => {
                const isInline = !className;
                if (isInline) {
                  return <code className="bg-muted text-foreground px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>;
                }
                return <code className="block bg-muted text-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono mb-4">{children}</code>;
              },
              pre: ({ children }) => <pre className="mb-4">{children}</pre>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-border pl-4 italic text-muted-foreground mb-4">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-foreground underline hover:text-muted-foreground transition-colors">
                  {children}
                </a>
              ),
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
