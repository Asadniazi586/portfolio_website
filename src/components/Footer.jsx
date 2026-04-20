import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiArrowUp, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/Asadniazi586", label: "GitHub", color: "hover:text-gray-400" },
    { icon: FiLinkedin, href: " https://www.linkedin.com/in/asad-niazi-215a95271 ", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
    { icon: FiMail, href: "mailto:your@email.com", label: "Email", color: "hover:text-red-400" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
              Portfolio
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
             Meet MERN stack developer specializing in full-stack web applications with modern, responsive designs.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-left"
          >
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-white font-semibold mb-3">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-400 text-sm">
                <FiMapPin className="w-4 h-4 text-blue-500" />
                Faisalabad
              </p>
              <p className="flex items-center gap-2 text-gray-400 text-sm">
                <FiPhone className="w-4 h-4 text-blue-500" />
                +923419443586
              </p>
              <p className="flex items-center gap-2 text-gray-400 text-sm">
                <FiMail className="w-4 h-4 text-blue-500" />
                asadniazi712@email.com
              </p>
            </div>
          </motion.div>

          {/* Newsletter / Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-left"
          >
            <h3 className="text-white font-semibold mb-3">Follow Me</h3>
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-xs">
              Available for freelance work
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-1">
                <span>Made with</span>
                <FiHeart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
                <span>by M. Asad Khan</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                © {currentYear} All rights reserved. | Built with React & Tailwind CSS v4
              </p>
            </div>
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-blue-500 text-sm"
            >
              <FiArrowUp className="w-4 h-4" />
              Back to Top
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;