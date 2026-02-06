import { Link } from '@tanstack/react-router';
import { SkillGrid, GitHubActivity } from '@/components/SkillGrid';
import { getAllBlogs } from '@/lib/blogUtils';
import { SOCIAL_LINKS, BIO, EXPERIENCE_DATA, FEATURED_PROJECTS } from '@/data/personal';

export default function HomePage() {
  const latestBlogs = getAllBlogs().slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-12 animate-fadeIn text-left">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/50 mb-4">
          {BIO.name}
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
          {BIO.description}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-start">
          <div className="flex gap-3 text-2xl text-muted-foreground">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="hover:text-foreground transition-colors transform hover:scale-110" 
                aria-label={link.label}
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="space-y-16">

        {/* Skills */}
        <section className="animate-fadeInUp delay-200">
          <SkillGrid />
          <GitHubActivity />
        </section>

        {/* Experience & Projects (Abbreviated) */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <section className="animate-fadeInUp delay-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold border-b-2 border-primary/20 pb-2">Experience</h2>
              <Link to="/experience" className="text-sm text-primary hover:underline">View All</Link>
            </div>
            <div className="space-y-8">
              {EXPERIENCE_DATA.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors">
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 ${index === 0 ? 'border-primary' : 'border-muted-foreground'}`} />
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{exp.company} • {exp.period}</p>
                  <p className="text-muted-foreground text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="animate-fadeInUp delay-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold border-b-2 border-primary/20 pb-2">Featured Work</h2>
              <Link to="/projects" className="text-sm text-primary hover:underline">View All</Link>
            </div>
            <div className="space-y-6">
               {FEATURED_PROJECTS.map((project, index) => (
                 <div key={index} className="group p-4 rounded-xl bg-secondary/40 backdrop-blur-md border border-transparent hover:border-primary/20 transition-all hover:shadow-lg">
                   <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                   <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                   <div className="flex flex-wrap gap-2">
                     {project.stack.map((tech) => (
                       <span key={tech} className="text-xs font-mono bg-secondary px-2 py-0.5 rounded text-secondary-foreground">{tech}</span>
                     ))}
                   </div>
                 </div>
               ))}
            </div>
          </section>
        </div>

        {/* Latest Thoughts */}
        <section className="animate-fadeInUp delay-400">
           <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest Thoughts</h2>
            <Link to="/blogs" className="text-sm text-primary hover:underline">Read Blog</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestBlogs.map((blog) => (
              <Link 
                key={blog.slug} 
                to="/blog/$slug" 
                params={{ slug: blog.slug }}
                className="group block p-5 rounded-2xl bg-secondary/40 backdrop-blur-md hover:bg-secondary/70 transition-all border border-transparent hover:border-primary/20"
              >
                <div className="text-xs font-mono text-primary mb-2">
                  {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                <h3 className="text-lg font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {blog.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}
