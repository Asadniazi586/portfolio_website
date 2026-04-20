import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              M. ASAD KHAN
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Full Stack Developer | Creative Problem Solver | UI/UX Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center space-x-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all"
            >
              View Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:text-blue-500"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:your@email.com"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:text-blue-500"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <FiArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;