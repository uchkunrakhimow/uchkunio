import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { getAllBlogs } from '@/lib/blogUtils';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const allPosts = useMemo(() => getAllBlogs(), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredPosts = useMemo(() => {
    const lowerQuery = searchQuery.toLowerCase();
    return allPosts.filter(post => 
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }, [allPosts, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8 max-w-4xl mx-auto">
      <Link to="/" className="text-base text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
        ← Back
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="relative w-full md:w-64">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary/50 border border-transparent focus:border-primary rounded-lg px-4 py-2 text-sm outline-none transition-all placeholder:text-muted-foreground/70"
          />
          <span className="absolute right-3 top-2.5 text-xs text-muted-foreground">⌘K</span>
        </div>
      </div>

      <div className="space-y-6">
        <AnimatePresence>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="border-b border-border pb-6 last:border-0 group"
              >
                <Link to="/blog/$slug" params={{ slug: post.slug }}>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors cursor-pointer">
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
              </motion.article>
            ))
          ) : (
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }}
               className="text-center py-12 text-muted-foreground"
             >
               <p>No articles found matching "{searchQuery}"</p>
               <button 
                 onClick={() => setSearchQuery('')}
                 className="mt-2 text-primary hover:underline text-sm"
               >
                 Clear search
               </button>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
