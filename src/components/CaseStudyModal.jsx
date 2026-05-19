import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudyModal = ({ isOpen, onClose, caseStudy }) => {
  // Debug: Log the received caseStudy data
  console.log('CaseStudyModal received caseStudy:', caseStudy);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Handle ESC key
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 bg-dark-primary/55 backdrop-blur-soft z-50"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth feel
              }}
              className="relative w-full max-w-5xl bg-background-primary text-text-primary rounded-5xl border border-black/5 shadow-cinematic my-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background-secondary/90 border border-black/5 text-text-secondary hover:text-text-primary transition-all duration-500 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg 
                  className="w-5 h-5 transition-colors"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Modal Content */}
              <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
                {/* Header Section */}
                <div className="px-8 pt-8 pb-6 border-b border-black/5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h1 className="font-display text-display-3 text-text-primary mb-4 leading-none">
                      {caseStudy?.title || 'Project'}
                    </h1>
                    <p className="text-body-large text-text-secondary max-w-3xl">
                      {caseStudy?.shortDescription || ''}
                    </p>
                  </motion.div>
                </div>

                {/* Hero Preview */}
                <div className="px-8 py-6 border-b border-black/5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative overflow-hidden rounded-4xl bg-background-secondary border border-black/5 shadow-editorial"
                  >
                    {caseStudy?.heroImage ? (
                      <img
                        src={caseStudy.heroImage}
                        alt={caseStudy?.title || 'Project'}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-48 bg-background-tertiary flex items-center justify-center text-text-muted">
                        No image available
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Project Overview */}
                <div className="px-8 py-6 border-b border-black/5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-8"
                  >
                    {caseStudy?.problem && (
                      <div>
                        <h3 className="font-display text-heading-3 text-text-primary mb-4">The Problem</h3>
                        <p className="text-body text-text-secondary leading-relaxed">{caseStudy.problem}</p>
                      </div>
                    )}

                    {caseStudy?.solution && (
                      <div>
                        <h3 className="font-display text-heading-3 text-text-primary mb-4">The Solution</h3>
                        <p className="text-body text-text-secondary leading-relaxed">{caseStudy.solution}</p>
                      </div>
                    )}

                    {caseStudy?.outcome && (
                      <div>
                        <h3 className="font-display text-heading-3 text-text-primary mb-4">The Outcome</h3>
                        <p className="text-body text-text-secondary leading-relaxed">{caseStudy.outcome}</p>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Tech Stack */}
                <div className="px-8 py-6 border-b border-black/5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="font-display text-heading-3 text-text-primary mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy?.techStack?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-background-secondary border border-black/5 rounded-full text-text-secondary text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Key Features */}
                <div className="px-8 py-6 border-b border-black/5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="font-display text-heading-3 text-text-primary mb-4">Key Features</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {caseStudy?.keyFeatures?.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-5 bg-background-secondary/70 rounded-2xl border border-black/5"
                        >
                          <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"/>
                          <p className="text-body text-text-secondary leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Challenges (Optional) */}
                {caseStudy.challenges && (
                  <div className="px-8 py-6 border-b border-white/10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="font-display text-heading-3 text-text-primary mb-4">Challenges Faced</h3>
                      <p className="text-body text-text-secondary leading-relaxed">{caseStudy.challenges}</p>
                    </motion.div>
                  </div>
                )}

                {/* Results/Metrics (Optional) */}
                {caseStudy.results && (
                  <div className="px-8 py-6 border-b border-white/10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="font-display text-heading-3 text-text-primary mb-4">Results & Metrics</h3>
                      <p className="text-body text-text-secondary leading-relaxed">{caseStudy.results}</p>
                    </motion.div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="px-8 py-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    {caseStudy.liveDemo && (
                      <motion.a
                        href={caseStudy.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-dark-primary text-text-inverse font-medium rounded-full transition-all duration-500 text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>Live Demo</span>
                        </span>
                      </motion.a>
                    )}

                    {caseStudy?.github && (
                      <motion.a
                        href={caseStudy.github}
                        target="_blank"
                        rel="noopener noreferrer"
                       className="flex-1 px-6 py-3 bg-background-secondary border border-black/5 text-text-primary font-medium rounded-full transition-all duration-500 text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          <span>View Code</span>
                        </span>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
