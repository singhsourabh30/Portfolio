'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  const animationLines = useMemo(() => [
    '> Initializing JARVIS Protocol v2.0...',
    '> Loading Neural Networks...',
    '> Synchronizing with Cloud Infrastructure...',
    '> Portfolio Systems: ONLINE',
  ], []);

  const fullText = 'WELCOME TO MY DIGITAL DOMAIN';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Animated grid background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-transparent opacity-30" />
        </div>

        {/* Terminal-style introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block glass-medium border border-neon-blue/30 rounded-lg p-6 mb-8">
            {animationLines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="font-mono text-sm text-neon-cyan mb-2 text-left"
              >
                <span className="text-neon-blue">{line}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main heading with typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
            <span className="gradient-text">{displayedText}</span>
            <span
              className={`inline-block w-1 h-12 md:h-20 ml-2 ${
                cursorVisible ? 'bg-neon-cyan' : 'bg-transparent'
              }`}
            />
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 font-light"
        >
          Cloud Architect | AI Integration Specialist | Full-Stack Developer
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-neon-blue/20 border border-neon-blue hover:bg-neon-blue/40 rounded-lg font-mono text-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/50"
          >
            {'> VIEW_PROJECTS'}
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="px-8 py-4 bg-neon-cyan/10 border border-neon-cyan hover:bg-neon-cyan/20 rounded-lg font-mono text-neon-blue transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/50"
          >
            {'> EXPERIENCE'}
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-neon-cyan text-sm font-mono mb-2">SCROLL</span>
            <svg
              className="w-6 h-6 text-neon-cyan"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
