import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, slideInLeftVariants, slideInRightVariants, staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, controls } = useScrollAnimation();

   const skills = [
  { name: 'HTML/CSS', level: 85, color: 'from-orange-500 to-red-500' },
  { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600' },
  { name: 'React.js', level: 75, color: 'from-blue-500 to-cyan-500' },
  { name: 'Tailwind CSS', level: 80, color: 'from-cyan-500 to-blue-500' },
  { name: 'Git/GitHub', level: 70, color: 'from-gray-500 to-gray-700' },
  { name: 'Basic Node.js', level: 60, color: 'from-green-500 to-emerald-500' }
];

  const stats = [
    { number: '5+', label: 'Projects Built' },
    { number: 'Strong', label: 'Focus on Frontend Development' },
    { number: 'Consistent', label: 'Learning & Iteration' }
  ];

  return (
    <section id="about" className="section-padding section-light section-divider">
      <div className="container-tight" ref={ref}>
        {/* Section Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-20"
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
            About Me
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Main Content with Photo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Photo & Personal Info */}
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Photo */}
            <div className="relative group">
              <motion.div
                className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate web developer focused on creating modern, responsive applications that solve real problems. 
                I love turning ideas into functional products that users enjoy interacting with.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
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
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={staggerItemVariants}
                  className="text-center"
                >
                  <motion.div 
                    className="text-3xl sm:text-4xl font-bold text-white mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-400">
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
            <h3 
                className="text-2xl sm:text-3xl font-bold mb-8 leading-tight"
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
                    <span className="text-white font-medium">{skill.name}</span>
                    <motion.span 
                      className="text-gray-400 text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
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
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center"
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
        >
          <blockquote className="text-xl text-gray-300 italic max-w-3xl mx-auto">
            "I build clean, functional web apps that solve real problems and deliver a smooth user experience."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
