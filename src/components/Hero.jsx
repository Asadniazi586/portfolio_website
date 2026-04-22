import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "immersive web experiences",
    "interactive 3D worlds",
    "high-performance UIs",
    "AI Assisted Websites"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between relative overflow-hidden"
    >
      {/* Main Content - Pushed up */}
      <div className="flex-1 flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Available */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 mt-8"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-400">
                Available for freelance projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
              className="text-5xl md:text-7xl font-bold mb-6 font-['Inter', system-ui] tracking-tight"
            >
              M. ASAD KHAN
            </motion.h1>

            {/* I BUILD LINE */}
            <div className="text-xl md:text-3xl text-gray-300 mb-4">
              <div className="flex justify-center items-center text-center">
                <span className="mr-2">I build</span>
                <div className="relative inline-block w-auto md:w-[320px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRole}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold absolute left-0 top-0 whitespace-nowrap"
                    >
                      {roles[currentRole]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="invisible font-semibold whitespace-nowrap">
                    immersive web experiences
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed font-['Inter', system-ui] px-4"
            >
              Software engineer & creative developer passionate about pushing the boundaries
              of what's possible in the browser — from WebGL and shaders to micro-animations
              and interactive storytelling.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center gap-4 mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-5 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-xs md:text-sm hover:shadow-lg transition-all"
              >
                Get In Touch
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-5 py-2 md:px-6 md:py-2.5 border border-blue-500 rounded-full font-semibold text-xs md:text-sm hover:bg-blue-500/10 transition-all"
              >
                View Work
              </motion.a>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center gap-8 md:gap-16"
            >
              {[
                { value: "10+", label: "PROJECTS" },
                { value: "2+", label: "YEARS" },
                { value: "100%", label: "CLIENT SATISFACTION" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-500 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM SECTION - Marquee with arrow above it */}
      <div className="w-full">
        {/* Mobile Arrow - Above marquee */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center mb-3 md:hidden"
        >
          <FiArrowDown className="w-5 h-5 text-white/40" />
        </motion.div>

        {/* Scrolling Tech Stack Marquee */}
        <div className="w-full overflow-hidden border-t border-gray-800 py-3 bg-black/50 backdrop-blur-sm">
          <div className="flex animate-marquee whitespace-nowrap">
            {[
              "WEBGL", "◆", "THREE.JS", "◆", "GSAP", "◆", "CREATIVE CODE", "◆",
              "MOTION DESIGN", "◆", "REACT", "◆", "NEXT.JS", "◆", "TAILWIND CSS", "◆",
              "INTERACTIVE XP", "◆", "SHADER ART", "◆", "UI ENGINEERING", "◆"
            ].map((tech, i) => (
              <span key={i} className="mx-3 md:mx-4 text-[10px] md:text-sm text-gray-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Scroll Indicator - Right side */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-32 right-6 md:right-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/70 text-[8px] writing-mode-vertical">
          SCROLL TO EXPLORE
        </span>
        <div className="w-px h-6 bg-white/30" />
        <FiArrowDown className="w-3 h-3 text-white/70" />
      </motion.div>

      {/* Left Side - Desktop only */}
      <motion.div className="absolute bottom-32 left-6 md:left-10 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white/70 text-[8px] writing-mode-vertical">
          CREATIVE DEVELOPER
        </span>
        <div className="w-px h-6 bg-white/30" />
        <span className="text-white/70 text-[8px] writing-mode-vertical">
          FAISALABAD, PK
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;