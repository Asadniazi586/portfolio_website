// Testimonials.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // State for counting animation
  const [ratingCount, setRatingCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const testimonials = [
    {
      id: 1,
      name: "James Wilson",
      role: "CTO, InnovateTech Solutions",
      location: "San Francisco, USA",
      rating: 5,
      comment: "Asad Khan is an exceptional MERN stack developer. He built our entire e-commerce platform from scratch with remarkable efficiency. His code is clean, scalable, and well-documented. The project was delivered 2 weeks ahead of schedule. I've already hired him for two more projects!",
      image: null,
      project: "E-Commerce Platform",
      date: "March 2024",
      flag: "🇺🇸"
    },
    {
      id: 2,
      name: "Emma Thompson",
      role: "Product Manager, CloudScale AI",
      location: "London, United Kingdom",
      rating: 5,
      comment: "Working with Asad was a game-changer for our startup. His expertise in React and Node.js helped us launch our MVP in record time. He's proactive, communicates clearly, and solves complex problems effortlessly. One of the best freelancers I've ever worked with!",
      image: null,
      project: "SaaS Dashboard",
      date: "January 2024",
      flag: "🇬🇧"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Founder, NextGen Startups",
      location: "Toronto, Canada",
      rating: 5,
      comment: "Asad's MERN stack skills are outstanding. He developed a complete social media dashboard for our clients with real-time features. His attention to detail and commitment to quality is rare to find. The final product exceeded all our expectations. Highly recommended!",
      image: null,
      project: "Social Media Analytics",
      date: "February 2024",
      flag: "🇨🇦"
    },
    {
      id: 4,
      name: "Sophia Müller",
      role: "Technical Director, Digital Innovations GmbH",
      location: "Berlin, Germany",
      rating: 5,
      comment: "Absolutely thrilled with Asad Khan's work! He built a complex task management system for our enterprise clients using Next.js and MongoDB. His understanding of modern web architecture is impressive. The project was completed on time and within budget. Will definitely collaborate again!",
      image: null,
      project: "Enterprise Task Manager",
      date: "December 2023",
      flag: "🇩🇪"
    }
  ];

  // Counting animation effect
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      
      // Animate rating from 0 to 5.0
      let rating = 0;
      const ratingInterval = setInterval(() => {
        if (rating < 5.0) {
          rating = rating + 0.1;
          setRatingCount(parseFloat(rating.toFixed(1)));
        } else {
          clearInterval(ratingInterval);
        }
      }, 40);

      // Animate reviews from 0 to 24
      let reviews = 0;
      const reviewsInterval = setInterval(() => {
        if (reviews < 50) {
          reviews = reviews + 1;
          setReviewsCount(reviews);
        } else {
          clearInterval(reviewsInterval);
        }
      }, 50);

      // Animate satisfaction from 0 to 100
      let satisfaction = 0;
      const satisfactionInterval = setInterval(() => {
        if (satisfaction < 100) {
          satisfaction = satisfaction + 2;
          if (satisfaction > 100) satisfaction = 100;
          setSatisfactionCount(satisfaction);
        } else {
          clearInterval(satisfactionInterval);
        }
      }, 30);
    }
  }, [inView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

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
              Professional Recognition
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            What{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-5" />
          
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base px-4">
            Trusted by clients across USA, UK, Canada, Germany, and worldwide
          </p>
        </motion.div>

        {/* Stats Bar with Counting Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-4xl mx-auto"
        >
          {/* Average Rating */}
          <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 backdrop-blur-sm">
            <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {ratingCount}
            </div>
            <div className="flex justify-center gap-0.5 md:gap-1 my-2">
              {renderStars(5)}
            </div>
            <div className="text-gray-400 text-xs md:text-sm">Average Rating</div>
          </div>
          
          {/* Total Reviews */}
          <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 backdrop-blur-sm">
            <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {reviewsCount}+
            </div>
            <div className="text-gray-400 text-xs md:text-sm mt-2">Total Reviews</div>
          </div>
          
          {/* Satisfaction Rate */}
          <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 backdrop-blur-sm">
            <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {satisfactionCount}%
            </div>
            <div className="text-gray-400 text-xs md:text-sm mt-2">Satisfaction Rate</div>
          </div>
        </motion.div>

        {/* Testimonials Grid - 4 cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glowing Border */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-40 transition-all duration-500" />
              
              {/* Card Content */}
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-5 md:p-6 border border-gray-700/50 group-hover:border-transparent transition-all duration-500">
                {/* Quote Icon */}
                <FaQuoteLeft className="absolute top-5 right-5 w-7 h-7 text-blue-500/10 group-hover:text-blue-500/20 transition-all duration-500" />
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Comment */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.comment}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-700/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <FaUserCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-semibold text-sm md:text-base">
                        {testimonial.name}
                      </h4>
                      <span className="text-lg">{testimonial.flag}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs mt-1">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs">{testimonial.date}</p>
                    <p className="text-blue-400 text-xs font-medium mt-1">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <span className="text-gray-300 text-sm">⭐</span>
            <span className="text-gray-300 text-sm">Join {reviewsCount}+ satisfied clients worldwide</span>
            <span className="text-blue-400 text-sm font-semibold">Let's work together!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;