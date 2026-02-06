import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFileAlt } from 'react-icons/fa';

export const SOCIAL_LINKS = [
  { href: "https://github.com/uchkunrakhimow", icon: FaGithub, label: "GitHub" },
  { href: "https://twitter.com/uchkunrakhimov", icon: FaTwitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/uchkunio", icon: FaLinkedin, label: "LinkedIn" },
  { href: "mailto:uchkunrakhimov@gmail.com", icon: FaEnvelope, label: "Email" },
  { href: "/resume.pdf", icon: FaFileAlt, label: "Resume" }
];

export const BIO = {
  name: "Uchkun Rakhimov",
  title: "Backend Engineer",
  subtitle: "specializing in scalable distributed systems",
  description: (
    <>
      Backend Engineer specializing in scalable distributed systems. 
      Expert in <span className="text-foreground font-medium">TypeScript, NestJS, and Cloud Infrastructure</span>.
    </>
  )
};

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  active?: boolean;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Backend Developer",
    company: "Startups DNA",
    period: "Nov 2025 - Present",
    description: "Architecting v2 API redesign for high-throughput node services.",
    active: true
  },
  {
    role: "Backend Developer",
    company: "Numeo.ai",
    period: "May 2025 - Jul 2025",
    description: "Scaled Chrome extension backend to support 1k+ daily users."
  }
];

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    title: "TedbookCRM",
    description: "Enterprise CRM with real-time WebSocket updates and offline-first mobile sync.",
    stack: ["TypeScript", "MongoDB"]
  },
  {
    title: "WiFi Captive Portal",
    description: "Auth system handling distributed session management across 14 locations.",
    stack: ["Redis", "MySQL"]
  }
];
