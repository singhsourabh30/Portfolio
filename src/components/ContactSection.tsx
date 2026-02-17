'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'saurabhsingh82396@gmail.com', href: 'mailto:saurabhsingh82396@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91-XXXXXXXXXX', href: 'tel:+91' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/saurabh30', href: 'https://linkedin.com/in/saurabh30' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/singhsourabh30', href: 'https://github.com/singhsourabh30' }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 to-transparent opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 font-mono">GET IN TOUCH</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about tech, I would love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-medium border border-neon-blue/20 rounded-lg p-6 hover:border-neon-cyan/40 transition-all hover:shadow-lg hover:shadow-neon-blue/20 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{info.icon}</div>
              <h3 className="text-lg font-bold text-neon-cyan mb-2">{info.label}</h3>
              <p className="text-sm text-gray-300 break-all hover:text-neon-blue transition-colors">{info.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-medium border border-neon-blue/20 rounded-lg p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-neon-cyan mb-6">Send a Message</h3>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <p className="text-lg text-neon-cyan font-mono mb-2">Message received!</p>
              <p className="text-gray-300">Thank you for reaching out. I will get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-dark-bg/50 border border-neon-blue/20 rounded px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-dark-bg/50 border border-neon-blue/20 rounded px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-dark-bg/50 border border-neon-blue/20 rounded px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-dark-bg/50 border border-neon-blue/20 rounded px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-dark-bg/50 border border-neon-blue/20 rounded px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full bg-dark-bg/50 border border-neon-blue/20 rounded px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
