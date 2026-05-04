import { useScrollAnimation } from './useScrollAnimation';
import { fadeInUpVariants } from './useScrollAnimation';

export const useTextReveal = (text = '', stagger = 0.05) => {
  const { ref, controls } = useScrollAnimation();
  
  // Split text into words
  const words = text.split(' ').filter(word => word.length > 0);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: 'blur(4px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return { 
    ref, 
    controls, 
    words, 
    containerVariants, 
    wordVariants 
  };
};
