import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail, FiMessageCircle, FiCheckCircle, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

  // Mobile functions for phone and email
  const handlePhoneClick = () => {
    window.location.href = 'tel:+923419443586';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:asadniazi712@gmail.com';
  };

  const contactInfo = [
    { 
      icon: FiMapPin, 
      title: 'Location', 
      details: 'Faisalabad, Pakistan', 
      color: 'from-blue-500 to-cyan-400', 
      bgColor: 'bg-blue-500/10', 
      borderColor: 'border-blue-500/20',
      onClick: null,
      isClickable: false,
      animation: 'slideInLeft'
    },
    { 
      icon: FiPhone, 
      title: 'Phone', 
      details: '+92-3419443586', 
      color: 'from-purple-500 to-pink-500', 
      bgColor: 'bg-purple-500/10', 
      borderColor: 'border-purple-500/20',
      onClick: handlePhoneClick,
      isClickable: true,
      animation: 'slideInLeft'
    },
    { 
      icon: FiMail, 
      title: 'Email', 
      details: 'asadniazi712@gmail.com', 
      color: 'from-emerald-500 to-teal-500', 
      bgColor: 'bg-emerald-500/10', 
      borderColor: 'border-emerald-500/20',
      onClick: handleEmailClick,
      isClickable: true,
      animation: 'slideInLeft'
    },
  ];

  const socialLinks = [
    { icon: FiGithub, name: 'GitHub', url: 'https://github.com/Asadniazi586', color: 'from-gray-500 to-gray-700' },
    { icon: FiLinkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/asad-niazi-215a95271', color: 'from-blue-600 to-blue-800' },
    { icon: FiTwitter, name: 'Twitter', url: 'https://twitter.com', color: 'from-sky-500 to-sky-700' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-20 md:py-28 bg-black overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      {/* Animated Background Blobs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADING */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
              Let's Connect
            </span>
          </div>

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
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* LEFT - Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Let's Talk
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                I'm always excited to discuss new projects and opportunities
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3" />
            </div>

            {/* Contact Cards - CSS Animations */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  onClick={info.onClick}
                  className={`group relative overflow-hidden rounded-2xl ${info.bgColor} border ${info.borderColor} p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-opacity-100 ${info.isClickable ? 'cursor-pointer' : ''} contact-card-${index}`}
                  style={{ 
                    background: 'rgba(17, 24, 39, 0.6)',
                    opacity: 0,
                    transform: 'translateX(-30px)',
                    animation: inView ? `slideInLeft 0.4s ease-out ${0.2 + index * 0.1}s forwards` : 'none'
                  }}
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
                </div>
              ))}
            </div>

            {/* Social Connect Section */}
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50 p-6 backdrop-blur-sm"
              style={{
                opacity: 0,
                transform: 'translateX(-30px)',
                animation: inView ? `slideInLeft 0.4s ease-out 0.5s forwards` : 'none'
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <FiMessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
                </div>
                
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r ${social.color} bg-opacity-10 hover:shadow-lg transition-all duration-300 social-link-${index}`}
                      style={{
                        background: 'rgba(31, 41, 55, 0.8)',
                        opacity: 0,
                        transform: 'scale(0.8)',
                        animation: inView ? `scaleIn 0.3s ease-out ${0.6 + index * 0.1}s forwards` : 'none'
                      }}
                    >
                      <social.icon className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div
            className="relative"
            style={{
              opacity: 0,
              transform: 'translateX(50px)',
              animation: inView ? `slideInRight 0.5s ease-out 0.3s forwards` : 'none'
            }}
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                >
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
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .contact-card-0 {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .contact-card-1 {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .contact-card-2 {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .social-link-0, .social-link-1, .social-link-2 {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Contact;