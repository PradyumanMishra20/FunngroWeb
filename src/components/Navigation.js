import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMagneticButton } from '../hooks/useMagneticButton';

const Navigation = ({ isScrolled }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { ref: magneticRef, position: magneticPosition } = useMagneticButton(0.2);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        name: item.name.toLowerCase(),
        element: document.querySelector(item.href),
      }));

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <img 
              src="/images/logo.png" 
              alt="Pradyuman Mishra Logo"
              className="h-12 w-auto max-w-[200px] object-contain"
            />
            <span 
              className="font-bold text-2xl"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              WEB DEVELOPER
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`font-medium transition-all duration-200 ${
                  activeSection === item.name.toLowerCase() 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection('#contact')}
            className="hidden lg:block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Hire Me
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-white touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          className="lg:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10"
        >
          <div className="py-6 px-4 space-y-3">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative block px-6 py-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 ${
                  activeSection === item.name.toLowerCase() ? 'text-blue-400 font-semibold bg-white/5' : ''
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={{ width: 0, left: '50%' }}
                  whileHover={{ width: '100%', left: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </motion.a>
            ))}
            <motion.button
              ref={magneticRef}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                x: magneticPosition.x,
                y: magneticPosition.y,
                transition: { type: "spring", stiffness: 150, damping: 15 }
              }}
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
