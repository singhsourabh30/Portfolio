'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DashboardCard {
  title: string;
  value: string;
  description: string;
  icon: string;
  progress?: number;
}

export default function CloudArchitectureDashboard() {
  const [cards, setCards] = useState<DashboardCard[]>([]);

  const dashboardCards: DashboardCard[] = [
    {
      title: 'Azure AD Tenant',
      value: '10,000+',
      description: 'Users Managed',
      icon: '👥',
      progress: 94,
    },
    {
      title: 'Conditional Access',
      value: '47',
      description: 'Active Policies',
      icon: '🔐',
      progress: 100,
    },
    {
      title: 'MFA Enforcement',
      value: '98%',
      description: 'Compliance Rate',
      icon: '🔑',
      progress: 98,
    },
    {
      title: 'Intune Devices',
      value: '2,341',
      description: 'Enrolled Devices',
      icon: '📱',
      progress: 93,
    },
    {
      title: 'Azure Monitor',
      value: '24/7',
      description: 'Active Monitoring',
      icon: '📊',
      progress: 100,
    },
    {
      title: 'Teams & Exchange',
      value: '15K+',
      description: 'Users Connected',
      icon: '💼',
      progress: 99,
    },
  ];

  useEffect(() => {
    // Stagger card animations
    dashboardCards.forEach((card, index) => {
      setTimeout(() => {
        setCards((prev) => [...prev, card]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
        >
          CLOUD ARCHITECTURE DASHBOARD
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 mb-16 text-lg"
        >
          Real-time System Monitoring & Infrastructure Status
        </motion.p>

        {/* Dashboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 217, 255, 0.4)' }}
              className="glass-strong rounded-lg p-6 border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-neon-blue font-mono font-bold mb-2">{card.title}</h3>

              {/* Value */}
              <p className="text-2xl md:text-3xl font-bold text-neon-cyan mb-2">{card.value}</p>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">{card.description}</p>

              {/* Progress bar */}
              {card.progress && (
                <div className="w-full bg-dark-secondary rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${card.progress}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full"
                    style={{
                      boxShadow: '0 0 10px rgba(0, 217, 255, 0.6)',
                    }}
                  />
                </div>
              )}

              {/* Status */}
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-xs text-neon-green font-mono">OPERATIONAL</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytics section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Identity Risk Score */}
          <div className="glass-strong rounded-lg p-8 border border-neon-blue/20">
            <h3 className="text-neon-blue font-mono font-bold mb-6">Identity Risk Score</h3>
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="#1a1f3a"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeDasharray="351.86"
                  initial={{ strokeDashoffset: 351.86 }}
                  animate={{ strokeDashoffset: 351.86 * 0.15 }}
                  transition={{ duration: 1.5 }}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
                    <stop offset="0%" stopColor="#39FF14" />
                    <stop offset="100%" stopColor="#00D9FF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-neon-green">15%</p>
                  <p className="text-xs text-gray-400">LOW RISK</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm">
              Zero-Trust policies actively protecting infrastructure
            </p>
          </div>

          {/* Endpoint Compliance */}
          <div className="glass-strong rounded-lg p-8 border border-neon-blue/20">
            <h3 className="text-neon-blue font-mono font-bold mb-6">Endpoint Compliance</h3>
            <div className="space-y-4">
              {[
                { label: 'Malware Protected', value: 100 },
                { label: 'Windows Updates', value: 97 },
                { label: 'Firewall Enabled', value: 99 },
                { label: 'BitLocker Encryption', value: 94 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">{item.label}</span>
                    <span className="text-sm font-mono text-neon-cyan">{item.value}%</span>
                  </div>
                  <div className="w-full bg-dark-secondary rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
