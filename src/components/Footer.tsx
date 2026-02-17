'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [systemStatus, setSystemStatus] = useState({
    integrity: 100,
    threatDetection: true,
    cloudStatus: 'Operational',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus((prev) => ({
        ...prev,
        integrity: Math.max(97, Math.min(100, prev.integrity + (Math.random() - 0.5) * 2)),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'GitHub', url: '#', icon: '🐙' },
    { name: 'Email', url: 'mailto:saurabh@example.com', icon: '📧' },
  ];

  return (
    <footer className="relative border-t border-neon-blue/20 bg-dark-secondary/50 backdrop-blur-sm">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-neon-blue font-mono font-bold mb-4">SAURABH SINGH</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cloud & Cybersecurity Engineer specializing in Zero-Trust Architecture and Enterprise Identity Management.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-neon-cyan font-mono font-bold mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Experience', 'Certifications'].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-neon-cyan font-mono font-bold mb-4">SPECIALTIES</h3>
            <ul className="space-y-2">
              {['Azure AD', 'Zero-Trust', 'Microsoft 365', 'Intune'].map((service, idx) => (
                <li key={idx} className="text-sm text-gray-400">
                  ▸ {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-neon-cyan font-mono font-bold mb-4">CONNECT</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 rounded-full glass-strong border border-neon-blue/30 hover:border-neon-cyan/50 flex items-center justify-center text-lg transition-colors hover:bg-neon-blue/10"
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-neon-blue/20 pt-8"
        >
          {/* Integrity */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <motion.div
                animate={{ opacity: [0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 bg-neon-green rounded-full"
              />
              <span className="text-neon-green font-mono text-sm">System Integrity</span>
            </div>
            <p className="text-2xl font-bold text-neon-blue">
              {systemStatus.integrity.toFixed(1)}%
            </p>
          </div>

          {/* Threat Detection */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <motion.div
                animate={{ opacity: [0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 bg-neon-cyan rounded-full"
              />
              <span className="text-neon-cyan font-mono text-sm">Threat Detection</span>
            </div>
            <p className="text-2xl font-bold text-neon-blue">
              {systemStatus.threatDetection ? 'ACTIVE' : 'INACTIVE'}
            </p>
          </div>

          {/* Cloud Status */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <motion.div
                animate={{ opacity: [0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 bg-neon-green rounded-full"
              />
              <span className="text-neon-green font-mono text-sm">Cloud Status</span>
            </div>
            <p className="text-2xl font-bold text-neon-blue">
              {systemStatus.cloudStatus}
            </p>
          </div>
        </motion.div>

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center border-t border-neon-blue/20 pt-8"
        >
          <p className="text-sm text-gray-500 font-mono mb-2">
            © 2024 Saurabh Singh. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 font-mono">
            Built with Next.js, Tailwind CSS, Framer Motion, and WebGL.
          </p>
          <p className="text-xs text-neon-cyan/50 font-mono mt-2">
            [SYSTEM_OPERATIONAL] [SECURITY_PROTOCOLS_ACTIVE] [END_TRANSMISSION]
          </p>
        </motion.div>
      </div>

      {/* Animated bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
      />
    </footer>
  );
}
