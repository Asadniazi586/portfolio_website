// ABOUT.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiZap, FiUsers } from 'react-icons/fi';
import asad from '../assets/asadpic.png';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: FiCode,
      title: 'Clean Code',
      desc: 'Writing maintainable and scalable code',
      color: 'text-blue-500'
    },
    {
      icon: FiZap,
      title: 'Fast Performance',
      desc: 'Optimized for speed and efficiency',
      color: 'text-purple-500'
    },
    {
      icon: FiUsers,
      title: 'Team Player',
      desc: 'Excellent collaboration skills',
      color: 'text-pink-500'
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        {/* HEADING */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About Me
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Who Am I?
            </h3>

            <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
              I'm a passionate Full Stack Developer with 3+ years of
              experience building web applications that solve real-world
              problems. I specialize in React, Node.js, and modern
              web technologies.
            </p>

            <p className="text-gray-300 mb-7 leading-relaxed text-sm md:text-base">
              My journey in tech started with a curiosity about how things
              work, and it evolved into a career where I get to create
              amazing digital experiences every day.
            </p>

            {/* FEATURES */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.1
                  }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all"
                >
                  <feature.icon
                    className={`w-5 h-5 md:w-6 md:h-6 ${feature.color}`}
                  />

                  <div>
                    <h4 className="font-semibold text-sm md:text-base">
                      {feature.title}
                    </h4>

                    <p className="text-gray-400 text-xs md:text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group max-w-sm mx-auto md:max-w-full">
              <img
                src={asad}
                alt="Profile"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;