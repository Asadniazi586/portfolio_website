import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiFolder, FiMail, FiChevronRight } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home', icon: FiHome },
    { name: 'About', id: 'about', icon: FiUser },
    { name: 'Skills', id: 'skills', icon: FiCode },
    { name: 'Projects', id: 'projects', icon: FiFolder },
    { name: 'Contact', id: 'contact', icon: FiMail },
  ];

  // Scroll to section with Lenis
  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -80,
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        });
      } else {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-blue-500/5 border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            
            {/* LOGO - Premium */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-40 transition-all duration-500" />
              <div className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AK.
              </div>
            </motion.div>

            {/* DESKTOP MENU - Premium */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* HAMBURGER BUTTON - Premium */}
            {!isOpen && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden relative w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <FiMenu size={20} className="relative z-10 text-white" />
              </motion.button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU - Premium Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50 overflow-hidden"
          >
            {/* Blur Background */}
            <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl" />
            
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            
            <div className="relative h-full w-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                >
                  Menu
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                >
                  <FiX size={22} className="text-white" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full max-w-xs"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className={`relative flex items-center justify-between w-full px-6 py-4 rounded-2xl border transition-all duration-300 ${
                      activeSection === item.id
                        ? 'border-blue-500/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10'
                        : 'border-white/10 hover:border-blue-500/30 bg-white/5'
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                            : 'bg-white/10 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500'
                        }`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className={`text-lg font-semibold ${
                          activeSection === item.id ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {item.name}
                        </span>
                      </div>
                      <FiChevronRight className={`w-5 h-5 transition-all duration-300 ${
                        activeSection === item.id ? 'text-blue-400 translate-x-1' : 'text-gray-500 group-hover:translate-x-1 group-hover:text-blue-400'
                      }`} />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="px-6 py-8 text-center"
              >
                <p className="text-gray-500 text-sm">
                  Let's create something amazing together
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-600 text-xs">Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;