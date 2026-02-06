import { Link } from '@tanstack/react-router';
import { EXPERIENCE_DATA } from '@/data/personal';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8 max-w-4xl mx-auto">
      <Link to="/" className="text-base text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mb-8 animate-fadeIn">All Experience</h1>

      <div className="space-y-12 animate-fadeInUp delay-200">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-border/50 group">
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 ${index === 0 ? 'border-primary' : 'border-muted-foreground'} group-hover:border-primary transition-colors`} />
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div className="space-y-1">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                <p className="text-lg font-medium text-foreground/80">{exp.company}</p>
              </div>
              <span className="text-sm font-mono text-muted-foreground mt-1 sm:mt-0 bg-secondary/50 px-2 py-1 rounded inline-block h-fit">
                {exp.period}
              </span>
            </div>

            <div className="text-muted-foreground text-base mb-6 leading-relaxed whitespace-pre-wrap">
              {exp.longDescription || exp.description}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
              {exp.technologies && (
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono bg-secondary/60 backdrop-blur-sm px-2 py-1 rounded text-secondary-foreground border border-border/50 hover:border-primary/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {exp.website && (
                <div className="mt-2 sm:mt-0">
                  <a 
                    href={exp.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Website
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
