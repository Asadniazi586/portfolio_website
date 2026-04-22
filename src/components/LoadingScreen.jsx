import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        if (onLoadingComplete) onLoadingComplete();
      }, 500);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                                linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }} />
          </div>

          <div className="relative z-10 text-center">
            {/* Morphing cube */}
            <motion.div
              animate={{
                rotateX: [0, 360, 720],
                rotateY: [0, 360, 720],
                scale: [1, 1.2, 1],
                borderRadius: [
                  '0% 0% 0% 0%',
                  '50% 50% 50% 50%',
                  '0% 0% 0% 0%'
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              style={{
                boxShadow: '0 0 50px rgba(59,130,246,0.5)'
              }}
            />

            {/* Name with glow */}
            <motion.div
              animate={{
                textShadow: [
                  '0 0 20px rgba(59,130,246,0.5)',
                  '0 0 40px rgba(139,92,246,0.8)',
                  '0 0 20px rgba(59,130,246,0.5)'
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
            >
              M.A.K
            </motion.div>

            {/* Loading dots */}
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-blue-500 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;