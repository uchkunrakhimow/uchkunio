import { Link } from '@tanstack/react-router';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 px-4 py-8 max-w-2xl mx-auto">
      <Link to="/" className="text-base text-neutral-600 hover:text-neutral-900 transition-colors mb-6 inline-block">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mb-6">All Projects</h1>

      <div className="space-y-5">
        <div>
          <h3 className="text-xl font-medium mb-2">TedbookCRM</h3>
          <p className="text-neutral-600 text-base leading-relaxed mb-2">
            Complete CRM backend built from scratch supporting web and mobile platforms. Features role-based access control, 
            real-time Socket.io updates, and Firebase Cloud Messaging for courier notifications. 
            Processes 50+ daily orders with admin analytics dashboard.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Express.js</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">TypeScript</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">MongoDB</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Socket.io</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Firebase</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">WiFi Captive Portal</h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-2">
            High-throughput authentication system handling 1,000+ daily user registrations across 14 branches.
            Includes OTP-based SMS verification and seamless integration with Unifi controller.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">TypeScript</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">MySQL</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Sequelize</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Unifi</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">VoIP Integration System</h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-2">
            Node.js middleware connecting Asterisk phone systems with a custom call queue management interface.
            Features real-time call monitoring, spy mode, and sub-second latency dashboard updates.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Node.js</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Asterisk</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Real-time</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Assetsy (v2 API)</h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-2">
            Architected v2 API redesign for Fastify-based microservice. Implemented database indexing strategies 
            and executed zero-downtime migrations for schema restructuring.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Fastify</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">MongoDB</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Microservices</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">PillPlan</h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-2">
            Automated medication reminder system using GCP Cloud Tasks and APNs. 
            Features queue-based notification architecture with retry logic and CI/CD pipeline establishment.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">NestJS</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">GCP Cloud Tasks</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">APNs</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">GitHub Actions</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Numeo.ai Chrome Extension</h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-2">
            Backend for Chrome extension with 1,000+ active users. Built scalable infrastructure on GCP + MongoDB 
            supporting real-time load filtering and AI integration.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">React</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">TypeScript</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">GCP</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">MongoDB</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">East Telecom Telegram Bot</h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-2">
            High-traffic Telegram bot rebuilt using PHP/Laravel + Nutgram. 
            Serves 60+ concurrent users and processes 300+ daily requests with a modular structure.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">PHP</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Laravel</span>
            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Nutgram</span>
          </div>
        </div>
      </div>
    </div>
  );
}
