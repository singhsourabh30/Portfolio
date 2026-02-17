'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export default function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      company: 'Tata Consultancy Services (TCS)',
      title: 'System Engineer - Cloud & Cybersecurity',
      period: '2022 - Present',
      responsibilities: [
        'L1/L2 Enterprise Support for Fortune 500 clients',
        'Azure AD RBAC Management and Identity Governance',
        'Microsoft 365 Administration & Security Configuration',
        'ITIL Incident Lifecycle Management',
        'Root Cause Analysis and Resolution',
        'PowerShell Automation for user onboarding',
        'VPN / LAN / Wi-Fi Troubleshooting & Optimization',
      ],
      technologies: [
        'Azure AD',
        'Microsoft 365',
        'Intune',
        'PowerShell',
        'ITIL',
        'Incident Management',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text"
        >
          PROFESSIONAL EXPERIENCE
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-strong rounded-lg p-8 border-l-4 border-neon-blue hover:border-neon-cyan transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-neon-blue font-mono mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-neon-cyan text-lg font-mono">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-neon-green font-mono text-sm bg-dark-secondary px-4 py-2 rounded">
                    {exp.period}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-neon-cyan font-mono font-bold mb-4">Key Responsibilities:</h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-neon-green mt-1 flex-shrink-0">▸</span>
                      <span className="text-gray-300">{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-neon-cyan font-mono font-bold mb-4">Technologies & Tools:</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue rounded-full text-sm font-mono hover:bg-neon-blue/20 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <div className="text-neon-cyan font-mono text-sm">
              <span className="animate-pulse">●</span> Currently Working
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
