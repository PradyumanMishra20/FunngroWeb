import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', 'Web Design', 'UI/UX', 'Mobile Apps', 'Strategy'];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      category: 'Web Design',
      description: 'Complete overhaul of an outdated e-commerce platform, resulting in 40% increase in conversion rates and improved user experience.',
      results: ['42% Conversion Increase', '68% Reduction in Cart Abandonment', '3.2x Mobile Revenue Growth'],
      tech: ['Next.js', 'Shopify Plus', 'Stripe', 'Redis'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format&webp',
      imageAlt: 'E-commerce platform with product grid and checkout interface',
      liveDemo: 'https://example-ecommerce.com',
      github: 'https://github.com/example/ecommerce-platform',
      featured: true,
    },
    {
      id: 2,
      title: 'SaaS Dashboard Overhaul',
      category: 'UI/UX',
      description: 'Modern dashboard design for a B2B SaaS platform with complex data visualization needs.',
      results: ['55% Reduction in Support Tickets', '28% Improvement in User Retention'],
      tech: ['React', 'D3.js', 'WebSocket', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&webp',
      imageAlt: 'Analytics dashboard with charts and data visualization',
      liveDemo: 'https://example-saas.com',
      github: 'https://github.com/example/saas-dashboard',
      featured: false,
    },
    {
      id: 3,
      title: 'Multi-Location Service Platform',
      category: 'Mobile Apps',
      description: 'Comprehensive service management platform connecting customers, dispatchers, and field technicians.',
      results: ['47% Increase in Daily Appointments', '63% Improvement in On-Time Arrival'],
      tech: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format&webp',
      imageAlt: 'Mobile app interface for service management',
      liveDemo: 'https://example-service.com',
      github: 'https://github.com/example/service-platform',
      featured: false,
    },
    {
      id: 4,
      title: 'Brand Strategy & Website',
      category: 'Strategy',
      description: 'Complete brand identity and website redesign for a growing tech startup.',
      results: ['35% Faster Time-to-Value', 'Won 3 enterprise deals'],
      tech: ['Next.js', 'Tailwind CSS', 'Figma', 'Adobe Creative Suite'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format&webp',
      imageAlt: 'Modern website design with brand elements',
      liveDemo: 'https://example-brand.com',
      github: 'https://github.com/example/brand-website',
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProject = projects.find(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const ProjectCard = ({ project, isFeatured = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -16, scale: 1.03 }}
      className={`project-card relative overflow-hidden bg-gradient-to-br from-background-secondary to-background-tertiary border border-accent-tertiary/20 rounded-2xl shadow-xl ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Optimized Project Image */}
      <div className={`relative ${isFeatured ? 'h-64 sm:h-80 md:h-96' : 'h-48 sm:h-56 md:h-64'} overflow-hidden group`}>
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
          loading="lazy"
          decoding="async"
        />
        
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary/90 via-background-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Mobile-Optimized Hover Overlay with CTAs */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="text-center space-y-4 sm:space-y-6 w-full max-w-xs sm:max-w-none">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-brand-primary hover:bg-gray-100 shadow-lg text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 min-h-[40px] sm:min-h-[44px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-1 sm:space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="hidden sm:inline">Live Demo</span>
                  <span className="sm:hidden">Demo</span>
                </span>
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-white text-white hover:bg-white hover:text-brand-primary text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 min-h-[40px] sm:min-h-[44px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-1 sm:space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="hidden sm:inline">GitHub</span>
                  <span className="sm:hidden">Code</span>
                </span>
              </motion.a>
            </div>
            <p className="text-white text-xs sm:text-sm max-w-xs mx-auto px-2">
              Explore the complete project and source code
            </p>
          </div>
        </div>

        {/* Mobile-Optimized Category Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
          <span className="px-2 sm:px-4 py-1 sm:py-2 bg-brand-primary/90 text-white text-xs font-bold rounded-full backdrop-blur-sm shadow-lg">
            {project.category}
          </span>
        </div>

        {/* Mobile-Optimized Featured Badge */}
        {isFeatured && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
            <span className="px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-brand-tertiary to-brand-secondary text-white text-xs font-bold rounded-full shadow-lg">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Mobile-Optimized Project Content */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-background-secondary to-background-tertiary">
        <div className="mb-4">
          <h3 className={`font-bold text-accent-primary mb-2 sm:mb-3 ${
            isFeatured ? 'text-lg sm:text-xl md:text-2xl' : 'text-base sm:text-lg md:text-xl'
          }`}>
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-accent-secondary leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Mobile-Optimized Tech Stack */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 bg-background-primary/50 text-accent-tertiary text-xs font-medium rounded-full border border-accent-tertiary/20 hover:border-brand-primary/50 hover:text-brand-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile-Optimized Results */}
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          {project.results.slice(0, isFeatured ? 3 : 2).map((result, index) => (
            <div key={index} className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex-shrink-0" />
              <span className="text-xs sm:text-sm text-accent-secondary font-medium">{result}</span>
            </div>
          ))}
        </div>

        {/* Mobile-Optimized Quick Actions */}
        <div className="flex gap-2 sm:gap-3">
          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tertiary text-xs sm:text-sm flex items-center justify-center space-x-1 sm:space-x-2 flex-1 py-2 sm:py-3 min-h-[36px] sm:min-h-[44px]"
            whileHover={{ x: 2 }}
          >
            <span className="hidden sm:inline">View Live</span>
            <span className="sm:hidden">Live</span>
            <svg className="w-3 h-3 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tertiary text-xs sm:text-sm flex items-center justify-center space-x-1 sm:space-x-2 flex-1 py-2 sm:py-3 min-h-[36px] sm:min-h-[44px]"
            whileHover={{ x: 2 }}
          >
            <span className="hidden sm:inline">View Code</span>
            <span className="sm:hidden">Code</span>
            <svg className="w-3 h-3 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background-primary via-background-secondary to-background-primary">
      <div className="container-custom" ref={ref}>
        {/* Enhanced Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block">
            <h2 className="text-heading-1 md:text-display-3 font-display font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent to-brand-primary rounded-full" />
              <div className="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full" />
              <div className="w-8 h-1 bg-gradient-to-r from-brand-secondary to-transparent rounded-full" />
            </div>
          </div>
          <p className="text-accent-secondary mt-6 max-w-2xl mx-auto text-lg">
            Explore my latest work showcasing modern web development, innovative design solutions, and measurable business results
          </p>
        </motion.div>

        {/* Mobile-Optimized Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-12 sm:mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg shadow-brand-primary/25 scale-105'
                  : 'bg-background-secondary text-accent-secondary border border-accent-tertiary/50 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/10 hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Project */}
        {featuredProject && activeFilter === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <ProjectCard project={featuredProject} isFeatured={true} />
          </motion.div>
        )}

        {/* Enhanced Regular Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {regularProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Enhanced View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            className="btn-secondary text-lg px-12 py-5 bg-gradient-to-r from-background-secondary to-background-tertiary border-2 border-brand-primary/30 hover:border-brand-primary hover:bg-brand-primary/10"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center space-x-3">
              <span>View All Projects</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
