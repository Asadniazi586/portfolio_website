import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX, FiSend } from 'react-icons/fi';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const phoneNumber = "923419443586"; // Replace with your number

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
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50"
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
          className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        >
          {isOpen ? (
            <FiX className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          ) : (
            <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
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
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-[85vw] max-w-[350px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-xs sm:text-sm">WhatsApp Chat</h3>
                <p className="text-green-200 text-[10px] sm:text-xs">Typically replies within an hour</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <FiX className="w-4 h-4" />
              </button>
            </div>

            <div className="px-4 py-3 border-b border-gray-800">
              <p className="text-gray-400 text-[10px] sm:text-xs mb-2">Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {predefinedMessages.slice(0, 3).map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => handlePredefinedMessage(msg)}
                    className="text-[10px] sm:text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full transition-colors"
                  >
                    {msg.length > 25 ? msg.substring(0, 22) + '...' : msg}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4">
              <p className="text-gray-400 text-[10px] sm:text-xs mb-2">Or write your own message:</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi! I'm interested in working with you..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-green-500 resize-none"
                rows="3"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="w-full mt-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
              >
                <FiSend className="w-3 h-3 sm:w-4 sm:h-4" />
                Send Message
              </button>
            </div>

            <div className="px-4 pb-3 text-center">
              <p className="text-gray-500 text-[8px] sm:text-[10px]">
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