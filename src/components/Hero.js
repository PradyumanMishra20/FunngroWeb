import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, slideInLeftVariants, slideInRightVariants, scaleInVariants, buttonHoverVariants } from '../hooks/useScrollAnimation';
import { useEnhancedMagneticButton } from '../hooks/useEnhancedMagneticButton';
import { useHeroParallax } from '../hooks/useHeroParallax';
import { useTextReveal } from '../hooks/useTextReveal';
import { useCursorGlow } from '../hooks/useCursorGlow';

const Hero = () => {
  const { ref, controls } = useScrollAnimation();
  const heroRef = React.useRef(null);
  const { containerRef, mousePosition, scrollY } = useHeroParallax();
  const { ref: magneticRef1, position: magneticPosition1, isHovered: isHovered1 } = useEnhancedMagneticButton(15, 0.3);
  const { ref: magneticRef2, position: magneticPosition2, isHovered: isHovered2 } = useEnhancedMagneticButton(15, 0.3);
  const { glowRef, glowPosition, isVisible: glowVisible } = useCursorGlow(heroRef);
  
  // Text reveal hooks
  const headlineText ="Building clean, functional web interfaces with real-world focus.";
  const { ref: headlineRef, controls: headlineControls, words: headlineWords, containerVariants: headlineContainerVariants, wordVariants: headlineWordVariants } = useTextReveal(headlineText, 0.05);
  
  const subheadingText = "Focused on creating practical solutions using modern web technologies.";
  const { ref: subheadingRef, controls: subheadingControls, words: subheadingWords, containerVariants: subheadingContainerVariants, wordVariants: subheadingWordVariants } = useTextReveal(subheadingText, 0.08);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 50;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  return (
   <section id="home" ref={heroRef} className="relative overflow-hidden section-light min-h-screen flex items-center pt-28 sm:pt-32 lg:pt-0 pb-32 lg:pb-40">
      {/* Premium SaaS background with parallax */}
      {/* Background */}
<div className="absolute inset-0 bg-background-primary" />
<div className="absolute inset-0 opacity-30">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-gold/10 blur-3xl rounded-full" />
</div>
      
      {/* Cursor glow effect */}
      {glowVisible && (
        <motion.div
          ref={glowRef}
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            left: (glowPosition?.x || 0) - 192,
            top: (glowPosition?.y || 0) - 192,
           background: 'radial-gradient(circle, rgba(176, 138, 62, 0.08) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

       <div ref={ref} className="container-custom relative z-10 mt-0 max-w-7xl mx-auto">
         <div className="grid min-[980px]:grid-cols-[1.1fr_0.9fr] gap-10 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Bold headline with text reveal */}
            <motion.div
              ref={headlineRef}
              variants={headlineContainerVariants}
              initial="hidden"
              animate={headlineControls}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="font-display text-heading-2 text-text-primary text-center lg:text-left mb-6 leading-tight">
               {headlineWords.map((word, index) => {
  const isHighlighted = index >= 6 && index <= 9;

  return (
    <motion.span
      key={index}
      variants={headlineWordVariants}
      className={
        isHighlighted
          ? "text-accent-gold font-semibold inline-block mr-2"
          : "inline-block mr-2"
      }
    >
      {word}
    </motion.span>
  );
})}
              </h1>
            </motion.div>

            {/* Subheading with text reveal */}
            <motion.div
              ref={subheadingRef}
              variants={subheadingContainerVariants}
              initial="hidden"
              animate={subheadingControls}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-body-large text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {subheadingWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={subheadingWordVariants}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              variants={scaleInVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <motion.button
                ref={magneticRef1}
                onClick={scrollToProjects}
                className="btn-primary relative overflow-hidden"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                animate={{
                  x: magneticPosition1?.x || 0,
                  y: magneticPosition1?.y || 0,
                  transition: { type: "spring", stiffness: 200, damping: 20 }
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-accent-olive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View My Work</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-olive to-accent-gold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                ref={magneticRef2}
                onClick={scrollToContact}
                className="btn-secondary relative overflow-hidden"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                animate={{
                  x: magneticPosition2?.x || 0,
                  y: magneticPosition2?.y || 0,
                  transition: { type: "spring", stiffness: 200, damping: 20 }
                }}
              >
                {/* Animated gradient background */}
                  <motion.div
                   className="absolute inset-0 bg-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Hire Me</span>
                </span>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-2 h-2 bg-accent-olive rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-text-muted text-sm">Available for hire</span>
              </div>
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-2 h-2 bg-accent-brass rounded-fulll"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span className="text-text-muted text-sm">Building real projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <motion.div 
                 className="w-2 h-2 bg-accent-brass rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span className="text-text-muted text-sm">Learning through practice</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Code Preview */}
          <motion.div
           ref={containerRef}
           variants={slideInRightVariants}
           initial="hidden"
           animate={controls}
           transition={{ delay: 0.4 }}
           className="hidden min-[980px]:block w-full max-w-[420px] lg:max-w-[520px]  xl:max-w-[600px] justify-self-end"
           >
            <div className="relative">
              {/* Code window */}
             <div className="bg-background-secondary/80 border border-black/5 rounded-5xl overflow-hidden shadow-editorial backdrop-blur-sm">
                {/* Window header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-text-secondary text-sm tracking-wide font-medium">
                    buildSaaS.js
                  </div>
                  <div className="w-16" />
                </div>
                
                {/* Code content */}
                <div className="p-8">
                  <pre className="text-[15px] text-text-secondary font-mono leading-8">
                    <code>
                      <span className="text-text-primary">const</span>
                      <span className="text-accent-brass"> buildSaaS</span>
                      <span className="text-text-muted"> = () ={'>'} {'{'}</span>
                      <br />
                      <span className="ml-4 text-text-muted">return {'{'}</span>
                      <br />
                      <span className="ml-8 text-text-primary">frontend</span>
                      <span className="text-text-muted">: [</span>
                      <span className="text-accent-gold">'React'</span>
                      <span className="text-text-muted">, </span>
                      <span className="text-accent-gold">'Next.js'</span>
                      <span className="text-text-muted">, </span>
                      <span className="text-accent-gold">'TypeScript'</span>
                      <span className="text-text-muted">],</span>
                      <br />
                      <span className="ml-8 text-text-primary">backend</span>
                      <span className="text-text-muted">: [</span>
                      <span className="text-accent-gold">'Node.js'</span>
                      <span className="text-text-muted">, </span>
                      <span className="text-accent-gold">'PostgreSQL'</span>
                      <span className="text-text-muted">, </span>
                      <span className="text-accent-gold">'Redis'</span>
                      <span className="text-text-muted">],</span>
                      <br />
                      <span className="ml-8 text-text-primary">features</span>
                      <span className="text-text-muted">: [</span>
                      <span className="text-accent-gold">'AI Integration'</span>
                      <span className="text-text-muted">, </span>
                      <span className="text-accent-gold">'Real-time Analytics'</span>
                      <span className="text-text-muted">],</span>
                      <br />
                      <span className="ml-8 text-text-primary">result</span>
                      <span className="text-text-muted">: </span>
                      <span className="text-accent-gold">'High-converting web applications'</span>
                      <br />
                      <span className="ml-4 text-text-muted">{'}'}</span>
                      <br />
                      <span className="text-text-muted">{'}'}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

       {/* Premium scroll indicator */}
<motion.div
  variants={fadeInUpVariants}
  initial="hidden"
  animate={controls}
  transition={{ delay: 0.9 }}
  className="absolute bottom-[-190px] left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 scroll-indicator-large-screen"
>
  <motion.span
    className="text-text-muted text-sm font-medium tracking-wide"
    animate={{ opacity: [0.5, 1, 0.5] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    SCROLL TO EXPLORE
  </motion.span>

{/* Scale the entire leaf instead of changing height */}
<motion.div
  animate={{
    y: [30, 40, 30],
    rotate: [-4, 4, -4],
    scaleY: [2.5, 2.5, 2.5], // Makes the leaf much taller
    scaleX: [1.2, 1.2, 1.2], // Slightly wider to keep proportions natural
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="w-14 origin-center mt-8"
>
  <svg
    viewBox="0 0 24 24"
    className="w-full h-auto"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Leaf body */}
    <path
      d="M12 2C6.2 4.8 3.2 9.5 4 14c0.8 4.5 4.2 8 8 8s7.2-3.5 8-8c0.8-4.5-2.2-9.2-8-12z"
      fill="#7A7B4F"
    />

    {/* Main vein */}
    <path
      d="M12 4V20"
      stroke="#E6E1D7"
      strokeWidth="1.3"
      strokeLinecap="round"
      opacity="0.65"
    />

    {/* Side vein */}
    <path
      d="M12 10C10 9 8 7.5 7 6"
      stroke="#E6E1D7"
      strokeWidth="0.9"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
</motion.div>
  {/* Stem line (kept minimal, matches scroll direction) */}
  <motion.div
    className="w-px h-20 bg-gradient-to-b from-accent-olive via-accent-olive/40 to-transparent"
    animate={{ height: [60, 85, 60] }}
    transition={{ duration: 2.5, repeat: Infinity }}
  />
</motion.div>
      </div>
    </section>
  );
};

export default Hero;
