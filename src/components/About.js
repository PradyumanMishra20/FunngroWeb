import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, slideInLeftVariants, slideInRightVariants, staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, controls } = useScrollAnimation();

  const skills = [
  { name: 'HTML/CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 75 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Git/GitHub', level: 70 },
  { name: 'Basic Node.js', level: 60 }
];

  const stats = [
    { number: '5+', label: 'Projects Built' },
    { number: 'Strong', label: 'Focus on Frontend Development' },
    { number: 'Consistent', label: 'Learning & Iteration' }
  ];

  return (
    <section id="about" className="section-padding pt-8 section-light section-divider relative overflow-hidden">
      <div className="container-tight" ref={ref}>
        {/* Section Header */}
        <motion.div
  variants={fadeInUpVariants}
  initial="hidden"
  animate={controls}
  className="text-center mb-12"
>
  <p className="text-ui uppercase tracking-[0.24em] text-text-muted mb-6">
    Introduction
  </p>

 <h3 className="font-display text-heading-1 text-text-primary mb-6 leading-tight">
  Crafting thoughtful digital experiences.
</h3>

  <motion.div
    className="w-20 h-px bg-accent-gold/50 mx-auto"
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: 80, opacity: 1 }}
    transition={{ duration: 1.2, delay: 0.4 }}
  />
</motion.div>
        {/* Main Content with Photo */}
       <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-10 lg:mb-14 px-4 sm:px-0">
          {/* Photo & Personal Info */}
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Photo */}
            <div className="relative group">
              <motion.div
                className="relative w-72 h-80 mx-auto lg:mx-0 rounded-5xl overflow-hidden bg-background-tertiary border border-black/5 shadow-cinematic"
                whileHover={{ y: -4 }}
transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="/images/profilePic.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
                        <div class="text-white text-6xl font-bold">PM</div>
                      </div>
                    `;
                  }}
                />
                {/* Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </div>

            {/* Personal Bio */}
            <div className="text-center lg:text-left">
              <h3 
                className="text-2xl sm:text-3xl font-bold mb-4 leading-tight"
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
                About Me
              </h3>
              <p className="text-body-large text-text-secondary leading-relaxed mb-6">
                I'm a passionate web developer focused on creating modern, responsive applications that solve real problems. 
                I love turning ideas into functional products that users enjoy interacting with.
              </p>
              <p className="text-body-large text-text-secondary leading-relaxed">
                Currently exploring new technologies and building projects that challenge me to grow as a developer. 
                I believe in clean code, user-centered design, and continuous learning.
              </p>
            </div>

            {/* Stats */}
            <motion.div 
              variants={staggerContainerVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.4 }}
             className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={staggerItemVariants}
                  className="text-center"
                >
                  <motion.div 
                    className="font-display text-4xl sm:text-5xl font-medium text-accent-gold mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-ui uppercase tracking-[0.16em] text-text-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
           <h3 className="font-display text-heading-1 text-text-primary mb-10 leading-tight">
  Technologies That Deliver Results
</h3>
            <motion.div variants={staggerContainerVariants} initial="hidden" animate={controls}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={staggerItemVariants}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary font-medium">{skill.name}</span>
                    <motion.span 
                      className="text-text-muted text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                 <div className="h-1.5 bg-black/6 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-accent-olive to-accent-gold"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 1 }}
         className="bg-background-secondary/80 border border-black/5 rounded-5xl p-10 sm:p-14 text-center shadow-editorial"
whileHover={{ y: -2, transition: { duration: 0.8 } }}
        >
          <blockquote className="font-display text-2xl sm:text-3xl italic text-text-secondary leading-relaxed max-w-4xl mx-auto">
            "I build clean, functional web apps that solve real problems and deliver a smooth user experience."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
