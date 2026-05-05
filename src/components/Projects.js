import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cardHoverVariants } from '../hooks/useScrollAnimation';
import CaseStudyModal from './CaseStudyModal';
import ImageGalleryModal from './ImageGalleryModal';
import { getProjectImagesById } from '../data/projectImages';

// Performance optimization: Animation configs outside component
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
};

// Performance detection
const isLowEndDevice = () => {
  return navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
};

const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || isLowEndDevice();
};

const ProjectCard = React.memo(({ project, isFeatured = false, onCaseStudyClick, onImageClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    viewport: { once: true }
  });
  
  // Memoize description to prevent unnecessary recalculations
  const description = React.useMemo(() => 
    project.description || `Project built using ${project.tech.join(', ')}`,
    [project.description, project.tech]
  );
  
  const shouldReduce = shouldReduceMotion();

  return (
    <motion.div 
      ref={ref}
      variants={shouldReduce ? {} : cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: shouldReduce ? 0 : 0.3, ease: "easeOut" }}
      whileHover={{ y: shouldReduce ? 0 : -3 }}
      className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20 ${isFeatured ? 'lg:col-span-2' : ''}`}
    >
      {/* Project Image */}
      <div className={`relative ${isFeatured ? 'h-48 sm:h-56 md:h-64' : 'h-40 sm:h-48 md:h-56'} overflow-hidden rounded-t-2xl`}>
        <div className="relative w-full h-full group cursor-pointer" onClick={() => onImageClick(project)}>
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            style={{ contentVisibility: 'auto' }}
            onError={(e) => {
              // Optimized fallback - replace image with styled div
              const fallback = document.createElement('div');
              fallback.className = 'flex items-center justify-center h-full text-white text-2xl font-bold bg-gradient-to-br from-slate-800 to-slate-700';
              fallback.textContent = project.title;
              e.target.parentNode.replaceChild(fallback, e.target);
            }}
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-t-2xl flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 px-4 py-2 rounded-full flex items-center space-x-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-white text-sm font-medium">View Gallery</span>
              </div>
            </div>
          </div>
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
                Featured
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{project.title}</h3>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <motion.button
            onClick={() => onCaseStudyClick(project)}
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-center"
            whileHover={{ scale: shouldReduce ? 1 : 1.02 }}
            whileTap={{ scale: shouldReduce ? 1 : 0.98 }}
          >
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Case Study</span>
            </span>
          </motion.button>
          
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 text-center"
              whileHover={{ scale: shouldReduce ? 1 : 1.02 }}
              whileTap={{ scale: shouldReduce ? 1 : 0.98 }}
            >
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Code</span>
              </span>
            </motion.a>
            
            {project.liveDemo && (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 text-center"
                whileHover={{ scale: shouldReduce ? 1 : 1.02 }}
                whileTap={{ scale: shouldReduce ? 1 : 0.98 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Demo</span>
                </span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const Projects = React.memo(() => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    viewport: { once: true }
  });

  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState(null);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = React.useState(false);
  const [isImageGalleryOpen, setIsImageGalleryOpen] = React.useState(false);

  // Memoize callback functions
  const handleCaseStudyClick = useCallback((project) => {
    setSelectedProject(project);
    setIsCaseStudyOpen(true);
  }, []);

  const handleImageClick = useCallback((project) => {
    setSelectedProject(project);
    setIsImageGalleryOpen(true);
  }, []);

  const closeCaseStudy = useCallback(() => {
    setIsCaseStudyOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  }, []);

  const closeImageGallery = useCallback(() => {
    setIsImageGalleryOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  }, []);

  // Memoize projects data
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'proposalGen',
      description: 'A web app that helps generate structured proposals using AI to save time and improve consistency.',
      tech: ['React', 'Node.js', 'AI/ML'],
      image: '/images/proposalGen.png',
      imageAlt: 'AI-powered proposal generation interface',
      github: 'https://github.com/pradyumanmishra/proposalGen',
      featured: true,
    },
    {
      id: 2,
      title: 'noteease-website',
      description: 'A web app for students to request and receive handwritten or digital notes with basic order and email handling.',
      tech: ['React', 'Node.js', 'Email Service'],
      image: '/images/noteease_homePage_.png',
      imageAlt: 'Student notes request platform interface',
      github: 'https://github.com/pradyumanmishra/noteease-website',
      featured: true,
    },
    {
      id: 3,
      title: 'teenlancer',
      description: 'A platform connecting students with tutors for note sharing and academic collaboration.',
      tech: ['React', 'Node.js', 'UI/UX Design'],
      image: '/images/teenlancer_homepage.png',
      imageAlt: 'Teen freelancing platform interface',
      github: 'https://github.com/pradyumanmishra/teenlancer',
      featured: true,
    },
    {
      id: 4,
      title: 'FunngroWeb',
      description: 'A responsive portfolio website built to showcase projects and skills with a clean and simple UI.',
      tech: ['React', 'CSS', 'JavaScript'],
      image: '/images/funngroWeb_home.png',
      imageAlt: 'Portfolio website showcase',
      github: 'https://github.com/pradyumanmishra/FunngroWeb',
      featured: false,
    },
  ], []);

  return (
    <section id="projects" className="pt-2 sm:pt-4 md:pt-6 lg:pt-8 pb-0 sm:pb-1 md:pb-2 lg:pb-2 section-dark section-divider">
      <div className="container-tight" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
            These Are Some of My Projects
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
          </div>
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            A collection of projects I’ve built to solve real problems and improve user experience.
          </p>
        </motion.div>

        {/* Projects Grid - 2-2-1 Layout Pattern */}
        <div className="space-y-8 mb-16">
          {/* First Row - 2 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isFeatured={false}
                onCaseStudyClick={handleCaseStudyClick}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
          
          {/* Second Row - 2 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(2, 4).map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isFeatured={false}
                onCaseStudyClick={handleCaseStudyClick}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
          
          {/* Third Row - 1 Full Width Project */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {projects.slice(4, 5).map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isFeatured={true}
                onCaseStudyClick={handleCaseStudyClick}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>

              </div>
      
      {/* Case Study Modal */}
      <CaseStudyModal 
        isOpen={isCaseStudyOpen}
        onClose={closeCaseStudy}
        caseStudy={selectedProject}
      />

      {/* Image Gallery Modal */}
      <ImageGalleryModal 
        isOpen={isImageGalleryOpen}
        onClose={closeImageGallery}
        project={selectedProject}
        images={selectedProject ? getProjectImagesById(selectedProject.id)?.images : []}
      />
    </section>
  );
});

export default Projects;
