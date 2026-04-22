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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Available for freelance projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 mt-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">Available for freelance projects</span>
          </motion.div>

          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-['Inter', system-ui] tracking-tight"
          >
            M. ASAD KHAN
          </motion.h1>

          {/* "I build" and animated text - same line fix */}
    <div className="text-2xl md:text-3xl text-gray-300 mb-4">
  <div className="flex justify-center items-center text-center md:whitespace-nowrap">
    <span className="mr-2">I build</span>

    <div className="relative inline-block w-auto md:w-[300px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRole}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold absolute left-0 top-0"
          style={{ whiteSpace: 'nowrap' }}
        >
          {roles[currentRole]}
        </motion.span>
      </AnimatePresence>

      <span className="invisible font-semibold whitespace-nowrap">
        {roles.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </div>
  </div>
</div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-['Inter', system-ui]"
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
            className="flex justify-center gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-sm hover:shadow-lg transition-all font-['Inter', system-ui]"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-2.5 border border-blue-500 rounded-full font-semibold text-sm hover:bg-blue-500/10 transition-all font-['Inter', system-ui]"
            >
              View Work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-12 md:gap-16 mb-8"
          >
            {[
              { value: "10+", label: "PROJECTS" },
              { value: "2+", label: "YEARS" },
              { value: "100%", label: "CLIENT SATISFACTION" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-white font-['Inter', system-ui] tracking-tight">{stat.value}</div>
                <div className="text-xs text-gray-500 tracking-wider font-['Inter', system-ui]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Left Side - Creative Developer with Line + Location */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-32 left-6 md:left-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-white/70 text-[8px] tracking-wider writing-mode-vertical font-['Inter', system-ui]">CREATIVE DEVELOPER</span>
        <div className="w-px h-6 bg-white/30"></div>
        <span className="text-white/70 text-[8px] tracking-wider writing-mode-vertical font-['Inter', system-ui]">FAISALABAD, PK</span>
      </motion.div>

      {/* Right Side - Scroll Indicator - HIDDEN ON MOBILE */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-32 right-6 md:right-10 cursor-pointer hidden md:flex flex-col items-center gap-2"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-white/70 text-[8px] tracking-wider writing-mode-vertical font-['Inter', system-ui]">SCROLL TO EXPLORE</span>
        <div className="w-px h-6 bg-white/30"></div>
        <FiArrowDown className="w-3 h-3 text-white/70" />
      </motion.div>

      {/* Simple mobile scroll arrow - visible only on mobile */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer md:hidden"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <FiArrowDown className="w-5 h-5 text-white/50" />
      </motion.div>

      {/* Scrolling Tech Stack Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-gray-800 py-3 bg-black/50 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "Framer motion", "◆", "THREE.JS", "◆", "GSAP", "◆", "CREATIVE CODE", "◆",
            "MOTION DESIGN", "◆", "REACT", "◆", "NEXT.JS", "◆", "Tailwind CSS", "◆",
            "INTERACTIVE XP", "◆", "SHADER ART", "◆", "UI ENGINEERING", "◆"
          ].map((tech, i) => (
            <span
              key={i}
              className="mx-4 text-xs md:text-sm font-medium tracking-wide font-['Inter', system-ui]"
              style={{
                color: i % 2 === 0 ? '#9ca3af' : '#6b7280',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;