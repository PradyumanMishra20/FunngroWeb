import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectHighlights = [
    {
      id: 1,
      title: "AI-Powered Proposal Generator",
      description: "Built a responsive web application with focus on clean UI and performance. Designed modern interfaces using React and Tailwind CSS.",
      github: "https://github.com/pradyumanmishra/proposalGen"
    },
    {
      id: 2,
      title: "Student Notes Platform", 
      description: "Developed full project from scratch including UI, structure, and logic. Focused on writing clean, maintainable, and scalable code.",
      github: "https://github.com/pradyumanmishra/noteease-website"
    },
    {
      id: 3,
      title: "Teen Freelancing Platform",
      description: "Created a concept platform focused on teen safety and skill development. Designed with responsive UI and modern React patterns.",
      github: "https://github.com/pradyumanmishra/teenlancer"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Built a custom portfolio website from scratch using modern React development practices with smooth animations and optimized performance.",
      github: "https://github.com/pradyumanmishra/FunngroWeb"
    }
  ];

  return (
    <section id="testimonials" className="section-padding-sm section-medium section-divider">
      <div className="container-tight" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
            Project Highlights
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            A look at what I've built and how I approach real problems.
          </p>
        </motion.div>

        {/* Project Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projectHighlights.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
              
              {/* View Project Button */}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>View Project</span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
