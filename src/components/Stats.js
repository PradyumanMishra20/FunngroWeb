import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollAnimation';

const Stats = React.memo(() => {
  const { ref, controls } = useScrollAnimation();

  // Memoize stats array to prevent recreation on every render
  const stats = React.useMemo(() => [
    {
      number: "5+",
      label: "Projects",
      description: "Designed and developed from scratch",
      icon: "🚀"
    },
    {
      number: "Fast",
      label: "First",
      description: "Optimized for speed and responsiveness",
      icon: "⚡"
    },
    {
      number: "Modern",
      label: "Stack",
      description: "React, Tailwind, JavaScript",
      icon: "💻"
    },
    {
      number: "Growing",
      label: "Every Day",
      description: "Actively improving through real projects",
      icon: "📈"
    }
  ], []);

  return (
    <section id="stats" className="section-padding-sm section-medium section-divider">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
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
            What I've Built So Far
          </h2>
          <motion.div 
            className="flex items-center justify-center mb-6 mx-auto w-[120px]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-8 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
          </motion.div>
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Focused on learning fast and building real applications.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={staggerItemVariants}
              whileHover={{ y: -2 }}
              className={`bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl ${index === 1 ? 'p-10' : 'p-8'} text-center hover:border-white/20 transition-all duration-200 h-full flex flex-col justify-between`}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
              >
                <span className="text-2xl">{stat.icon}</span>
              </motion.div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-3">
                {stat.number}
              </div>
              <div className="font-semibold text-blue-400 mb-2" style={{ fontSize: index === 1 ? '12px' : '1.25rem' }}>
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Context */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-white font-semibold mb-2">Early-Stage Developer</h4>
              <p className="text-gray-400 text-sm">Focused on building real-world projects and improving fast</p>
            </div>
            <div className="text-center">
              <h4 className="text-white font-semibold mb-2">Exploring Multiple Domains</h4>
              <p className="text-gray-400 text-sm">Working on different types of applications to grow experience</p>
            </div>
            <div className="text-center">
              <h4 className="text-white font-semibold mb-2">Remote Ready</h4>
              <p className="text-gray-400 text-sm">Comfortable building and collaborating online</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Stats;
