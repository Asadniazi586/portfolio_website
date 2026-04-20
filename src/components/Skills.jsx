import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiServer, FiTool } from 'react-icons/fi';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = {
    frontend: { 
      icon: FiCode, 
      color: "text-blue-500",
      items: ['Javascript', 'React.js', 'Next.js', 'Tailwind CSS', 'Material UI'] 
    },
    backend: { 
      icon: FiServer, 
      color: "text-purple-500",
      items: ['Node.js', 'Express', 'MongoDB', 'Postman', 'Thunder Client'] 
    },
    tools: { 
      icon: FiTool, 
      color: "text-pink-500",
      items: ['Git', 'Github', 'Docker', 'AWS', 'Jest'] 
    },
  };

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 font-medium text-sm md:text-base">{name}</span>
        <span className="text-gray-400 text-sm md:text-base">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
            Here are my technical skills and areas of expertise
          </p>
        </motion.div>

        {/* Skills Cards - Centered on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(skills).map(([category, data], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto w-full max-w-md md:max-w-full"
            >
              <div className="flex items-center justify-center mb-4">
                <data.icon className={`w-10 h-10 ${data.color}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 capitalize text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {category}
              </h3>
              <div className="space-y-3">
                {data.items.map((skill, skillIdx) => (
                  <motion.div 
                    key={skill} 
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer justify-center md:justify-start"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.2 + skillIdx * 0.05 }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm md:text-base">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Proficiency Section */}
        <motion.div 
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 text-white">
            Technical Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
            <SkillBar name="React.js" level={90} />
            <SkillBar name="Next.js" level={80} />
            <SkillBar name="Node.js/Express" level={85} />
            <SkillBar name="MongoDB" level={85} />
            <SkillBar name="Tailwind CSS" level={95} />
            <SkillBar name="TypeScript" level={75} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;