import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Performance optimization: Animation configs outside component
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: { width: 'var(--progress)' }
};

// Performance detection
const isLowEndDevice = () => {
  return navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
};

const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || isLowEndDevice();
};

const Skills = React.memo(() => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    viewport: { once: true }
  });

  // Memoize skills data
  const skills = useMemo(() => [
  // Frontend (your actual strength)
  { name: 'HTML5', category: 'Frontend', level: 85, icon: '🌐' },
  { name: 'CSS3', category: 'Frontend', level: 80, icon: '🎨' },
  { name: 'JavaScript', category: 'Frontend', level: 75, icon: '⚡' },
  { name: 'React.js', category: 'Frontend', level: 70, icon: '⚛️' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 78, icon: '🎯' },

  // Backend (learning / basic usage)
  { name: 'Node.js', category: 'Backend', level: 65, icon: '🟢' },
  { name: 'Express.js', category: 'Backend', level: 60, icon: '🚂' },
  { name: 'PHP', category: 'Backend', level: 55, icon: '🐘' },

  // Database
  { name: 'MySQL', category: 'Database', level: 65, icon: '🗄️' },

  // Programming Fundamentals
  { name: 'C', category: 'Programming', level: 60, icon: '💻' },
  { name: 'C++', category: 'Programming', level: 60, icon: '⚙️' },
  { name: 'Python (Basic)', category: 'Programming', level: 55, icon: '🐍' },

  // Tools
  { name: 'Git & GitHub', category: 'Tools', level: 70, icon: '📦' },
  { name: 'Responsive Design', category: 'Tools', level: 80, icon: '📱' },
  { name: 'Windsurf (AI Dev Tool)', category: 'Tools', level: 65, icon: '🌊' }
], []);

  // Memoize categories
  const categories = useMemo(() => [
    'Frontend',
    'Backend',
    'Database',
    'Programming',
    'Tools'
  ], []);

  const categoryColors = useMemo(() => ({
    Frontend: 'from-blue-400 to-cyan-400',
    Backend: 'from-green-400 to-emerald-400',
    Database: 'from-purple-400 to-pink-400',
    Programming: 'from-indigo-400 to-purple-400',
    Tools: 'from-gray-400 to-slate-400',
  }), []);

  // Memoize SkillCard component
  const SkillCard = React.memo(({ skill, index }) => {
    const shouldReduce = shouldReduceMotion();
    
    return (
      <motion.div
        variants={shouldReduce ? {} : cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: shouldReduce ? 0 : 0.3, delay: shouldReduce ? 0 : index * 0.05, ease: "easeOut" }}
        whileHover={{ y: shouldReduce ? 0 : -2, scale: shouldReduce ? 1 : 1.02 }}
        className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
      >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="text-white font-medium">{skill.name}</span>
          <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden mb-3">
        <motion.div
          variants={shouldReduce ? {} : progressVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: shouldReduce ? 0 : 0.4, delay: shouldReduce ? 0 : 0.3 + index * 0.05, ease: "easeOut" }}
          style={{ '--progress': `${skill.level}%` }}
          className={`h-full bg-gradient-to-r ${categoryColors[skill.category]} rounded-full`}
        />
      </div>
      
      {/* Category Badge */}
      <div className="absolute top-2 right-2">
        <span className={`px-2 py-1 bg-gradient-to-r ${categoryColors[skill.category]} text-white text-xs font-medium rounded-full opacity-80`}>
          {skill.category}
        </span>
      </div>
    </motion.div>
    );
  });

  return (
    <section id="skills" className="section-padding section-light section-divider">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          variants={shouldReduceMotion() ? {} : cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: shouldReduceMotion() ? 0 : 0.4, ease: "easeOut" }}
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
            Technical Skills
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
          </div>
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive expertise across the full stack development ecosystem, 
            from modern frontend frameworks to scalable backend architectures and cloud deployment.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-r ${categoryColors[category]} rounded-full flex items-center justify-center`}>
                <span className="text-white text-lg font-bold">
                  {category.charAt(0)}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-1">{category}</h3>
              <p className="text-gray-400 text-sm">
                {skills.filter(s => s.category === category).length} technologies
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Skills;
