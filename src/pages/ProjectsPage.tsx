import { Link } from '@tanstack/react-router';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8 max-w-4xl mx-auto">
      <Link to="/" className="text-base text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mb-6">All Projects</h1>

      <div className="space-y-8 animate-fadeInUp">
        <div className="p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
          <h3 className="text-xl font-medium mb-2">TedbookCRM</h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            Complete CRM backend built from scratch supporting web and mobile platforms. Features role-based access control, 
            real-time Socket.io updates, and Firebase Cloud Messaging for courier notifications. 
            Processes 50+ daily orders with admin analytics dashboard.
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Express.js</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">TypeScript</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">MongoDB</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Socket.io</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Firebase</span>
            </div>
            <a 
              href="https://tedbook.crm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Live Demo <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
          <h3 className="text-lg font-medium mb-2">WiFi Captive Portal</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            High-throughput authentication system handling 1,000+ daily user registrations across 14 branches.
            Includes OTP-based SMS verification and seamless integration with Unifi controller.
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">TypeScript</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">MySQL</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Sequelize</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Unifi</span>
            </div>
            <a 
              href="https://wifi.login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Live Demo <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
          <h3 className="text-lg font-medium mb-2">VoIP Integration System</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Node.js middleware connecting Asterisk phone systems with a custom call queue management interface.
            Features real-time call monitoring, spy mode, and sub-second latency dashboard updates.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Node.js</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Asterisk</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Real-time</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
          <h3 className="text-lg font-medium mb-2">Assetsy (v2 API)</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Architected v2 API redesign for Fastify-based microservice. Implemented database indexing strategies 
            and executed zero-downtime migrations for schema restructuring.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Fastify</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">MongoDB</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Microservices</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
          <h3 className="text-lg font-medium mb-2">PillPlan</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Automated medication reminder system using GCP Cloud Tasks and APNs. 
            Features queue-based notification architecture with retry logic and CI/CD pipeline establishment.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">NestJS</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">GCP Cloud Tasks</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">APNs</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">GitHub Actions</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
          <h3 className="text-lg font-medium mb-2">Numeo.ai Chrome Extension</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Backend for Chrome extension with 1,000+ active users. Built scalable infrastructure on GCP + MongoDB 
            supporting real-time load filtering and AI integration.
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">React</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">TypeScript</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">GCP</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">MongoDB</span>
            </div>
            <a 
              href="https://numeo.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Live Demo <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
          <h3 className="text-lg font-medium mb-2">East Telecom Telegram Bot</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            High-traffic Telegram bot rebuilt using PHP/Laravel + Nutgram. 
            Serves 60+ concurrent users and processes 300+ daily requests with a modular structure.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">PHP</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Laravel</span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded border border-border/50">Nutgram</span>
          </div>
        </div>
      </div>
    </div>
  );
}
