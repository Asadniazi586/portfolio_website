import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  // ✅ LENIS POWERED SCROLL (FIXED + SMOOTH)
  const scrollToSection = (sectionId) => {
    setIsOpen(false);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      // 🔥 Use Lenis if available (smoothest possible)
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -80,
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        });
      } else {
        // fallback
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          
          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            AK.
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* HAMBURGER */}
          {!isOpen && (
            <button
              className="md:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
          )}
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/98 backdrop-blur-md z-40"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100vh',
              }}
            >
              <div className="flex flex-col h-full w-full">

                {/* TOP BAR */}
                <div className="flex justify-between items-center px-6 py-5 border-b border-gray-800">
                  <div
                    className="text-xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer"
                    onClick={() => scrollToSection('home')}
                  >
                    Portfolio
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
                  >
                    <FiX size={28} />
                  </button>
                </div>

                {/* NAV LINKS */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.toLowerCase());
                      }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-300 hover:text-white transition-colors py-3 text-3xl font-medium cursor-pointer text-center"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;