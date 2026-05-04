import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    // Frontend
    { name: 'React', category: 'Frontend', level: 95, icon: '⚛️' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 92, icon: '🎨' },
    { name: 'Framer Motion', category: 'Frontend', level: 88, icon: '🎬' },
    { name: 'HTML5', category: 'Frontend', level: 95, icon: '�' },
    { name: 'CSS3', category: 'Frontend', level: 95, icon: '🎨' },
    { name: 'JavaScript', category: 'Frontend', level: 92, icon: '⚡' },
    { name: 'React Router', category: 'Frontend', level: 85, icon: '�️' },
    
    // Backend
    { name: 'Node.js', category: 'Backend', level: 90, icon: '�' },
    { name: 'Express.js', category: 'Backend', level: 88, icon: '🚂' },
    { name: 'JWT Authentication', category: 'Backend', level: 85, icon: '�' },
    
    // Database
    { name: 'MySQL', category: 'Database', level: 82, icon: '�' },
    
    // APIs & Services
    { name: 'OpenAI API', category: 'APIs', level: 82, icon: '🤖' },
    { name: 'Stripe', category: 'APIs', level: 85, icon: '💳' },
    { name: 'Nodemailer', category: 'APIs', level: 80, icon: '�' },
    { name: 'Cloudinary', category: 'APIs', level: 80, icon: '☁️' },
    { name: 'Twilio', category: 'APIs', level: 78, icon: '📱' },
    { name: 'Firebase', category: 'APIs', level: 82, icon: '�' },
    
    // Tools & Others
    { name: 'Git', category: 'Tools', level: 95, icon: '📦' },
    { name: 'CSS Animations', category: 'Tools', level: 88, icon: '✨' },
    { name: 'Flexbox', category: 'Tools', level: 92, icon: '�' },
    { name: 'Grid', category: 'Tools', level: 90, icon: '⚡' },
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'APIs', 'Tools'];
  const categoryColors = {
    Frontend: 'from-blue-500 to-cyan-500',
    Backend: 'from-green-500 to-emerald-500',
    Database: 'from-purple-500 to-pink-500',
    APIs: 'from-orange-500 to-red-500',
    Tools: 'from-gray-500 to-slate-500',
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
          <span className="text-white font-medium">{skill.name}</span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
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

  return (
    <section id="skills" className="section-padding section-light section-divider">
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
};

export default Skills;
