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

  // Find the longest text to set proper width
  const longestRole = roles.reduce((a, b) => a.length > b.length ? a : b);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-0 pb-14 md:pb-0"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          {/* AVAILABLE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3 sm:py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[11px] sm:text-xs text-gray-300 whitespace-nowrap mobile:text-xs mobile:font-medium">
              Available for freelance projects
            </span>
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 180
            }}
            className="text-[2.2rem] sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-5 tracking-tight mobile:text-3xl mobile:mb-4"
          >
            M. ASAD KHAN
          </motion.h1>

          {/* I BUILD */}
          <div className="text-base sm:text-xl md:text-3xl text-gray-300 mb-4 sm:mb-6 px-2 mobile:text-lg mobile:mb-5">
            <div className="flex justify-center items-center text-center flex-wrap sm:flex-nowrap gap-1">
              <span className="whitespace-nowrap text-base sm:text-xl md:text-3xl mobile:text-lg">
                I build
              </span>

              <div
                className="relative inline-block"
                style={{ 
                  minWidth: '250px',
                  width: 'auto'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.5
                    }}
                    className="absolute left-0 font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-base sm:text-xl md:text-3xl whitespace-nowrap mobile:text-lg mobile:font-bold"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>

                {/* Invisible placeholder */}
                <span className="invisible font-semibold whitespace-nowrap text-base sm:text-xl md:text-3xl mobile:text-lg mobile:font-bold">
                  {longestRole}
                </span>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8
            }}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 mobile:text-gray-300 mobile:text-base mobile:mb-7 mobile:max-w-sm"
          >
            Software engineer & creative developer passionate about pushing
            the boundaries of what's possible in the browser — from
            WebGL and shaders to micro-animations and interactive storytelling.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8
            }}
            className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-10 flex-wrap mobile:gap-4 mobile:mb-7"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm sm:text-base font-medium shadow-lg shadow-blue-500/20 mobile:px-6 mobile:py-2.5 mobile:text-base mobile:font-semibold"
            >
              Get In Touch
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-5 py-2 rounded-full border border-blue-500 text-white text-sm sm:text-base font-medium hover:bg-blue-500/10 transition-all mobile:px-6 mobile:py-2.5 mobile:text-base mobile:font-semibold mobile:border-2"
            >
              View Work
            </motion.a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8
            }}
            className="flex justify-center items-start gap-8 sm:gap-12 md:gap-16 mobile:gap-10"
          >
            {[
              { value: "10+", label: "PROJECTS" },
              { value: "2+", label: "YEARS" },
              { value: "100%", label: "SATISFACTION" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-xl sm:text-3xl md:text-4xl font-bold text-white mobile:text-2xl">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 tracking-wide whitespace-nowrap mobile:text-xs mobile:font-medium mobile:mt-1">
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

      {/* MOBILE MARQUEE - Fixed: Taller height and moving properly */}
      <div className="absolute bottom-0 left-0 right-0 md:hidden">
        {/* Taller Marquee */}
        <div className="overflow-hidden border-t border-gray-800 bg-black/60 backdrop-blur-sm py-4">
          <div className="flex animate-marquee whitespace-nowrap" style={{ animation: 'marquee 15s linear infinite' }}>
            {[
              "WEBGL", "◆", "REACT", "◆", "NEXT.JS", "◆",
              "TAILWIND", "◆", "THREE.JS", "◆",
              "GSAP", "◆", "TYPESCRIPT", "◆", "WEBFLOW", "◆",
              "NODE.JS", "◆", "EXPRESS", "◆", "MONGODB", "◆"
            ].map((tech, i) => (
              <span key={i} className="mx-4 text-base text-white font-semibold tracking-wide">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="flex flex-col items-center justify-center py-2 bg-black/40 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-6 h-9 rounded-full border border-white/30 flex justify-center items-start pt-1.5">
              <FiArrowDown className="w-2.5 h-2.5 text-white/50" />
            </div>
            <span className="text-white/40 text-[8px] tracking-wider font-medium">SCROLL</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;