import { Link } from '@tanstack/react-router';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 px-4 py-8 max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-1">Uchkun Rakhimov</h1>
        <p className="text-neutral-600 text-base mb-3">Backend Engineer | TypeScript • Nestjs/Expressjs • GCP/AWS</p>
        <div className="flex gap-3 text-xl text-neutral-600">
          <a href="https://github.com/uchkunrakhimow" className="hover:text-neutral-900 transition-colors" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://twitter.com/uchkunrakhimov" className="hover:text-neutral-900 transition-colors" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/uchkunio" className="hover:text-neutral-900 transition-colors" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:uchkunrakhimov@gmail.com" className="hover:text-neutral-900 transition-colors" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </header>

      <main>
        {/* About Me */}
        <section className="mb-8 animate-fadeInUp delay-100">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            Backend Engineer with 3+ years of experience building scalable systems using Node.js, TypeScript, NestJS/Express/Fastify, and MongoDB/PostgreSQL. Strong foundation in GCP infrastructure, distributed services, CI/CD, monitoring/logging, and production debugging. Frontend experience with React.js and modern tooling. Delivered production systems across startups and high-traffic applications with focus on performance, reliability, and code quality.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8 animate-fadeInUp delay-150">
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Node.js", "TypeScript", "NestJS", "Express.js", "Fastify",
              "React.js", "Tailwind CSS", "Redux", "Zustand",
              "MongoDB", "PostgreSQL", "MySQL", "Redis",
              "GCP", "AWS", "Docker", "CI/CD"
            ].map((skill) => (
              <span key={skill} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8 animate-fadeInUp delay-200">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <Link to="/experience" className="text-base text-neutral-600 hover:text-neutral-900 transition-colors">
              More →
            </Link>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-0.5">
                <h3 className="text-lg font-medium">Startups DNA</h3>
                <span className="text-sm text-neutral-500">Nov 2025 – Present</span>
              </div>
              <p className="text-neutral-500 text-sm mb-1">Backend Developer</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Architecting v2 API redesign for Fastify-based microservice with improved endpoint structure and error handling.
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-0.5">
                <h3 className="text-base font-medium">Numeo.ai</h3>
                <span className="text-xs text-neutral-500">May 2025 – Jul 2025</span>
              </div>
              <p className="text-neutral-500 text-xs mb-1">Backend Developer</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Led backend development for Chrome extension serving 1,000+ active users.
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-0.5">
                <h3 className="text-base font-medium">Freelancer</h3>
                <span className="text-xs text-neutral-500">Dec 2023 – May 2025</span>
              </div>
              <p className="text-neutral-500 text-xs mb-1">Fullstack Developer</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Built scalable systems including TedbookCRM and WiFi Captive Portal.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="animate-fadeInUp delay-300">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <Link to="/projects" className="text-base text-neutral-600 hover:text-neutral-900 transition-colors">
              More →
            </Link>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-1">TedbookCRM</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-1.5">
                Complete CRM backend supporting web and mobile platforms with real-time updates.
              </p>
              <div className="flex gap-2 text-xs text-neutral-500">
                <span>Express.js</span>
                <span>•</span>
                <span>TypeScript</span>
                <span>•</span>
                <span>MongoDB</span>
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium mb-1">WiFi Captive Portal</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-1.5">
                Authentication system handling 1,000+ daily user registrations across 14 branches.
              </p>
              <div className="flex gap-2 text-xs text-neutral-500">
                <span>MySQL</span>
                <span>•</span>
                <span>Sequelize</span>
                <span>•</span>
                <span>TypeScript</span>
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium mb-1">VoIP Integration System</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-1.5">
                Node.js middleware connecting Asterisk phone systems with custom call queue management.
              </p>
              <div className="flex gap-2 text-xs text-neutral-500">
                <span>Node.js</span>
                <span>•</span>
                <span>Asterisk</span>
                <span>•</span>
                <span>Real-time</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="mt-8 animate-fadeInUp delay-400">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-semibold">Blog</h2>
            <Link to="/blogs" className="text-base text-neutral-600 hover:text-neutral-900 transition-colors">
              More →
            </Link>
          </div>
          <div className="space-y-4">
            <div>
              <Link to="/blog/$slug" params={{ slug: 'getting-started-with-react-typescript' }}>
                <h3 className="text-lg font-medium mb-1 hover:text-neutral-600 transition-colors cursor-pointer">Getting Started with React and TypeScript</h3>
              </Link>
              <p className="text-neutral-600 text-sm leading-relaxed mb-1.5">
                Learn how to set up a modern React application with TypeScript and best practices.
              </p>
              <div className="flex gap-2 text-xs text-neutral-500">
                <span>Jan 15, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            <div>
              <Link to="/blog/$slug" params={{ slug: 'building-scalable-web-applications' }}>
                <h3 className="text-base font-medium mb-1 hover:text-neutral-600 transition-colors cursor-pointer">Building Scalable Web Applications</h3>
              </Link>
              <p className="text-neutral-600 text-sm leading-relaxed mb-1.5">
                Explore architectural patterns and design principles for maintainable apps.
              </p>
              <div className="flex gap-2 text-xs text-neutral-500">
                <span>Jan 8, 2024</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>

            <div>
              <Link to="/blog/$slug" params={{ slug: 'understanding-modern-css-layouts' }}>
                <h3 className="text-base font-medium mb-1 hover:text-neutral-600 transition-colors cursor-pointer">Understanding Modern CSS Layouts</h3>
              </Link>
              <p className="text-neutral-600 text-sm leading-relaxed mb-1.5">
                A comprehensive guide to Flexbox, Grid, and responsive design.
              </p>
              <div className="flex gap-2 text-xs text-neutral-500">
                <span>Dec 20, 2023</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
