'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const lines = useMemo(() => [
    'Deploying Secure Cloud Infrastructure…',
    'Zero-Trust Architecture Enabled…',
    'Cloud Security Protocols Active…',
    'Ready for Operations.',
  ], []);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      return;
    }

    const currentLine = lines[currentLineIndex];
    let currentCharIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentCharIndex < currentLine.length) {
        setDisplayedText((prev) => prev + currentLine[currentCharIndex]);
        currentCharIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setDisplayedText((prev) => prev + '\n');
        }, 800);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentLineIndex, lines]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Terminal-style typing section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-lg p-6 mb-12 max-w-2xl mx-auto border border-neon-blue/30"
        >
          <div className="terminal-text text-sm leading-8 text-left font-mono">
            <span className="text-neon-green">›</span> Initializing Portfolio…
            <br />
            <pre className="whitespace-pre-wrap break-words text-neon-cyan">
              {displayedText}
              <span className="animate-pulse">▌</span>
            </pre>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Saurabh Singh</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-neon-blue mb-4 font-mono tracking-wide"
        >
          Cloud • Cybersecurity • Identity Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building Secure, Scalable, Zero-Trust Cloud Architectures
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neon-blue/20 border-2 border-neon-blue text-neon-blue font-bold rounded-lg hover:bg-neon-blue/40 transition-all duration-300 font-mono text-sm md:text-base"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neon-cyan/20 border-2 border-neon-cyan text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/40 transition-all duration-300 font-mono text-sm md:text-base"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            About Me
          </motion.button>
        </motion.div>

        {/* Status indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex justify-center gap-8 text-sm font-mono flex-wrap"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            <span className="text-neon-green">Systems Online</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
            <span className="text-neon-blue">Protocols Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
            <span className="text-neon-cyan">Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
