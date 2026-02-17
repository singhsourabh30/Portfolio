'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  icon: string;
  color: string;
  glowColor: string;
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      id: 1,
      name: 'AZ-900',
      issuer: 'Microsoft Azure Fundamentals',
      icon: '☁️',
      color: 'text-blue-400',
      glowColor: 'glow-neon-blue',
    },
    {
      id: 2,
      name: 'AZ-140',
      issuer: 'Azure Virtual Desktop Specialty',
      icon: '🖥️',
      color: 'text-cyan-400',
      glowColor: 'glow-neon-cyan',
    },
    {
      id: 3,
      name: 'AWS Practitioner',
      issuer: 'AWS Certified Cloud Practitioner',
      icon: '🟠',
      color: 'text-orange-400',
      glowColor: 'glow-neon-blue',
    },
    {
      id: 4,
      name: 'GitHub Foundations',
      issuer: 'GitHub Certification',
      icon: '🐙',
      color: 'text-gray-300',
      glowColor: 'glow-neon-cyan',
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
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
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
          CERTIFICATION GRID
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 mb-16 text-lg"
        >
          Professional Credentials & Industry Certifications
        </motion.p>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateZ: 5,
              }}
              className="group perspective"
            >
              <div className={`glass-strong rounded-lg p-8 border border-neon-blue/20 hover:border-neon-cyan/50 transition-all duration-300 text-center h-full flex flex-col items-center justify-center cursor-pointer ${cert.glowColor}`}>
                {/* Holographic effect background */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <motion.div
                  animate={{ rotateZ: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-5xl mb-4 relative z-10"
                >
                  {cert.icon}
                </motion.div>

                {/* Certification Name */}
                <h3 className="text-xl font-bold text-neon-blue font-mono mb-2 relative z-10">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-gray-300 mb-4 relative z-10">{cert.issuer}</p>

                {/* Status indicator */}
                <motion.div
                  animate={{ opacity: [0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2 text-neon-green font-mono text-xs relative z-10"
                >
                  <span className="w-2 h-2 bg-neon-green rounded-full" />
                  VERIFIED
                </motion.div>

                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block glass-strong rounded-lg p-6 border border-neon-blue/20">
            <p className="text-neon-cyan font-mono text-sm mb-2">
              Currently Pursuing:
            </p>
            <p className="text-neon-blue font-bold">
              AZ-305 (Azure Solutions Architect) | SC-100 (Cybersecurity Architect)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
