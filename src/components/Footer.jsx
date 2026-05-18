import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiArrowUp, FiMapPin, FiPhone, FiGlobe, FiCode, FiCompass, FiMessageCircle, FiStar } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/Asadniazi586", label: "GitHub", color: "hover:text-gray-400", bgColor: "from-gray-600 to-gray-800" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/asad-niazi-215a95271", label: "LinkedIn", color: "hover:text-blue-500", bgColor: "from-blue-600 to-blue-800" },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400", bgColor: "from-sky-500 to-sky-700" },
    { icon: FiMail, href: "mailto:asadniazi712@gmail.com", label: "Email", color: "hover:text-red-400", bgColor: "from-red-600 to-red-800" },
  ];

  const quickLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Jumping arrow animation variants
  const arrowVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.2,
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />

      {/* Animated Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10"
        >
          {/* Logo & Description */}
          <motion.div variants={itemVariants} className="text-left">
            <div className="relative inline-block mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                AK.
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Transforming ideas into exceptional digital experiences with cutting-edge technology and creative innovation.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-gray-500 text-xs">Available for collaborations</span>
            </div>
          </motion.div>

          {/* Quick Links with Capital Letters & Glowing */}
          <motion.div variants={itemVariants} className="text-left">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2 group">
              <FiCompass className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider">
                EXPLORE
              </span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-all duration-300 text-sm flex items-center gap-2 group/link"
                  >
                    <span className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-all duration-300 group-hover/link:scale-150" />
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info with Capital Letters & Glowing */}
          <motion.div variants={itemVariants} className="text-left">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2 group">
              <FiMessageCircle className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent tracking-wider">
                CONNECT
              </span>
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <p className="flex items-center gap-2 text-gray-400 text-sm group/item hover:text-white transition-colors duration-300">
                <FiMapPin className="w-4 h-4 text-blue-500 group-hover/item:scale-110 transition-transform duration-300" />
                Faisalabad, Pakistan
              </p>
              <p className="flex items-center gap-2 text-gray-400 text-sm group/item hover:text-white transition-colors duration-300">
                <FiPhone className="w-4 h-4 text-purple-500 group-hover/item:scale-110 transition-transform duration-300" />
                <a href="tel:+923419443586" className="hover:text-blue-400 transition-colors">+92 341 9443586</a>
              </p>
              <p className="flex items-center gap-2 text-gray-400 text-sm group/item hover:text-white transition-colors duration-300">
                <FiMail className="w-4 h-4 text-pink-500 group-hover/item:scale-110 transition-transform duration-300" />
                <a href="mailto:asadniazi712@gmail.com" className="hover:text-blue-400 transition-colors">asadniazi712@gmail.com</a>
              </p>
            </div>

            {/* Social Links with Glowing Effect */}
            <div className="flex gap-2 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group p-2.5 rounded-xl bg-gradient-to-br ${social.bgColor} bg-opacity-10 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-${social.color.split('-')[1]}-500/30`}
                  style={{ background: 'rgba(31, 41, 55, 0.6)' }}
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
                  <social.icon className={`w-4 h-4 text-gray-300 ${social.color} transition-colors relative z-10`} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-8"
        />

        {/* Bottom Bar - Refined with Jumping Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm flex items-center justify-center md:justify-start gap-2 flex-wrap">
              <FiStar className="w-3 h-3 text-yellow-500" />
              <span>Crafted with precision</span>
              <FiHeart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
              <span>by M. Asad Khan</span>
              <span className="text-gray-600 text-xs">© {currentYear}</span>
            </p>
          </div>
          
          {/* Jumping Arrow Button - No text, just animated arrow */}
          <motion.button
            onClick={scrollToTop}
            variants={arrowVariants}
            animate="animate"
            whileHover="hover"
            className="relative group p-3 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <FiArrowUp className="w-5 h-5 text-blue-400 group-hover:text-blue-300 relative z-10 transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;