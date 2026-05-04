import { useState, useEffect, useRef } from 'react';

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      // Only apply parallax when element is in viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffsetY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return { ref, offsetY };
};
