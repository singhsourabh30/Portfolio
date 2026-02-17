'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeedbackForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback.trim()) {
      setError('Please enter feedback');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, feedback }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to submit feedback');
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setTimeout(() => {
        setRating(0);
        setFeedback('');
        setSubmitted(false);
        setIsOpen(false);
        setError('');
      }, 2000);
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Feedback error:', err);
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 flex items-end justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md glass-strong border border-neon-blue/30 rounded-t-xl p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-neon-cyan">Feedback</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <p className="text-lg text-neon-cyan font-mono">Thank you! 🙏</p>
                  <p className="text-sm text-gray-300 mt-2">Your feedback helps me improve.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-300 block mb-2">Rate your experience</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`text-2xl transition-transform hover:scale-125 ${
                            star <= rating ? 'text-neon-cyan' : 'text-gray-500'
                          }`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 block mb-2">Your feedback</label>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="What can I improve?"
                      rows={4}
                      className="w-full bg-dark-bg/50 border border-neon-blue/20 rounded px-3 py-2 text-gray-100 placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors resize-none text-sm"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/20 border border-red-500 rounded px-3 py-2 text-red-300 text-xs">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!feedback.trim() || loading}
                    className="w-full py-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-bold rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-24 right-8 z-30 px-4 py-2 text-xs bg-neon-blue/20 border border-neon-blue text-neon-cyan rounded-full hover:bg-neon-blue/40 transition-all font-mono"
      >
        💬 Feedback
      </motion.button>
    </>
  );
}
