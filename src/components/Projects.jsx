import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Blog from '../assets/aiblog.png'
import Doctor from '../assets/doctorpic.png'
const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'AI Blog Platform',
      description: 'Next.js AI blog platform with intelligent content recommendations and seamless user experience.',
      image: Blog,
      tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'OpenAI API', 'Context API'],
      liveLink: 'https://ai-powered-blog-website-mcqj.onrender.com',
      githubLink: 'https://github.com/Asadniazi586/Ai-powered-blog-website-using-Nextjs',
    },
    {
      title: 'Doctor Appointment Booking',
      description: 'Healthcare platform with doctor search, appointment scheduling, and secure online payments.',
      image: Doctor,
      tech: ['React.js', 'Node/Express.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
      liveLink: 'https://doctor-appointment-frontend-cz6v.onrender.com ',
      githubLink: 'https://github.com/Asadniazi586/doctor-appointment-booking',
    },
    {
      title: 'Social Media App',
      description: 'Modern social platform with real-time chat, post sharing, and interactive features',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600',
      tech: ['React Native', 'Firebase', 'Socket.io', 'Redux', 'Tailwind'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  // Function to handle link clicks
  const handleLinkClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Link coming soon!');
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my best works that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.button
                    onClick={() => handleLinkClick(project.liveLink)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.button
                    onClick={() => handleLinkClick(project.githubLink)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full font-medium"
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
    </section>
  );
};

export default Projects;