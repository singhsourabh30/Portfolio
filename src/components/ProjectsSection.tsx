'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string;
  technologies: string[];
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Azure AD Automation',
      description: 'Automated user provisioning and identity governance',
      icon: '🤖',
      details:
        'Built comprehensive PowerShell and Python automation scripts for bulk Azure AD operations, conditional access policy deployment, and real-time synchronization with HR systems. Reduced manual workload by 80% and improved security posture.',
      technologies: ['PowerShell', 'Python', 'Azure AD', 'REST APIs'],
    },
    {
      id: 2,
      title: 'Intune Compliance Lab',
      description: 'Device management and compliance monitoring framework',
      icon: '📱',
      details:
        'Designed and deployed Intune device compliance policies, conditional launch rules, and app protection policies. Achieved 99% endpoint compliance across 2,000+ devices with automated remediation workflows.',
      technologies: ['Intune', 'Mobile Security', 'Compliance', 'MDM'],
    },
    {
      id: 3,
      title: 'Microsoft 365 Optimization',
      description: 'Enterprise collaboration platform security hardening',
      icon: '💼',
      details:
        'Implemented advanced threat protection, data loss prevention, and information barriers in Teams, SharePoint, and Exchange. Optimized governance policies and achieved compliance with industry standards.',
      technologies: ['Teams', 'SharePoint', 'Exchange', 'DLP', 'Security'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
        >
          PROJECT SIMULATION ZONE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 mb-16 text-lg"
        >
          Click on a project to access system diagnostics
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project.id)}
              className="glass-strong rounded-lg p-6 border border-neon-blue/20 hover:border-neon-cyan/50 cursor-pointer transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neon-blue font-mono mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 2).map((tech, idx) => (
                  <span key={idx} className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded font-mono">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 2 && (
                  <span className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded font-mono">
                    +{project.technologies.length - 2}
                  </span>
                )}
              </div>

              {/* Access button */}
              <motion.button
                whileHover={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)' }}
                className="w-full py-2 border border-neon-blue/50 text-neon-blue rounded font-mono text-sm hover:bg-neon-blue/10 transition-colors"
              >
                [OPEN DIAGNOSTIC]
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Expanded Project Detail */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 40 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-strong rounded-lg p-8 max-w-2xl w-full border border-neon-blue/30 shadow-2xl"
              >
                {/* Close button */}
                <motion.button
                  whileHover={{ rotate: 90 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-neon-blue hover:text-neon-cyan transition-colors"
                >
                  ✕
                </motion.button>

                {/* Content */}
                {projects.map((project) => {
                  if (project.id === selectedProject) {
                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {/* Icon and Title */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="text-6xl">{project.icon}</div>
                          <div>
                            <h3 className="text-3xl font-bold text-neon-blue font-mono">
                              {project.title}
                            </h3>
                            <p className="text-neon-cyan text-sm font-mono mt-2">
                              [SYSTEM DIAGNOSTIC MODE]
                            </p>
                          </div>
                        </div>

                        {/* Details */}
                        <p className="text-gray-300 mb-6 leading-relaxed">{project.details}</p>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-neon-cyan font-mono font-bold mb-3">
                            Stack Configuration:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue rounded-full text-sm font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-4">
                          <motion.button
                            whileHover={{
                              scale: 1.05,
                              boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)',
                            }}
                            className="flex-1 py-3 bg-neon-blue/20 border border-neon-blue text-neon-blue rounded font-mono font-bold hover:bg-neon-blue/30 transition-colors"
                          >
                            [VIEW CODE]
                          </motion.button>
                          <motion.button
                            whileHover={{
                              scale: 1.05,
                              boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)',
                            }}
                            className="flex-1 py-3 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan rounded font-mono font-bold hover:bg-neon-cyan/30 transition-colors"
                          >
                            [RUN SIMULATION]
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  }
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
