import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return { ref, controls };
};

// Premium animation variants with consistent timing
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Button hover variants
export const buttonHoverVariants = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// Card hover variants
export const cardHoverVariants = {
  hover: { 
    y: -5,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// Navbar variants
export const navbarVariants = {
  hidden: { y: -100 },
  visible: { 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};
