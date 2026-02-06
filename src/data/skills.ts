import { 
  FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, 
} from 'react-icons/fa';
import { SiExpress, SiNestjs, SiRedis } from "react-icons/si";


import { 
  SiTypescript, SiPostgresql, SiGraphql, SiGooglecloud 
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  category: 'frontend' | 'backend' | 'devops';
}

export const SKILLS: Skill[] = [
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'backend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'frontend' },
  { name: 'Nestjs', icon: SiNestjs, color: '#EA284E', category: 'backend' },
  { name: 'Expressjs', icon: SiExpress, color: '#67CD22', category: 'backend' },
  { name: 'React', icon: FaReact, color: '#61DAFB', category: 'frontend' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'backend' },
  { name: 'Redis', icon: SiRedis, color: '#D82C20', category: 'backend' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'backend' },
  { name: 'AWS', icon: FaAws, color: '#FF9900', category: 'devops' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#EA4335', category: 'devops' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED', category: 'devops' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'devops' },
];
