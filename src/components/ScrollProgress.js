import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <>
      {/* Subtle warm track */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#E6E1D7]/35 z-50 pointer-events-none" />

      {/* Cinematic progress line */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] origin-left z-[60] pointer-events-none"
        style={{
          scaleX: scrollProgress / 100,
          width: '100%',
          background:
            'linear-gradient(90deg, #B08A3E 0%, #A27B36 55%, #7A7B4F 100%)',
          boxShadow:
            '0 0 10px rgba(176, 138, 62, 0.18), 0 0 24px rgba(122, 123, 79, 0.08)',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Soft highlight bloom */}
      <motion.div
        className="fixed top-0 left-0 h-[4px] origin-left z-[55] pointer-events-none blur-sm opacity-50"
        style={{
          scaleX: scrollProgress / 100,
          width: '100%',
          background:
            'linear-gradient(90deg, rgba(176,138,62,0.45) 0%, rgba(122,123,79,0.25) 100%)',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </>
  );
};

export default ScrollProgress;