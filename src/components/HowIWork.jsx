// HowIWork.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiSearch, FiEdit, FiCode, FiZap, FiCheckCircle, 
  FiTrendingUp, FiShoppingBag, FiBookOpen, FiBriefcase, 
  FiHeart, FiGlobe, FiBarChart2, FiUsers, FiSmartphone,
  FiMessageCircle, FiClock, FiStar
} from 'react-icons/fi';

const HowIWork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      id: 1,
      icon: FiSearch,
      title: "Discovery & Strategy",
      description: "Understanding your goals, audience, and constraints before touching any code. A well-defined brief saves weeks downstream.",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      duration: "1-2 weeks"
    },
    {
      id: 2,
      icon: FiEdit,
      title: "Design & Prototype",
      description: "Low-fidelity wireframes to high-fidelity interactive prototypes. Rapid iteration until the concept is bulletproof.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      duration: "2-3 weeks"
    },
    {
      id: 3,
      icon: FiCode,
      title: "Build & Animate",
      description: "Production code with obsessive attention to performance, accessibility, and the kind of micro-details users feel but can't name.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      duration: "4-8 weeks"
    },
    {
      id: 4,
      icon: FiZap,
      title: "Launch & Iterate",
      description: "Deploy, measure, and refine. Great digital products are never truly finished — they evolve with your users.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      duration: "Ongoing"
    }
  ];

  const sectors = [
    {
      icon: FiShoppingBag,
      title: "E-Commerce",
      description: "Scalable online stores, custom checkout systems, and performance-optimized platforms for seamless buying experiences.",
      color: "from-blue-500 to-cyan-400",
      features: ["Payment Integration", "Inventory Management", "Order Tracking"]
    },
    {
      icon: FiTrendingUp,
      title: "SaaS & Tech",
      description: "Robust web applications, admin dashboards, and scalable systems for modern SaaS products and startups.",
      color: "from-purple-500 to-pink-500",
      features: ["Subscription Management", "Analytics Dashboard", "API Development"]
    },
    {
      icon: FiBookOpen,
      title: "Education & E-Learning",
      description: "Engaging platforms and content-rich websites that make learning intuitive, accessible, and effective.",
      color: "from-emerald-500 to-teal-500",
      features: ["Course Management", "Video Integration", "Progress Tracking"]
    },
    {
      icon: FiBriefcase,
      title: "Real Estate & Construction",
      description: "High-impact corporate sites and project showcases for property developers and contracting firms.",
      color: "from-orange-500 to-red-500",
      features: ["Property Listings", "Virtual Tours", "Lead Generation"]
    },
    {
      icon: FiHeart,
      title: "Agency & Creative",
      description: "Visually bold websites and portfolios for creative agencies, studios, and design-driven brands.",
      color: "from-pink-500 to-rose-500",
      features: ["Portfolio Showcase", "Client CMS", "Interactive Elements"]
    },
    {
      icon: FiGlobe,
      title: "Media & Publishing",
      description: "Content-first digital experiences for publishers, media brands, and storytelling platforms that demand performance.",
      color: "from-indigo-500 to-purple-500",
      features: ["Content Management", "SEO Optimized", "Fast Loading"]
    }
  ];

  const values = [
    { icon: FiMessageCircle, text: "Clear Communication", color: "text-blue-500" },
    { icon: FiClock, text: "On-Time Delivery", color: "text-purple-500" },
    { icon: FiStar, text: "Quality First", color: "text-yellow-500" },
    { icon: FiUsers, text: "Client-Centric", color: "text-emerald-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="process" className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      {/* Animated Background Blobs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADING */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
              How I Work
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            My{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Creative Process
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-5" />
          
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base px-4">
            A structured approach to delivering exceptional digital products that exceed expectations
          </p>
        </motion.div>

        {/* Process Timeline with Visible Connecting Line */}
        <div className="relative mb-20 md:mb-28">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-4 md:gap-8`}
              >
                {/* Step Number with Circle - Outside the box */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-blue-500/50 flex items-center justify-center shadow-lg">
                    <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      {step.id}
                    </span>
                  </div>
                  {/* Connector dot on the line */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full hidden md:block" />
                </div>
                
                {/* Content Box */}
                <div className="flex-1 md:w-[calc(50%-2rem)]">
                  <div className="group relative">
                    {/* Glowing Border */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-40 transition-all duration-500" />
                    
                    {/* Card Content */}
                    <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-2xl p-5 md:p-6 border border-gray-700/50 group-hover:border-transparent transition-all duration-500">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <FiClock className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-500">Estimated: {step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expertise Across Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Expertise Across{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Sectors
              </span>
            </h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-gray-400 mt-3 text-sm md:text-base">
              Industries I serve with tailored solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-2xl p-6 border border-gray-700/50 group-hover:border-transparent transition-all duration-500 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center mb-4`}>
                    <sector.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">{sector.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{sector.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {sector.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 backdrop-blur-sm">
            {values.map((value, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <value.icon className={`w-5 h-5 ${value.color}`} />
                <span className="text-gray-300 text-sm md:text-base font-medium">{value.text}</span>
                {idx < values.length - 1 && <span className="text-gray-700 mx-2">•</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowIWork;