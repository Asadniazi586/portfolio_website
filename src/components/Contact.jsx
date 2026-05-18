import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiMapPin, FiPhone, FiMail, FiMessageCircle, FiCheckCircle, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: FiMapPin, title: 'Location', details: 'Faisalabad, Pakistan', color: 'from-blue-500 to-cyan-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20' },
    { icon: FiPhone, title: 'Phone', details: '+92-3419443586', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/20' },
    { icon: FiMail, title: 'Email', details: 'asadniazi712@gmail.com', color: 'from-emerald-500 to-teal-500', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/20' },
  ];

  const socialLinks = [
    { icon: FiGithub, name: 'GitHub', url: 'https://github.com', color: 'from-gray-500 to-gray-700' },
    { icon: FiLinkedin, name: 'LinkedIn', url: 'https://linkedin.com', color: 'from-blue-600 to-blue-800' },
    { icon: FiTwitter, name: 'Twitter', url: 'https://twitter.com', color: 'from-sky-500 to-sky-700' },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      {/* Animated Background Blobs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

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
              Let's Connect
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base px-4">
            Have a project in mind? Let's work together and create something amazing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* LEFT - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Let's Talk
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                I'm always excited to discuss new projects and opportunities
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3" />
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className={`group relative overflow-hidden rounded-2xl ${info.bgColor} border ${info.borderColor} p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-opacity-100`}
                  style={{ background: 'rgba(17, 24, 39, 0.6)' }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{info.title}</p>
                      <p className="text-white font-medium text-sm md:text-base">{info.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Connect Section - Replaces Working Hours */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50 p-6 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <FiMessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
                </div>
                
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r ${social.color} bg-opacity-10 hover:shadow-lg transition-all duration-300`}
                      style={{ background: 'rgba(31, 41, 55, 0.8)' }}
                    >
                      <social.icon className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-xl" />
            
            <form onSubmit={handleSubmit} className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl p-6 md:p-8 border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              <div className="space-y-5">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  {isSent ? (
                    <>
                      <FiCheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;