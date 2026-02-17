    'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'jarvis';
  timestamp: Date;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Good Day. I am JARVIS - your Cloud Environment AI Assistant. How may I assist you?',
      sender: 'jarvis',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const quickQuestions = [
    'Tell me about your expertise',
    'What is Zero-Trust Architecture?',
    'Show me your recent projects',
    'How can I contact you?',
  ];

  const responses: { [key: string]: string } = {
    'tell me about your expertise':
      'I specialize in Azure AD administration, Microsoft 365 security, Intune device management, and Zero-Trust Architecture implementation. With expertise in PowerShell automation and cloud-first infrastructure design, I help organizations build secure, scalable cloud environments.',
    'what is zero-trust architecture?':
      'Zero-Trust is a security model that assumes no user or device is trusted by default. It requires verification for every access request, implements least-privilege access, and continuously monitors for threats. This approach significantly reduces security risks in modern cloud environments.',
    'show me your recent projects':
      'My recent work includes Azure AD automation frameworks, Intune compliance deployments achieving 99% device compliance, and Microsoft 365 security optimization. These projects have improved security posture and operational efficiency for enterprise clients.',
    'how can i contact you?':
      'You can reach me through professional networking platforms, email, or LinkedIn. I am open to discussing cloud security, identity management, and collaboration opportunities.',
    default:
      'That is an interesting question. While I am still learning, my primary expertise lies in cloud security and identity management. How else may I assist you?',
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsThinking(true);

    // Simulate thinking time
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response =
        Object.keys(responses).find((key) => lowerText.includes(key)) ||
        'default';

      const jarvisMessage: Message = {
        id: messages.length + 2,
        text: responses[response],
        sender: 'jarvis',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, jarvisMessage]);
      setIsThinking(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full glass-strong border-2 border-neon-blue/50 flex items-center justify-center text-2xl hover:border-neon-cyan/70 transition-colors shadow-2xl glow-neon-blue cursor-pointer"
        >
          {isOpen ? '✕' : '🤖'}
        </motion.button>

        {/* Pulse animation when new messages */}
        {messages.length > 1 && !isOpen && (
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-neon-cyan/30"
          />
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-28 right-8 w-96 h-[600px] rounded-lg glass-strong border border-neon-blue/30 shadow-2xl flex flex-col z-50"
          >
            {/* Header */}
            <div className="bg-dark-secondary border-b border-neon-blue/20 px-6 py-4">
              <h3 className="text-neon-blue font-mono font-bold">
                JARVIS AI ASSISTANT
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                Cloud Environment Intelligence Module
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs rounded-lg p-4 ${
                      msg.sender === 'user'
                        ? 'bg-neon-blue/20 border border-neon-blue/50 text-gray-100'
                        : 'glass border border-neon-cyan/50 text-gray-100'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p
                      className={`text-xs mt-2 ${
                        msg.sender === 'user'
                          ? 'text-neon-blue/70'
                          : 'text-neon-cyan/70'
                      } font-mono`}
                    >
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isThinking && (
                <motion.div className="flex justify-start">
                  <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4">
                    <motion.div
                      animate={{ opacity: [0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-neon-cyan font-mono text-sm"
                    >
                      Processing...
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick questions (only show on first message) */}
            {messages.length === 1 && (
              <div className="px-6 py-4 border-t border-neon-blue/20">
                <p className="text-xs text-gray-400 font-mono mb-3">
                  Quick Questions:
                </p>
                <div className="space-y-2">
                  {quickQuestions.map((q, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleSendMessage(q)}
                      className="w-full text-left px-3 py-2 text-xs bg-neon-blue/10 border border-neon-blue/30 text-neon-blue rounded hover:bg-neon-blue/20 transition-colors font-mono"
                    >
                      {q}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-neon-blue/20 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !isThinking) {
                      handleSendMessage(inputValue);
                    }
                  }}
                  placeholder="Ask JARVIS..."
                  className="flex-1 bg-dark-secondary border border-neon-blue/30 text-gray-100 px-4 py-2 rounded text-sm focus:outline-none focus:border-neon-blue/70 transition-colors font-mono"
                  disabled={isThinking}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={isThinking || !inputValue.trim()}
                  className="px-4 py-2 bg-neon-blue/20 border border-neon-blue/50 text-neon-blue rounded font-mono text-sm hover:bg-neon-blue/40 disabled:opacity-50 transition-colors"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
