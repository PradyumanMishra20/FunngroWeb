import { useState, useRef, useEffect } from 'react';

export const useCardTilt = (maxTilt = 15) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * maxTilt;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * maxTilt;

    setTransform({ 
      rotateX: Math.max(-maxTilt, Math.min(maxTilt, rotateX)),
      rotateY: Math.max(-maxTilt, Math.min(maxTilt, rotateY)),
      scale: 1.02 
    });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt]);

  return { ref, transform };
};
