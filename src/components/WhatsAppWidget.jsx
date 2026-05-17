import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX, FiSend } from 'react-icons/fi';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const phoneNumber = "923419443586";

  const predefinedMessages = [
    "Hi, I'm interested in discussing a project with you.",
    "I'd like to get a quote for my website.",
    "Can you help me with my portfolio?",
    "I have a great project idea to discuss!",
    "What's your availability for a new project?"
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
      setIsOpen(false);
      setMessage('');
    }
  };

  const handlePredefinedMessage = (msg) => {
    const encodedMessage = encodeURIComponent(msg);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="whatsapp-widget-container fixed z-50"
        style={{ bottom: '1rem', right: '1rem' }}
      >
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-green-500/30"
          style={{ width: '100%', height: '100%' }}
        />
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ 
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
            scale: { duration: 0.2 }
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="whatsapp-button relative rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
          style={{ width: '3rem', height: '3rem' }}
        >
          {isOpen ? (
            <FiX className="text-white" style={{ width: '1.25rem', height: '1.25rem' }} />
          ) : (
            <FaWhatsapp className="text-white" style={{ width: '1.5rem', height: '1.5rem' }} />
          )}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="whatsapp-chat-modal fixed bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 z-50 overflow-hidden"
            style={{ 
              bottom: '5rem', 
              right: '1rem', 
              width: 'calc(100vw - 2rem)', 
              maxWidth: '22rem' 
            }}
          >
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-3 flex items-center gap-3">
              <div className="rounded-full bg-white/20 flex items-center justify-center" style={{ width: '2rem', height: '2rem' }}>
                <FaWhatsapp className="text-white" style={{ width: '1rem', height: '1rem' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold" style={{ fontSize: '0.875rem' }}>WhatsApp Chat</h3>
                <p className="text-green-200" style={{ fontSize: '0.7rem' }}>Typically replies within an hour</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <FiX className="w-4 h-4" />
              </button>
            </div>

            <div className="px-4 py-3 border-b border-gray-800">
              <p className="text-gray-400 mb-2" style={{ fontSize: '0.7rem' }}>Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {predefinedMessages.slice(0, 3).map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => handlePredefinedMessage(msg)}
                    className="bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full transition-colors"
                    style={{ padding: '0.25rem 0.75rem', fontSize: '0.7rem' }}
                  >
                    {msg.length > 25 ? msg.substring(0, 22) + '...' : msg}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4">
              <p className="text-gray-400 mb-2" style={{ fontSize: '0.7rem' }}>Or write your own message:</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi! I'm interested in working with you..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 resize-none"
                style={{ fontSize: '0.75rem', padding: '0.5rem 0.75rem' }}
                rows="3"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="w-full mt-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
              >
                <FiSend style={{ width: '0.875rem', height: '0.875rem' }} />
                Send Message
              </button>
            </div>

            <div className="px-4 pb-3 text-center">
              <p className="text-gray-500" style={{ fontSize: '0.65rem' }}>
                You'll be redirected to WhatsApp to continue
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;