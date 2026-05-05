import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cardHoverVariants } from '../hooks/useScrollAnimation';
import { getCaseStudyById } from '../data/caseStudies';
import { getProjectImagesById } from '../data/projectImages';
import CaseStudyModal from './CaseStudyModal';
import ImageGalleryModal from './ImageGalleryModal';

const ProjectCard = ({ project, isFeatured = false, onCaseStudyClick, onImageClick }) => {
  const ref = React.useRef(null);
  
  // Fallback description if none exists
  const description = project.description || `Project built using ${project.tech.join(', ')}`;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      }}
      className={`group relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Project Image */}
      <div className={`relative ${isFeatured ? 'h-48 sm:h-56 md:h-64' : 'h-40 sm:h-48 md:h-56'} overflow-hidden rounded-t-2xl`}>
        <div className="relative w-full h-full group cursor-pointer" onClick={() => onImageClick(project)}>
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // Fallback to neutral background if image fails to load
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('bg-gradient-to-br', 'from-slate-800', 'to-slate-700');
              e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full text-white text-2xl font-bold">${project.title}</div>`;
            }}
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-t-2xl flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
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
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [isImageGalleryOpen, setIsImageGalleryOpen] = React.useState(false);

  const handleCaseStudyClick = (project) => {
    const caseStudy = getCaseStudyById(project.id);
    if (caseStudy) {
      setSelectedCaseStudy(caseStudy);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCaseStudy(null), 300);
  };

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setIsImageGalleryOpen(true);
  };

  const closeImageGallery = () => {
    setIsImageGalleryOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const projects = [
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
      description: 'A concept platform connecting teenagers with small freelance opportunities, focused on UI and usability.',
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
  ];

  return (
    <section id="projects" className="section-padding section-dark section-divider">
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
            These Are My Some Projects
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
          </div>
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Every project delivers measurable business results. My clients see increased revenue, 
            higher customer satisfaction, and streamlined operations that directly impact their bottom line.
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
        isOpen={isModalOpen}
        onClose={closeModal}
        caseStudy={selectedCaseStudy}
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
};

export default Projects;
