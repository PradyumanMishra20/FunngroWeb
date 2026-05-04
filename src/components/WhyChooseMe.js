import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      title: "Core Focus",
      description: "What I prioritize in every project.",
      icon: "🎯",
      color: "from-blue-500 to-purple-500",
      features: ["Clean code", "Responsive layouts", "Fast performance", "Simple user experience"]
    },
    {
      title: "Fast Delivery",
      description: "Working solutions delivered quickly without sacrificing quality.",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500",
      features: ["On-time delivery", "Rapid prototyping", "Scalable from launch"]
    },
    {
      title: "Technical Partner",
      description: "I challenge assumptions and ensure your investment pays off.",
      icon: "🤝",
      color: "from-purple-500 to-pink-500",
      features: ["Strategic thinking", "Problem-solving", "Long-term success"]
    },
    {
      title: "Zero Risk",
      description: "Clear pricing, regular demos, and transparent communication.",
      icon: "🛡️",
      color: "from-orange-500 to-red-500",
      features: ["Fixed pricing", "Weekly demos", "Satisfaction guarantee"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "I start by understanding your business goals, users, and technical requirements. This foundation ensures we build the right solution."
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "I create a detailed technical plan, design system, and architecture that scales. No surprises, just a clear roadmap."
    },
    {
      step: "03",
      title: "Development & Iteration",
      description: "I build in focused sprints with regular demos. You see progress weekly and can provide feedback throughout."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deployment is just the beginning. I provide documentation, training, and ongoing support to ensure success."
    }
  ];

  return (
    <section id="why-choose-me" className="section-padding section-dark section-divider">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
          ref={ref}
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: "700",
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Why Choose Me
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
          </div>
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            I deliver business results, not just code. Every project provides measurable ROI.
          </p>
        </motion.div>

        {/* Main Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-2xl">{reason.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{reason.description}</p>
                  <ul className="space-y-2">
                    {reason.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Process Section with Animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 relative overflow-hidden"
        >
          {/* Subtle Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <motion.div
              className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{ 
                x: [0, -20, 0],
                y: [0, 15, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Section Header */}
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight relative z-10 text-center"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: "700",
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            My Process
          </motion.h3>
          <motion.div 
            className="flex items-center justify-center mb-8 mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ width: "120px" }}
          >
            <div className="w-8 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
          </motion.div>

          {/* Process Grid with Enhanced Animations */}
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="relative group pt-8"
              >
                {/* Card Background with Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)"
                  }}
                />

                {/* Step Number with Enhanced Animation */}
                <motion.div
                  className="relative w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { 
                    scale: 1, 
                    rotate: 0 
                  } : { 
                    scale: 0, 
                    rotate: -180 
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.2,
                    ease: "backOut"
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
                  }}
                >
                  {/* Pulsing Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 blur-md"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.3, 0.6]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  <span className="relative z-10">{item.step}</span>
                </motion.div>

                {/* Content with Micro Animations */}
                <div className="px-6 pb-6 pt-8 relative z-10">
                  <motion.h4 
                    className="text-lg font-semibold text-white mb-3 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.0 + index * 0.2,
                      ease: "easeOut"
                    }}
                  >
                    {item.title}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-gray-400 text-sm leading-relaxed text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.2 + index * 0.2,
                      ease: "easeOut"
                    }}
                  >
                    {item.description}
                  </motion.p>
                </div>

                {/* Horizontal Connecting Line */}
                {index < process.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-7 left-full w-8 h-px -translate-y-1/2 overflow-visible z-0"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 1.4 + index * 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50">
                      {/* Flowing Particle */}
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-80"
                        animate={{ 
                          x: ["0%", "100%"],
                          opacity: [0, 1, 1, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.6
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how I can help you achieve your goals. No pressure, just a conversation about what's possible.
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start the Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
