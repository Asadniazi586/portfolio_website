import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiServer, FiTool } from "react-icons/fi";

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = {
    frontend: {
      icon: FiCode,
      color: "text-blue-500",
      items: [
        "Javascript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    backend: {
      icon: FiServer,
      color: "text-purple-500",
      items: ["Node.js", "Express", "MongoDB", "Postman", "Thunder Client"],
    },
    tools: {
      icon: FiTool,
      color: "text-pink-500",
      items: ["Git", "Github", "Docker", "AWS", "Jest"],
    },
  };

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 font-medium text-sm md:text-base">
          {name}
        </span>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
            Here are my technical skills and areas of expertise
          </p>
        </motion.div>

        {/* ==================== PREMIUM SKILLS CARDS ==================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(skills).map(([category, data], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative mx-auto w-full max-w-md md:max-w-full"
            >
              {/* Glow */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-xl group-hover:opacity-70 transition-all duration-500"></div>

              {/* Card */}
              <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/95 to-[#1f2937]/95 backdrop-blur-xl p-6 md:p-7 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>

                {/* Top Border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 flex items-center justify-center mb-5"
                >
                  <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
                    <data.icon className={`w-10 h-10 ${data.color}`} />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl md:text-3xl font-bold mb-6 capitalize text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {category}
                </h3>

                {/* Skills - Centered block with left-aligned items */}
                <div className="relative z-10">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex flex-col space-y-3 w-full max-w-fit mx-auto md:mx-0">
                      {data.items.map((skill, skillIdx) => (
                        <motion.div
                          key={skill}
                          className="flex items-center gap-3 rounded-lg transition-all duration-300 hover:bg-white/5 px-4 py-2"
                          whileHover={{ x: 5 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: idx * 0.2 + skillIdx * 0.05 }}
                        >
                          {/* Dot */}
                          <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />

                          {/* Text */}
                          <span className="text-gray-300 text-sm md:text-base whitespace-nowrap md:whitespace-normal">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==================== PREMIUM TECHNICAL PROFICIENCY ==================== */}

        <motion.div
          className="mt-14 md:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {/* Heading */}
          <div className="text-center mb-8 md:mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Technical Proficiency
            </motion.h3>

            <div className="w-28 h-[3px] mt-4 rounded-full mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto px-4">
              Expertise level across modern frontend and backend technologies
            </p>
          </div>

          {/* Progress Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 max-w-5xl mx-auto px-4">
            {[
              { name: "React.js", level: 90 },
              { name: "Next.js", level: 80 },
              { name: "Node.js / Express", level: 85 },
              { name: "MongoDB", level: 85 },
              { name: "Tailwind CSS", level: 95 },
              { name: "TypeScript", level: 75 },
            ].map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827]/95 to-[#1f2937]/95 p-5 md:p-6 shadow-2xl"
              >
                {/* Glow */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Skill Name */}
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold text-sm md:text-base tracking-wide">
                      {skill.name}
                    </h4>

                    <span className="text-sm md:text-base font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Track */}
                  <div className="relative h-3 rounded-full bg-white/5 overflow-hidden border border-white/5">
                    {/* Animated Fill */}
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 1.6,
                        delay: idx * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden"
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
