import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "immersive web experiences",
    "interactive 3D experiences",
    "high performance web apps",
    "AI powered solutions apps"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const longestRole = roles.reduce((a, b) => a.length > b.length ? a : b);

  // Smooth slow 3D flip animation
  const flipVariants = {
    initial: { 
      opacity: 0,
      y: 25,
      rotateX: 90,
      scale: 0.96
    },
    animate: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: -25,
      rotateX: -90,
      scale: 0.96,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-0 pb-14 md:pb-0"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* AVAILABLE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3 sm:py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5 sm:mb-6 mt-0 sm:mt-0"
          >
            <span className="w-2 h-2 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[12px] sm:text-xs text-gray-300 whitespace-nowrap font-medium">
              Available for freelance projects
            </span>
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 180 }}
            className="text-[2.8rem] sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-5 tracking-tight"
          >
            M. ASAD KHAN
          </motion.h1>

          {/* I BUILD - FIXED POSITION WITH SLOW 3D FLIP */}
          <div className="flex justify-center items-center mb-5 sm:mb-6 px-2">
            <div className="flex justify-center items-center flex-wrap sm:flex-nowrap gap-2">
              {/* Fixed "I build" text - never changes position */}
              <span className="whitespace-nowrap text-xl sm:text-xl md:text-3xl font-semibold text-gray-300">
                I build
              </span>

              {/* Animated text container with slow 3D flip */}
              <div
                className="relative inline-block"
                style={{ 
                  minWidth: '320px',
                  width: 'auto'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    variants={flipVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute left-0 font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl sm:text-xl md:text-3xl whitespace-nowrap"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>

                {/* Invisible placeholder to maintain width */}
                <span className="invisible font-extrabold whitespace-nowrap text-xl sm:text-xl md:text-3xl">
                  {longestRole}
                </span>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 text-[15px] sm:text-base md:text-lg max-w-sm sm:max-w-2xl mx-auto mb-7 sm:mb-8 leading-relaxed px-4"
          >
            Software engineer & creative developer passionate about pushing
            the boundaries of what's possible in the browser — from
            WebGL and shaders to micro-animations and interactive storytelling.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center gap-4 sm:gap-4 mb-7 sm:mb-10 flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[15px] sm:text-base font-semibold shadow-lg shadow-blue-500/20"
            >
              Get In Touch
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-2.5 rounded-full border-2 border-blue-500 text-white text-[15px] sm:text-base font-semibold hover:bg-blue-500/10 transition-all"
            >
              View Work
            </motion.a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center items-start gap-12 sm:gap-12 md:gap-16 mb-0 sm:mb-0"
          >
            {[
              { value: "10+", label: "PROJECTS" },
              { value: "2+", label: "YEARS" },
              { value: "100%", label: "SATISFACTION" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 tracking-wide whitespace-nowrap font-semibold mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* LEFT SIDE */}
      <motion.div className="absolute bottom-32 left-10 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white/70 text-[8px] writing-mode-vertical">
          CREATIVE DEVELOPER
        </span>
        <div className="w-px h-6 bg-white/30" />
        <span className="text-white/70 text-[8px] writing-mode-vertical">
          FAISALABAD, PK
        </span>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5
        }}
        className="absolute bottom-32 right-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/70 text-[8px] writing-mode-vertical">
          SCROLL TO EXPLORE
        </span>
        <div className="w-px h-6 bg-white/30" />
        <FiArrowDown className="w-3 h-3 text-white/70" />
      </motion.div>

      {/* DESKTOP MARQUEE */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-gray-800 py-3 bg-black/60 backdrop-blur-sm hidden md:block">
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "WEBGL", "◆", "THREE.JS", "◆", "GSAP", "◆",
            "CREATIVE CODE", "◆", "MOTION DESIGN", "◆",
            "REACT", "◆", "NEXT.JS", "◆", "TAILWIND CSS", "◆",
            "INTERACTIVE XP", "◆", "SHADER ART", "◆"
          ].map((tech, i) => (
            <span key={i} className="mx-5 text-sm text-white font-medium tracking-wide">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* MOBILE MARQUEE */}
      <div className="absolute -bottom-2 left-0 right-0 md:hidden">
        <div className="h-4 bg-transparent"></div>
        
        <div className="marquee-container overflow-hidden border-t border-gray-800 bg-black/60 backdrop-blur-sm py-4">
          <div className="marquee-track inline-flex whitespace-nowrap">
            {[
              "WEBGL", "◆", "REACT", "◆", "NEXT.JS", "◆",
              "TAILWIND", "◆", "THREE.JS", "◆", "GSAP", "◆",
              "TYPESCRIPT", "◆", "WEBFLOW", "◆", "NODE.JS", "◆",
              "EXPRESS", "◆", "MONGODB", "◆"
            ].map((tech, i) => (
              <span key={i} className="mx-3 text-[14px] text-white font-bold tracking-wide">
                {tech}
              </span>
            ))}
            {[
              "WEBGL", "◆", "REACT", "◆", "NEXT.JS", "◆",
              "TAILWIND", "◆", "THREE.JS", "◆", "GSAP", "◆",
              "TYPESCRIPT", "◆", "WEBFLOW", "◆", "NODE.JS", "◆",
              "EXPRESS", "◆", "MONGODB", "◆"
            ].map((tech, i) => (
              <span key={`dup-${i}`} className="mx-3 text-[14px] text-white font-bold tracking-wide">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="flex flex-col items-center justify-center py-2.5 bg-black/40 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-6 h-9 rounded-full border-2 border-white/30 flex justify-center items-start pt-1.5">
              <FiArrowDown className="w-2.5 h-2.5 text-white/60 font-bold" />
            </div>
            <span className="text-white/50 text-[9px] tracking-wider font-semibold mt-1">SCROLL</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;