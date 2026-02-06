import { Link } from '@tanstack/react-router';
import { SkillGrid, GitHubActivity } from '@/components/SkillGrid';
import { getAllBlogs } from '@/lib/blogUtils';
import { SOCIAL_LINKS, BIO, EXPERIENCE_DATA, FEATURED_PROJECTS } from '@/data/personal';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
               {EXPERIENCE_DATA.slice(0, 3).map((exp, index) => (
                 <Dialog key={index}>
                   <DialogTrigger asChild>
                     <div className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors cursor-pointer group">
                       <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 ${index === 0 ? 'border-primary' : 'border-muted-foreground'}`} />
                       <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                       <p className="text-sm text-primary font-medium mb-1">{exp.company} • {exp.period}</p>
                       <p className="text-muted-foreground text-sm">
                         {exp.description}
                       </p>
                     </div>
                   </DialogTrigger>
                   <DialogContent className="sm:max-w-md">
                     <DialogHeader>
                       <DialogTitle className="text-xl font-bold">{exp.role} at {exp.company}</DialogTitle>
                       <DialogDescription>
                         {exp.period}
                       </DialogDescription>
                     </DialogHeader>
                     <div className="space-y-4 pt-4">
                       {exp.longDescription && (
                         <p className="text-sm text-muted-foreground leading-relaxed">
                           {exp.longDescription}
                         </p>
                       )}
                       
                       {exp.technologies && (
                         <div className="space-y-2">
                           <h4 className="text-sm font-semibold">Skills</h4>
                           <div className="flex flex-wrap gap-2">
                             {exp.technologies.map((tech) => (
                               <span key={tech} className="text-xs font-mono bg-secondary/80 px-2 py-1 rounded text-secondary-foreground border border-border">
                                 {tech}
                               </span>
                             ))}
                           </div>
                         </div>
                       )}

                       {exp.website && (
                         <div className="pt-2">
                           <a 
                             href={exp.website} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                           >
                             <FaExternalLinkAlt className="text-sm" />
                             Website
                           </a>
                         </div>
                       )}
                     </div>
                   </DialogContent>
                 </Dialog>
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
                 <Dialog key={index}>
                   <DialogTrigger asChild>
                     <div className="group p-4 rounded-xl bg-secondary/40 backdrop-blur-md border border-transparent hover:border-primary/20 transition-all hover:shadow-lg cursor-pointer">
                       <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                       <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                       <div className="flex flex-wrap gap-2">
                         {project.stack.map((tech) => (
                           <span key={tech} className="text-xs font-mono bg-secondary px-2 py-0.5 rounded text-secondary-foreground">{tech}</span>
                         ))}
                       </div>
                     </div>
                   </DialogTrigger>
                   <DialogContent className="sm:max-w-md">
                     <DialogHeader>
                       <DialogTitle className="text-xl font-bold">{project.title}</DialogTitle>
                       <DialogDescription>
                         {project.description}
                       </DialogDescription>
                     </DialogHeader>
                     <div className="space-y-4 pt-4">
                       {project.longDescription && (
                         <p className="text-sm text-muted-foreground leading-relaxed">
                           {project.longDescription}
                         </p>
                       )}
                       
                       <div className="space-y-2">
                         <h4 className="text-sm font-semibold">Skills</h4>
                         <div className="flex flex-wrap gap-2">
                           {project.stack.map((tech) => (
                             <span key={tech} className="text-xs font-mono bg-secondary/80 px-2 py-1 rounded text-secondary-foreground border border-border">
                               {tech}
                             </span>
                           ))}
                         </div>
                       </div>

                       <div className="flex gap-4 pt-4">
                         {project.github && (
                           <a 
                             href={project.github} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                           >
                             <FaGithub className="text-lg" />
                             Source Code
                           </a>
                         )}
                         {project.link && (
                           <a 
                             href={project.link} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                           >
                             <FaExternalLinkAlt className="text-sm" />
                             Live Demo
                           </a>
                         )}
                       </div>
                     </div>
                   </DialogContent>
                 </Dialog>
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
