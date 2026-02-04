import { useEffect } from 'react';
import { Link, useParams } from '@tanstack/react-router';
import ReactMarkdown from 'react-markdown';
import { getBlogBySlug } from '../data/blogData';

export default function BlogDetailPage() {
  const { slug } = useParams({ strict: false });
  const post = slug ? getBlogBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-neutral-900 px-4 py-8 max-w-2xl mx-auto">
        <Link to="/blogs" className="text-base text-neutral-600 hover:text-neutral-900 transition-colors mb-6 inline-block">
          ← Back to Blogs
        </Link>
        <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
        <p className="text-neutral-600">The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 px-4 py-8 max-w-2xl mx-auto">
      <Link to="/blogs" className="text-base text-neutral-600 hover:text-neutral-900 transition-colors mb-6 inline-block">
        ← Back to Blogs
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-3 text-base text-neutral-500 mb-4">
            <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <span key={tag} className="text-sm bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-neutral max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>,
              p: ({ children }) => <p className="text-base text-neutral-700 leading-relaxed mb-4">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-700">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-neutral-700">{children}</ol>,
              li: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
              code: ({ className, children }) => {
                const isInline = !className;
                if (isInline) {
                  return <code className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>;
                }
                return <code className="block bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto text-sm font-mono mb-4">{children}</code>;
              },
              pre: ({ children }) => <pre className="mb-4">{children}</pre>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-neutral-300 pl-4 italic text-neutral-600 mb-4">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-neutral-900 underline hover:text-neutral-600 transition-colors">
                  {children}
                </a>
              ),
              strong: ({ children }) => <strong className="font-semibold text-neutral-900">{children}</strong>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
