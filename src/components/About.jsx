// ABOUT.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiUsers, FiAward, FiHeart, FiGlobe } from 'react-icons/fi';
import asad from '../assets/asadpic.png';

const About = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // State for counting animation
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate experience from 0 to 3 - SLOWER
            let exp = 0;
            const expInterval = setInterval(() => {
              if (exp < 3) {
                exp++;
                setExperienceCount(exp);
              } else {
                clearInterval(expInterval);
              }
            }, 200); // Changed from 150 to 200 (slower)

            // Animate projects from 0 to 50 - SLOWER
            let proj = 0;
            const projInterval = setInterval(() => {
              if (proj < 50) {
                proj = proj + 1; // Changed from +2 to +1 (slower)
                if (proj > 50) proj = 50;
                setProjectsCount(proj);
              } else {
                clearInterval(projInterval);
              }
            }, 40); // Changed from 30 to 40 (slower)

            // Animate clients from 0 to 100 - SLOWER
            let cli = 0;
            const cliInterval = setInterval(() => {
              if (cli < 100) {
                cli = cli + 2; // Changed from +3 to +2 (slower)
                if (cli > 100) cli = 100;
                setClientsCount(cli);
              } else {
                clearInterval(cliInterval);
              }
            }, 35); // Changed from 25 to 35 (slower)

            // Cleanup intervals when done
            setTimeout(() => {
              clearInterval(expInterval);
              clearInterval(projInterval);
              clearInterval(cliInterval);
            }, 5000);
          }
        });
      },
      { threshold: 0.3, triggerOnce: true }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const features = [
    {
      icon: FiCode,
      title: 'Clean Code',
      desc: 'Writing maintainable and scalable code with best practices',
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: FiZap,
      title: 'Fast Performance',
      desc: 'Optimized for speed and efficiency with modern tools',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: FiUsers,
      title: 'Team Player',
      desc: 'Excellent collaboration skills and agile methodology',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20'
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 md:py-28 bg-black"
      style={{
        position: 'relative',
        width: '100%',
        background: '#000000',
        display: 'block'
      }}
    >
      {/* Background Decorations - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      {/* Animated Background Blobs - Very subtle */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
              Get to Know Me
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            About{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base px-4">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Who Am{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  I?
                </span>
              </h3>
              
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-5" />
              
              <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                I'm a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> with 3+ years of
                experience building web applications that solve real-world
                problems. I specialize in React, Node.js, and modern
                web technologies.
              </p>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                My journey in tech started with a curiosity about how things
                work, and it evolved into a career where I get to create
                amazing digital experiences every day. I believe in writing
                clean, maintainable code that makes a difference.
              </p>
            </div>

            {/* FEATURES - Enhanced Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-2xl ${feature.bgColor} border ${feature.borderColor} p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}
                  style={{ background: 'rgba(17, 24, 39, 0.8)' }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <div className="relative z-10 text-center">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <h4 className="font-semibold text-sm md:text-base text-white mb-1">
                      {feature.title}
                    </h4>

                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section with Animated Counting - SLOWER */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800">
              {/* Years Experience */}
              <div className="text-center group">
                <FiAward className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-xl md:text-2xl font-bold text-white">
                  {experienceCount}+
                </div>
                <div className="text-gray-500 text-xs md:text-sm">Years Experience</div>
              </div>

              {/* Projects Completed */}
              <div className="text-center group">
                <FiHeart className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-xl md:text-2xl font-bold text-white">
                  {projectsCount}+
                </div>
                <div className="text-gray-500 text-xs md:text-sm">Projects Completed</div>
              </div>

              {/* Happy Clients */}
              <div className="text-center group">
                <FiGlobe className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-xl md:text-2xl font-bold text-white">
                  {clientsCount}+
                </div>
                <div className="text-gray-500 text-xs md:text-sm">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Image with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Animated Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-40 blur-xl transition-all duration-500" />
            
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group max-w-sm mx-auto md:max-w-full">
              {/* Image */}
              <img
                src={asad}
                alt="Profile"
                className="w-full h-auto transition-all duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Bottom Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">Full Stack Developer</p>
                    <p className="text-gray-400 text-xs">Available for work</p>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;