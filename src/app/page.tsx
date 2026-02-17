'use client';

import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import TerminalSection from '@/components/TerminalSection';
import CloudArchitectureDashboard from '@/components/CloudArchitectureDashboard';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import VoiceAssistant from '@/components/VoiceAssistant';
import FeedbackForm from '@/components/FeedbackForm';

export default function Home() {
  return (
    <main className="relative bg-dark-bg text-gray-100 overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Main content */}
      <div className="relative z-10">
        {/* Navigation bar */}
        <nav className="fixed top-0 left-0 right-0 z-40 glass-strong border-b border-neon-blue/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text font-mono">
              SAURABH.SINGH
            </h1>
            <div className="hidden md:flex gap-8">
              {['Portfolio', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-mono text-gray-300 hover:text-neon-blue transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Page sections */}
        <section id="home" className="scroll-mt-16">
          <HeroSection />
        </section>

        <section id="terminal" className="scroll-mt-16">
          <TerminalSection />
        </section>

        <section id="dashboard" className="scroll-mt-16">
          <CloudArchitectureDashboard />
        </section>

        <section id="experience" className="scroll-mt-16">
          <ExperienceSection />
        </section>

        <section id="projects" className="scroll-mt-16">
          <ProjectsSection />
        </section>

        <section id="certifications" className="scroll-mt-16">
          <CertificationsSection />
        </section>

        <section id="about" className="scroll-mt-16">
          <AboutSection />
        </section>

        <section id="contact" className="scroll-mt-16">
          <ContactSection />
        </section>

        <Footer />
      </div>

      {/* Voice Assistant & Feedback */}
      <VoiceAssistant />
      <FeedbackForm />
    </main>
  );
}
