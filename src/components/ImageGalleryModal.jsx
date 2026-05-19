import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGalleryModal = ({ isOpen, onClose, project, images }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project || !images?.length) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Editorial Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#1A1816]/70 backdrop-blur-xl"
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-6 lg:px-10"
            onClick={onClose}
          >
            <div className="min-h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.98 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-7xl bg-background-primary border border-black/5 rounded-[2.5rem] shadow-[0_40px_120px_rgba(0,0,0,0.12)] overflow-hidden"
              >
                {/* Ambient Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[120px]" />
                  <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent-olive/5 rounded-full blur-[100px]" />
                </div>

                {/* Close */}
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-background-secondary border border-black/5 flex items-center justify-center text-text-secondary hover:text-text-primary transition-all duration-500"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>

                {/* Scroll Area */}
                <div className="max-h-[92vh] overflow-y-auto custom-scrollbar relative z-10">
                  {/* Header */}
                  <div className="px-8 sm:px-12 pt-12 sm:pt-14 pb-10 border-b border-black/5">
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.7 }}
                    >
                      <p className="text-ui uppercase tracking-[0.24em] text-text-muted mb-5">
                        Project Gallery
                      </p>

                      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-[0.95] max-w-4xl">
                        {project.title}
                      </h1>

                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 80, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="h-px bg-accent-gold/40 mt-8"
                      />

                      <p className="text-body-large text-text-secondary max-w-2xl mt-8 leading-relaxed">
                        A complete visual walkthrough of the project interface,
                        layouts, interactions, and overall frontend system.
                      </p>
                    </motion.div>
                  </div>

                  {/* Gallery Grid */}
                  <div className="px-8 sm:px-12 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                      {images.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.1 + index * 0.08,
                            duration: 0.7,
                          }}
                          whileHover={{ y: -6 }}
                          className="group relative"
                        >
                          <div className="absolute inset-0 bg-background-secondary border border-black/5 rounded-[2rem] shadow-editorial transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]" />

                          <div className="relative z-10 p-5">
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-[1.5rem] bg-background-tertiary border border-black/5 aspect-[16/10]">
                              <img
                                src={image.path}
                                alt={
                                  image.alt ||
                                  `${project.title} - ${image.name}`
                                }
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              />

                              {/* Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                              {/* Expand Button */}
                              <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(image.path, '_blank');
                                }}
                                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                              >
                                <svg
                                  className="w-4 h-4 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.8}
                                    d="M14 4h6m0 0v6m0-6L10 14"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.8}
                                    d="M5 9v10h10"
                                  />
                                </svg>
                              </motion.button>
                            </div>

                            {/* Info */}
                            <div className="pt-6 px-1">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="font-display text-2xl text-text-primary leading-tight">
                                  {image.name}
                                </h3>

                                <div className="w-10 h-px bg-accent-gold/30" />
                              </div>

                              <p className="text-text-secondary leading-relaxed text-sm">
                                {image.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-8 sm:px-12 py-10 border-t border-black/5">
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.7 }}
                      className="flex flex-col lg:flex-row items-center justify-between gap-6"
                    >
                      <div>
                        <p className="text-text-secondary">
                          {images.length} curated project views
                        </p>

                        <p className="text-sm text-text-muted mt-1">
                          Click any image to open it in full resolution.
                        </p>
                      </div>

                      <motion.button
                        onClick={onClose}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-accent-olive text-white rounded-full hover:bg-accent-gold transition-all duration-500"
                      >
                        <span>Close Gallery</span>

                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ImageGalleryModal;