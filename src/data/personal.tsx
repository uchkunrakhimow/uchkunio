import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFileAlt } from 'react-icons/fa';

export const SOCIAL_LINKS = [
  { href: "https://github.com/uchkunrakhimow", icon: FaGithub, label: "GitHub" },
  { href: "https://twitter.com/uchkunrakhimov", icon: FaTwitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/uchkunio", icon: FaLinkedin, label: "LinkedIn" },
  { href: "mailto:uchkunrakhimov@gmail.com", icon: FaEnvelope, label: "Email" },
  { href: "https://docs.google.com/document/d/1urFr8PbkJc7hbxIc53rLXC0qdW0sCjIwkt84ONxhhFY/edit?usp=sharing", icon: FaFileAlt, label: "Resume" }
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
  longDescription?: string;
  technologies?: string[];
  website?: string;
  active?: boolean;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Backend Developer",
    company: "Startups DNA",
    period: "Nov 2025 - Present",
    description: "Architecting v2 API redesign for high-throughput node services.",
    longDescription: "Leading the backend architecture redesign to improve scalability and performance. Implemented microservices using NestJS and optimized database queries, resulting in a 40% reduction in response times. Collaborating closely with frontend teams and product managers to deliver robust features for the SaaS platform.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
    website: "https://startupsdna.com",
    active: true
  },
  {
    role: "Backend Developer",
    company: "Numeo.ai",
    period: "May 2025 - Jul 2025",
    description: "Scaled Chrome extension backend to support 1k+ daily users.",
    longDescription: "Developed and maintained the backend infrastructure for a high-traffic Chrome extension. Optimized API endpoints for low latency and implemented a caching strategy using Redis. set up automated CI/CD pipelines to streamline deployment processes.",
    technologies: ["Node.js", "Express", "MongoDB", "Google Cloud", "GitHub Actions"],
    website: "https://numeo.ai"
  },
  {
    role: "Fullstack Developer",
    company: "Freelancer",
    period: "Dec 2023 – May 2025",
    description: "Delivered complex solutions including CRM, Auth Systems, and VoIP integrations.",
    longDescription: "Worked on various projects:\n\n• TedbookCRM: Built complete CRM backend from scratch using Express.js + TypeScript + MongoDB.\n• WiFi Captive Portal: Developed authentication system handling 1,000+ daily users across 14 locations.\n• VoIP Integration: Built Node.js middleware for Asterisk phone systems.\n• Chatwoot Customization: Refactored auth system and optimized media handling.",
    technologies: ["Node.js", "TypeScript", "MongoDB", "MySQL", "Redis", "Socket.io", "Express"],
  },
  {
    role: "Software Engineer",
    company: "EAST TELECOM",
    period: "Jun 2022 – Apr 2024",
    description: "Rebuilt high-traffic Telegram bot using PHP/Laravel + Nutgram framework.",
    longDescription: "Rebuilt high-traffic Telegram bot for improved performance. Currently serving 60+ concurrent users processing 300+ daily requests. Architected modular bot structure enabling rapid feature deployment and contributed to CRM/BPM systems using Odoo and Jira.",
    technologies: ["PHP", "Laravel", "Nutgram", "Odoo", "Jira"],
  },
  {
    role: "Frontend Developer",
    company: "PHOENIX SYSTEMS",
    period: "Jan 2022 – Apr 2022",
    description: "Redesigned and modernized the user interface of an e-commerce platform.",
    longDescription: "Redesigned and modernized the user interface of an e-commerce platform, improving the overall customer experience.",
    technologies: ["React", "JavaScript", "CSS"],
  }
];

export interface ProjectItem {
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  github?: string;
  link?: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    title: "TedbookCRM",
    description: "Enterprise CRM with real-time WebSocket updates and offline-first mobile sync.",
    longDescription: "A comprehensive CRM solution designed for enterprise needs, featuring real-time data synchronization using WebSockets. The system supports offline-first capabilities, ensuring field agents can work without internet connectivity and sync changes once back online. Built with a robust backend architecture to handle high concurrency and data consistency.",
    stack: ["TypeScript", "MongoDB", "Socket.io", "React", "Node.js"],
    github: "https://github.com/uchkunrakhimow/tedbook-crm",
    link: "https://tedbook.crm"
  },
  {
    title: "WiFi Captive Portal",
    description: "Auth system handling distributed session management across 14 locations.",
    longDescription: "A scalable authentication system for WiFi networks across multiple physical locations. It manages user sessions centrally using Redis for high performance and low latency. The system integrates with Mikrotik equipment and provides a seamless login experience for thousands of daily users while enforcing time and bandwidth quotas.",
    stack: ["Redis", "MySQL", "Node.js", "Mikrotik API", "Vue.js"],
    github: "https://github.com/uchkunrakhimow/wifi-portal",
    link: "https://wifi.login"
  }
];
