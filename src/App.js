import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import WhyChooseMe from './components/WhyChooseMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { navbarVariants } from './hooks/useScrollAnimation';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Scroll to hero section on page load/reload
    const scrollToHero = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // Check if page was reloaded and scroll to hero
    if (window.performance && window.performance.navigation.type === 1) {
      // Page was reloaded
      setTimeout(scrollToHero, 100);
    } else if (!window.location.hash) {
      // Initial load with no hash, scroll to hero
      setTimeout(scrollToHero, 100);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-slate-950 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <ScrollProgress />
      <motion.div
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <Navigation isScrolled={isScrolled} />
      </motion.div>
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Testimonials />
        <WhyChooseMe />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
