import React, { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import LoadingScreen from './components/LoadingScreen';
import WhatsAppWidget from './components/WhatsAppWidget';
import Testimonials from './components/Testimonials';
import HowIWork from './components/HowIWork';

// Import performance utilities
import { isLowEndDevice } from './utils/performance';
import './styles/performance.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Add low-end device detection
  useEffect(() => {
    if (isLowEndDevice()) {
      document.body.classList.add('low-end-device');
    }
  }, []);

  useEffect(() => {
    // ✅ LENIS INIT (smooth scroll engine)
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
    });

    // make globally accessible for navbar scroll
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />

      {!isLoading && (
        <div className="relative min-h-screen">
          <Background3D />
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <HowIWork/>
              <Testimonials/>
              <Contact />
            </main>
            <Footer />
            <WhatsAppWidget />
          </div>
        </div>
      )}
    </MotionConfig>
  );
}

export default App;