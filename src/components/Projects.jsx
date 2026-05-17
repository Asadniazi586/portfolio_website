import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';

import Blog from '../assets/aiblog.png';
import Doctor from '../assets/doctorpic.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const stickyRef = useRef(null);
  const horizontalRef = useRef(null);
  const rafRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [showTitle, setShowTitle] = useState(true);

  const projects = [
    {
      title: 'AI Blog Platform',
      description: 'Next.js AI blog platform with intelligent content recommendations.',
      image: Blog,
      tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'OpenAI API'],
      liveLink: 'https://ai-powered-blog-website-mcqj.onrender.com',
    },
    {
      title: 'Doctor Appointment Booking',
      description: 'Healthcare platform with doctor search and appointment scheduling.',
      image: Doctor,
      tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
      liveLink: 'https://doctor-appointment-frontend-cz6v.onrender.com',
    },
    {
      title: 'Social Media App',
      description: 'Modern social platform with real-time chat and post sharing.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900',
      tech: ['React Native', 'Firebase', 'Socket.io', 'Redux'],
      liveLink: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce solution with cart and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=900',
      tech: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe'],
      liveLink: '#',
    },
    {
      title: 'Portfolio 3D Website',
      description: 'Immersive 3D portfolio with WebGL and Three.js animations.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=900',
      tech: ['Three.js', 'React', 'GSAP', 'WebGL'],
      liveLink: '#',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management with real-time updates.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
      liveLink: '#',
    },
  ];

  useEffect(() => {
    const calculate = () => {
      if (!horizontalRef.current) return;
      const containerWidth = window.innerWidth;
      const projectsWidth = horizontalRef.current.scrollWidth;
      const visibleWidth = containerWidth - 48;
      let maxMove = projectsWidth - visibleWidth;
      if (maxMove > 0) {
        maxMove = maxMove + 20;
      }
      setMaxTranslate(Math.max(0, maxMove));
    };
    calculate();
    window.addEventListener('resize', calculate);
    return () => window.removeEventListener('resize', calculate);
  }, []);

  useEffect(() => {
    const section = stickyRef.current;
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const scrollableHeight = sectionHeight - window.innerHeight;
      
      if (scrollableHeight > 0) {
        let progress = -rect.top / scrollableHeight;
        progress = Math.max(0, Math.min(progress, 1));
        setTranslateX(progress * maxTranslate);
        
        if (progress > 0.05) {
          setShowTitle(false);
        } else {
          setShowTitle(true);
        }
      }
    };

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        update();
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [maxTranslate]);

  const handleLinkClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Live demo coming soon!');
    }
  };

  return (
    <section
      ref={stickyRef}
      id="projects"
      className="relative bg-black"
      style={{
        height: `${Math.min(projects.length * 75, 500)}vh`,
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
            
            <motion.div
              ref={ref}
              initial={{ opacity: 1, y: 0 }}
              animate={{ 
                opacity: showTitle ? 1 : 0,
                y: showTitle ? 0 : -20
              }}
              transition={{ duration: 0.4 }}
              className="text-center mb-6 md:mb-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Featured Projects
              </h2>
              <div className="w-16 md:w-20 h-[2px] rounded-full mx-auto mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-4">
                A collection of selected projects showcasing my expertise in modern web development
              </p>
            </motion.div>

            <div className="overflow-visible">
              <div
                ref={horizontalRef}
                className="flex gap-4 md:gap-5 lg:gap-6 will-change-transform projects-scroll-container"
                style={{
                  transform: `translate3d(-${translateX}px, 0, 0)`,
                  transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
                  paddingLeft: '12px',
                  paddingRight: 'calc(100% - 280px)',
                }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="project-card flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] bg-gradient-to-br from-gray-900/90 to-gray-800/80 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-md shadow-xl group"
                    style={{
                      willChange: 'transform',
                      transform: 'translateZ(0)',
                    }}
                  >
                    <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <button
                          onClick={() => handleLinkClick(project.liveLink)}
                          className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 active:scale-95 md:hover:scale-110"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink className="text-white w-5 h-5" />
                        </button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-blue-600/80 rounded-full p-1.5 opacity-100 md:opacity-0 transition-opacity">
                        <FiExternalLink className="text-white w-3 h-3" />
                      </div>
                    </div>
                    <div className="p-4 md:p-5">
                      <h3 className="text-base md:text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] md:text-[10px] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;