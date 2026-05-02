import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center max-w-4xl mx-auto">
          {/* Mobile-Optimized Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-display-2 xl:text-display-1 font-display font-bold mb-6 text-gradient leading-tight"
          >
            Building Digital Products That Convert Visitors Into Customers
          </motion.h1>

          {/* Mobile-Optimized Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-body text-accent-secondary mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            I transform complex business challenges into elegant web solutions that drive measurable growth. 
            From concept to launch, I deliver pixel-perfect designs and robust code that work seamlessly across all devices.
          </motion.p>

          {/* Production-Ready CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.button
              onClick={scrollToProjects}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 will-change-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View My Work</span>
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 will-change-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Get In Touch</span>
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="scroll-indicator mt-16"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-accent-tertiary text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-accent-tertiary rounded-full flex justify-center">
                <div className="w-1 h-3 bg-accent-tertiary rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-brand-secondary rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-brand-tertiary rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-40 right-10 w-4 h-4 bg-brand-primary rounded-full animate-pulse delay-1500" />
    </section>
  );
};

export default Hero;
