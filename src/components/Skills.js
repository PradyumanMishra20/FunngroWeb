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
  Frontend: 'from-[#6F7758] to-[#8A9271]',
  Backend: 'from-[#7A684E] to-[#B08A3E]',
  Database: 'from-[#8C7B6A] to-[#B08A3E]',
  Programming: 'from-[#5F6650] to-[#7A684E]',
  Tools: 'from-[#8B857B] to-[#A39B8F]',
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
        className="group relative bg-background-secondary border border-black/5 rounded-4xl p-7 hover:-translate-y-1 hover:shadow-editorial transition-all duration-500"
      >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
         <span className="text-text-primary font-medium tracking-tight">{skill.name}</span>
<span className="text-accent-gold text-sm font-semibold">{skill.level}%</span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="h-1.5 bg-black/5 rounded-full overflow-hidden mb-4">
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
        <span className={`px-3 py-1 bg-gradient-to-r ${categoryColors[skill.category]} text-white text-[10px] tracking-[0.12em] uppercase rounded-full`}>
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
            className="font-display text-heading-1 text-text-primary mb-6 leading-tight"
            style={{
  fontFamily: "'Instrument Serif', serif",
  fontWeight: "400",
  letterSpacing: "-0.03em",
}}
          >
            Skills I'm Building
          </h2>
         <motion.div
  className="w-20 h-px bg-accent-gold/50 mx-auto mb-8"
  initial={{ width: 0, opacity: 0 }}
  whileInView={{ width: 80, opacity: 1 }}
  transition={{ duration: 1 }}
/>
          <p className="text-text-secondary max-w-2xl mx-auto text-body-large leading-relaxed">
            Skills I'm currently using and improving through real projects, 
            focused on clean code and practical problem-solving.
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
              className="bg-background-secondary border border-black/5 rounded-3xl p-6 text-center hover:shadow-editorial transition-all duration-500"
            >
              <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-r ${categoryColors[category]} rounded-full flex items-center justify-center`}>
                <span className="text-white text-lg font-bold">
                  {category.charAt(0)}
                </span>
              </div>
              <h3 className="text-text-primary font-medium mb-1">{category}</h3>
<p className="text-text-muted text-sm">
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
