'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VoiceAssistant() {
  const [isActive, setIsActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const recognitionRef = useRef<any>(null);
  const synth = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    synth.current = window.speechSynthesis;
    
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setTranscript('');
        setIsSpeaking(true);
      };

      recognitionRef.current.onresult = (event: any) => {
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptSegment = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            setTranscript(transcriptSegment);
            handleVoiceRequest(transcriptSegment);
          } else {
            interim += transcriptSegment;
          }
        }
      };

      recognitionRef.current.onerror = () => {
        setIsSpeaking(false);
      };

      recognitionRef.current.onend = () => {
        setIsSpeaking(false);
      };
    }

    return () => {
      if (synth.current && synth.current.speaking) {
        synth.current.cancel();
      }
    };
  }, []);

  const handleVoiceRequest = (text: string) => {
    const lowerText = text.toLowerCase();
    let responseText = '';

    if (lowerText.includes('hello') || lowerText.includes('hi')) {
      responseText = 'Hello! I am Saurabh AI assistant. I am here to help answer questions about his experience and projects.';
    } else if (lowerText.includes('experience') || lowerText.includes('work')) {
      responseText = 'Saurabh is a Cloud Architect and Full-Stack Developer with expertise in Azure, Kubernetes, and AI integration. He has 5+ years of experience.';
    } else if (lowerText.includes('project') || lowerText.includes('portfolio')) {
      responseText = 'You can see Saurabh projects in the portfolio section. He specializes in cloud infrastructure, AI solutions, and full-stack development.';
    } else if (lowerText.includes('contact') || lowerText.includes('email')) {
      responseText = 'You can contact Saurabh via email at saurabhsingh82396@gmail.com or use the contact form on this page.';
    } else if (lowerText.includes('skill')) {
      responseText = 'Saurabh key skills include cloud architecture, Kubernetes, TypeScript, React, Next.js, Python, and AI integration.';
    } else {
      responseText = 'That is an interesting question! I would recommend checking the portfolio or reaching out directly for more details.';
    }

    setResponse(responseText);
    speak(responseText);
  };

  const speak = (text: string) => {
    if (!synth.current) return;

    synth.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    synth.current.speak(utterance);
  };

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-30">
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 w-80 glass-strong border border-neon-blue/30 rounded-lg p-6 mb-4"
          >
            <div className="mb-4">
              <h3 className="text-lg font-bold text-neon-cyan mb-2">AI Voice Assistant</h3>
              <p className="text-xs text-gray-400 mb-4">Click the mic to ask questions</p>

              {transcript && (
                <div className="bg-dark-bg/50 rounded p-3 mb-3 border border-neon-cyan/20">
                  <p className="text-sm text-neon-cyan italic">{transcript}</p>
                </div>
              )}

              {response && (
                <div className="bg-dark-bg/50 rounded p-3 mb-3 border border-neon-blue/20">
                  <p className="text-sm text-gray-200">{response}</p>
                </div>
              )}
            </div>

            <button
              onClick={isSpeaking ? stopListening : startListening}
              className={`w-full py-2 rounded-lg font-mono text-sm transition-all ${
                isSpeaking
                  ? 'bg-red-500/20 border border-red-500 text-red-400'
                  : 'bg-neon-blue/20 border border-neon-blue hover:bg-neon-blue/40 text-neon-cyan'
              }`}
            >
              {isSpeaking ? 'Stop Listening' : 'Start Listening'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsActive(!isActive)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan shadow-lg shadow-neon-blue/50 flex items-center justify-center text-white font-bold text-lg hover:shadow-xl hover:shadow-neon-blue/70 transition-all"
      >
        {isActive ? 'X' : 'V'}
      </motion.button>
    </div>
  );
}
