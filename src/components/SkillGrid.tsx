import { useRef, useState } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { FaGitAlt } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { fetchGitHubContributions } from '@/lib/github';
import { SKILLS } from '@/data/skills';

export const SkillGrid = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="py-12" ref={containerRef}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
      >
        Skills
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            transition={{duration: 0.3}}
            className="group flex flex-col items-center justify-center p-3 bg-secondary/60 backdrop-blur-md rounded-xl hover:bg-secondary/80 hover:shadow-lg transition-[background-color,border-color,box-shadow] border border-transparent hover:border-border cursor-default"
          >
            <skill.icon 
              className="text-4xl mb-3 transition-all duration-200" 
              style={{ color: skill.color }}
            />
            <span className="font-medium text-sm text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const GitHubActivity = () => {
  const [selectedYear, setSelectedYear] = useState<string>('last');
  const user = 'uchkunrakhimow';

  const { data: contributions = [], isLoading } = useQuery({
    queryKey: ['github-contributions', user, selectedYear],
    queryFn: () => fetchGitHubContributions(user, selectedYear),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const years = [
    { label: '2026', value: '2026' },
    { label: '2025', value: '2025' },
    { label: '2024', value: '2024' },
    { label: '2023', value: '2023' },
  ];

  // Level colors map (using Tailwind classes)
  const getLevelClass = (level: number) => {
    switch (level) {
      case 0: return "bg-zinc-800";
      case 1: return "bg-emerald-900";
      case 2: return "bg-emerald-700";
      case 3: return "bg-emerald-500";
      case 4: return "bg-emerald-300";
      default: return "bg-zinc-800";
    }
  };

  // Calculate total contributions
  const totalContributions = contributions.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="mt-16 p-6 border border-border rounded-xl bg-card/60 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <FaGitAlt className="text-orange-500" /> 
            Code Activity
          </h3>
          <p className="text-xs text-muted-foreground font-mono">
            {isLoading ? 'Calculating...' : (
              <>
                <span className="text-foreground font-bold">{totalContributions}</span> contributions 
                {selectedYear === 'last' ? ' in the last year' : ` in ${selectedYear}`}
              </>
            )}
          </p>
        </div>
        
        <select 
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="bg-secondary/50 border border-border rounded-lg px-3 py-1.5 text-sm outline-none focus:border-primary transition-colors cursor-pointer hover:bg-secondary text-foreground"
        >
          {years.map(year => (
            <option key={year.value} value={year.value}>{year.label}</option>
          ))}
        </select>
      </div>
      
      <div className="flex flex-wrap gap-1 justify-center opacity-80 min-h-[100px] content-center">
        {isLoading 
          ? Array.from({ length: 365 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-[1px] bg-zinc-800/50 animate-pulse" />
            ))
          : contributions.map((day) => (
             <div key={day.date} className="relative group cursor-default">
               <div 
                 className={cn(
                   "w-2 h-2 rounded-[1px] transition-colors duration-300",
                   getLevelClass(day.level)
                 )}
               />
               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50 whitespace-nowrap bg-zinc-900 text-zinc-100 text-[10px] px-2 py-1 rounded shadow-xl border border-zinc-800 font-mono pointer-events-none">
                 <span className="font-bold text-emerald-400">{day.count}</span> on {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                 {/* Triangle Arrow */}
                 <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-800" />
               </div>
             </div>
          ))
        }
      </div>
    </div>
  );
}
