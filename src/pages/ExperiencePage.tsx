import { Link } from '@tanstack/react-router';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8 max-w-4xl mx-auto">
      <Link to="/" className="text-base text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mb-6">All Experience</h1>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-0.5">
            <h3 className="text-xl font-medium">Backend Developer</h3>
            <span className="text-base text-muted-foreground">Nov 2025 – Present</span>
          </div>
          <p className="text-muted-foreground text-base mb-2">Startups DNA</p>
          <div className="text-muted-foreground text-base leading-relaxed space-y-4">
            <div>
              <p className="font-medium text-sm text-muted-foreground mb-1">Assetsy (Nov 2025 – Dec 2025)</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-1">
                <li>Architecting v2 API redesign for Fastify-based microservice with improved endpoint structure and error handling across MongoDB transactions</li>
                <li>Implemented database indexing strategies and query optimization for high-traffic endpoints</li>
                <li>Executing zero-downtime migrations to restructure database schemas while maintaining backward compatibility</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-sm text-muted-foreground mb-1">PillPlan (Aug 2025 – Nov 2025)</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-1">
                <li>Built automated medication reminder system using GCP Cloud Tasks for scheduled push notifications via APNs</li>
                <li>Implemented queue-based notification architecture with retry logic for failed deliveries and scheduling edge cases</li>
                <li>Established CI/CD pipeline using GitHub Actions for automated admin panel deployment</li>
                <li>Refactored legacy codebase following clean code principles across NestJS monorepo (Nx workspace)</li>
                <li>Optimized MongoDB aggregation pipelines for improved query performance</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-0.5">
            <h3 className="text-xl font-medium">Backend Developer</h3>
            <span className="text-base text-muted-foreground">May 2025 – Jul 2025</span>
          </div>
          <p className="text-muted-foreground text-base mb-2">Numeo.ai</p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-1">
            <li>Led backend development for Chrome extension serving 1,000+ active users, architecting TypeScript + React monorepo using Microsoft Rush</li>
            <li>Implemented production monitoring and on-call system using GCP logging for debugging and incident response</li>
            <li>Built scalable backend infrastructure on GCP + MongoDB supporting real-time load filtering and AI integration for logistics workflows</li>
            <li>Established error tracking and alerting system for production stability</li>
            <li>Applied structured decision-making frameworks to technical design and code reviews</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between mb-0.5">
            <h3 className="text-xl font-medium">Fullstack Developer</h3>
            <span className="text-base text-muted-foreground">Dec 2023 – May 2025</span>
          </div>
          <p className="text-muted-foreground text-base mb-2">Freelancer</p>
          <div className="text-muted-foreground text-base leading-relaxed space-y-4">
            <div>
              <p className="font-medium text-sm text-muted-foreground mb-1">TedbookCRM</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-1">
                <li>Architected and built complete CRM backend from scratch using Express.js + TypeScript + MongoDB, supporting web and mobile platforms</li>
                <li>Designed role-based system serving operators, logistics managers, warehouse staff, and couriers with real-time Socket.io updates</li>
                <li>Implemented Firebase Cloud Messaging for push notifications to courier mobile apps</li>
                <li>Currently processing 50+ daily orders across distributed team of 10+ users with total transaction volume approaching 600 orders</li>
                <li>Built admin analytics dashboard providing real-time statistics with daily/weekly/monthly reporting capabilities</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-sm text-muted-foreground mb-1">WiFi Captive Portal (Yaponama)</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-1">
                <li>Developed high-throughput authentication system handling 1,000+ daily user registrations across 14 branch locations</li>
                <li>Implemented OTP-based SMS verification integrated with Unifi controller for seamless network access provisioning</li>
                <li>Built using MySQL + Sequelize ORM + TypeScript ensuring data consistency and transaction safety</li>
                <li>Deployed production-ready system with automated user provisioning reducing manual configuration overhead to zero</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-sm text-muted-foreground mb-1">VoIP Integration System</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-1">
                <li>Built Node.js middleware connecting Asterisk phone systems with custom call queue management interface</li>
                <li>Implemented real-time call monitoring features including spy mode, pause controls, and intelligent call routing</li>
                <li>Delivered operator dashboard displaying live incoming/outgoing call information with sub-second latency</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-sm text-muted-foreground mb-1">Chatwoot Customization</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-1">
                <li>Refactored authentication system and optimized media handling (images/videos) for client deployment</li>
                <li>Fixed critical copy-paste bugs and implemented file upload restrictions improving system stability</li>
                <li>Enhanced third-party integrations and resolved production errors affecting user experience</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-0.5">
            <h3 className="text-xl font-medium">Software Engineer</h3>
            <span className="text-base text-muted-foreground">Jun 2022 – Apr 2024</span>
          </div>
          <p className="text-muted-foreground text-base mb-2">EAST TELECOM</p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-1">
            <li>Rebuilt high-traffic Telegram bot using PHP/Laravel + Nutgram framework for improved performance</li>
            <li>Currently serving 60+ concurrent users processing 300+ daily requests across multiple user groups</li>
            <li>Architected modular bot structure enabling rapid feature deployment and external bot integration</li>
            <li>Contributed to CRM/BPM systems development using Odoo and Jira platforms</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between mb-0.5">
            <h3 className="text-xl font-medium">Frontend Developer</h3>
            <span className="text-base text-muted-foreground">Jan 2022 – Apr 2022</span>
          </div>
          <p className="text-muted-foreground text-base mb-2">PHOENIX SYSTEMS</p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-1">
            <li>Redesigned and modernized the user interface of an e-commerce platform, improving the overall customer experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
