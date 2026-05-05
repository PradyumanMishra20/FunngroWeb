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
  const headlineText = "I design and build responsive web applications that actually work in the real world.";
  const { ref: headlineRef, controls: headlineControls, words: headlineWords, containerVariants: headlineContainerVariants, wordVariants: headlineWordVariants } = useTextReveal(headlineText, 0.05);
  
  const subheadingText = "SaaS Platforms That Convert Visitors Into Customers";
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

  const codeSnippet = `const buildSaaS = () => {
  return {
    frontend: ['React', 'Next.js', 'TypeScript'],
    backend: ['Node.js', 'PostgreSQL', 'Redis'],
    features: ['AI Integration', 'Real-time Analytics'],
    result: 'High-converting web applications'
  }
};`;

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden section-medium">
      {/* Premium SaaS background with parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-purple-950"
        style={{
          x: mousePosition?.x * 20 || 0,
          y: (mousePosition?.y * 20 || 0) + (scrollY || 0) * 0.3
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-purple-900/30"
        style={{
          x: mousePosition?.x * 10 || 0,
          y: (mousePosition?.y * 10 || 0) + (scrollY || 0) * 0.5
        }}
      />
      
      {/* Animated gradient blobs with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[400px] max-h-[400px] bg-gradient-to-r from-blue-600/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse"
          style={{
            x: mousePosition?.x * 30 || 0,
            y: (mousePosition?.y * 30 || 0) + (scrollY || 0) * 0.2
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vw] max-w-[300px] max-h-[300px] bg-gradient-to-r from-purple-600/15 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            x: mousePosition?.x * 25 || 0,
            y: (mousePosition?.y * 25 || 0) + (scrollY || 0) * 0.4
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[40vw] h-[40vw] max-w-[250px] max-h-[250px] bg-gradient-to-r from-indigo-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"
          style={{
            x: mousePosition?.x * 15 || 0,
            y: (mousePosition?.y * 15 || 0) + (scrollY || 0) * 0.6
          }}
        />
        <motion.div 
          className="absolute -top-10 right-1/3 w-[25vw] h-[25vw] max-w-[150px] max-h-[150px] bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-full blur-3xl animate-pulse delay-1500"
          style={{
            x: mousePosition?.x * 35 || 0,
            y: (mousePosition?.y * 35 || 0) + (scrollY || 0) * 0.1
          }}
        />
      </div>

      {/* Code pattern overlay with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          x: mousePosition?.x * 5 || 0,
          y: (mousePosition?.y * 5 || 0) + (scrollY || 0) * 0.8
        }}
      />

      {/* Cursor glow effect */}
      {glowVisible && (
        <motion.div
          ref={glowRef}
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            left: (glowPosition?.x || 0) - 192,
            top: (glowPosition?.y || 0) - 192,
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
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
              <h1 
                className="text-center font-bold mb-6 leading-tight text-white"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: "700",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.2"
                }}
              >
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={headlineWordVariants}
                    className="inline-block mr-2"
                  >
                    {word}
                    {index === 6 && (
                      <span className="block text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {headlineWords.slice(7, 10).join(' ')}
                      </span>
                    )}
                  </motion.span>
                ))}
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
              <p className="text-xl sm:text-2xl text-blue-300 font-medium leading-relaxed">
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
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 text-lg overflow-hidden"
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
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100"
                  animate={{
                    x: isHovered1 ? [0, 100, 0] : 0,
                  }}
                  transition={{
                    x: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                />
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View My Work</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                ref={magneticRef2}
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-xl hover:-translate-y-1 text-lg overflow-hidden"
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
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100"
                  animate={{
                    x: isHovered2 ? [0, -100, 0] : 0,
                  }}
                  transition={{
                    x: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
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
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-gray-400 text-sm">Available for hire</span>
              </div>
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span className="text-gray-400 text-sm">1+ year experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-2 h-2 bg-purple-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span className="text-gray-400 text-sm">5+ projects delivered</span>
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
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Code window */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-white/5">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-gray-500 text-sm font-mono">buildSaaS.js</div>
                  <div className="w-16" />
                </div>
                
                {/* Code content */}
                <div className="p-6">
                  <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                    <code>
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400"> buildSaaS</span>
                      <span className="text-gray-400"> = () ={'>'} {'{'}</span>
                      <br />
                      <span className="ml-4 text-gray-400">return {'{'}</span>
                      <br />
                      <span className="ml-8 text-purple-400">frontend</span>
                      <span className="text-gray-400">: [</span>
                      <span className="text-green-400">'React'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-green-400">'Next.js'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-green-400">'TypeScript'</span>
                      <span className="text-gray-400">],</span>
                      <br />
                      <span className="ml-8 text-purple-400">backend</span>
                      <span className="text-gray-400">: [</span>
                      <span className="text-green-400">'Node.js'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-green-400">'PostgreSQL'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-green-400">'Redis'</span>
                      <span className="text-gray-400">],</span>
                      <br />
                      <span className="ml-8 text-purple-400">features</span>
                      <span className="text-gray-400">: [</span>
                      <span className="text-green-400">'AI Integration'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-green-400">'Real-time Analytics'</span>
                      <span className="text-gray-400">],</span>
                      <br />
                      <span className="ml-8 text-purple-400">result</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-green-400">'High-converting web applications'</span>
                      <br />
                      <span className="ml-4 text-gray-400">{'}'}</span>
                      <br />
                      <span className="text-gray-400">{'}'}</span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Floating elements around code */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-20 blur-xl animate-pulse delay-500" />
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-20 blur-xl animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>

        {/* Premium scroll indicator */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.9 }}
          className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 scroll-indicator-large-screen"
        >
          <motion.span 
            className="text-gray-500 text-sm font-medium tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SCROLL TO EXPLORE
          </motion.span>
          <motion.div 
            className="w-px h-20 bg-gradient-to-b from-blue-400 to-transparent"
            animate={{ height: [60, 80, 60] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Floating glass elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full blur-sm animate-pulse delay-500" />
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-cyan-400/30 rounded-full blur-sm animate-pulse delay-1000" />
      <div className="absolute bottom-40 right-10 w-4 h-4 bg-pink-400/30 rounded-full blur-sm animate-pulse delay-1500" />
    </section>
  );
};

export default Hero;
