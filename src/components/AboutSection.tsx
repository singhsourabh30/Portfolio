'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const skills = [
    { category: 'Cloud Platforms', items: ['Microsoft Azure', 'Azure AD', 'AWS'] },
    { category: 'Identity & Security', items: ['Zero-Trust Architecture', 'Conditional Access', 'MFA', 'IAM'] },
    { category: 'Microsoft 365', items: ['Teams', 'SharePoint', 'Exchange', 'Intune'] },
    { category: 'Automation', items: ['PowerShell', 'Python', 'REST APIs', 'Azure Automation'] },
    { category: 'Security Tools', items: ['Defender', 'DLP', 'Azure Monitor', 'Sentinel'] },
    { category: 'Infrastructure', items: ['VPN', 'LAN/WAN', 'Wi-Fi', 'Network Security'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
          className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
        >
          CYBER INTELLIGENCE PROFILE
        </motion.h2>

        {/* Main description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong rounded-lg p-8 border border-neon-blue/20 mb-16"
        >
          <div className="text-center mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Cloud Engineer specializing in <span className="text-neon-cyan">Identity & Access Management</span>, <span className="text-neon-blue">Zero-Trust Security</span>, and 
              <span className="text-neon-cyan"> Enterprise Endpoint Governance</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Focused on <span className="text-neon-green">secure cloud-first transformation</span> and <span className="text-neon-blue">infrastructure resilience</span>.
            </p>
          </div>

          {/* Core competencies */}
          <div className="border-t border-neon-blue/20 pt-8">
            <h3 className="text-neon-cyan font-mono font-bold mb-6 text-center">
              CORE COMPETENCIES
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: '🏗️',
                  title: 'Architecture',
                  desc: 'Designing secure, scalable cloud infrastructure',
                },
                {
                  icon: '🔐',
                  title: 'Security',
                  desc: 'Implementing Zero-Trust and compliance frameworks',
                },
                {
                  icon: '⚙️',
                  title: 'Automation',
                  desc: 'Building intelligent automation workflows',
                },
              ].map((comp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{comp.icon}</div>
                  <h4 className="text-neon-blue font-mono font-bold mb-2">
                    {comp.title}
                  </h4>
                  <p className="text-sm text-gray-400">{comp.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-neon-cyan font-mono mb-8">
            TECHNICAL ARSENAL
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass rounded-lg p-6 border border-neon-blue/20 hover:border-neon-cyan/50 transition-colors"
              >
                <h4 className="text-neon-blue font-mono font-bold mb-4">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-neon-green">▸</span>
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 glass-strong rounded-lg p-8 border border-neon-blue/20"
        >
          <h3 className="text-neon-cyan font-mono font-bold mb-6 text-center text-lg">
            GUIDING PRINCIPLES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Security First',
                desc: 'Every decision is evaluated through a security lens',
              },
              {
                title: 'Automation Always',
                desc: 'Repetitive tasks are automated for efficiency',
              },
              {
                title: 'Continuous Learning',
                desc: 'Staying updated with the latest cloud technologies',
              },
            ].map((principle, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <h4 className="text-neon-blue font-mono font-bold mb-2">
                  {principle.title}
                </h4>
                <p className="text-sm text-gray-400">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
