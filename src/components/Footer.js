import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ onPrivacyClick, onTermsClick }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pradyuman-mishra-918902402',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/PradyumanMishra20',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.017c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.48 11.48 0 0112 6.844c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/918454894108',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.86 11.86 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.18 1.6 6.01L0 24l6.17-1.61A11.94 11.94 0 0012.01 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.49-8.52z" />
        </svg>
      ),
    },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#1B1D18] border-t border-[#F3EFE7]/[0.06]">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-12rem] right-[-12rem] w-[34rem] h-[34rem] rounded-full bg-[#B08A3E]/[0.025] blur-[180px]" />
        <div className="absolute bottom-[-12rem] left-[-12rem] w-[32rem] h-[32rem] rounded-full bg-[#7A7B4F]/[0.035] blur-[180px]" />
      </div>

      <div className="container-tight relative z-10">
        {/* Main Footer */}
        <div className="py-28 md:py-32 border-b border-[#F3EFE7]/[0.06]">
          <div className="grid lg:grid-cols-[1.4fr_0.7fr_0.9fr] gap-16 lg:gap-10">
            {/* Brand Side */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#7A786F] mb-6">
                Portfolio
              </p>

              <h2
                className="font-display text-[clamp(2.4rem,4vw,4.8rem)] leading-[0.94] tracking-[-0.035em] text-[#F3EFE7] max-w-xl mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Building digital experiences with warmth, clarity, and intention.
              </h2>

              <p className="text-[#B8B3A8] leading-[1.95] max-w-md text-base sm:text-lg">
                Focused on frontend systems, thoughtful interactions, and visual
                craftsmanship that feels calm and enduring.
              </p>

              <div className="flex items-center gap-4 mt-10">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.7 }}
                    className="w-12 h-12 rounded-full bg-[#2A2C26] border border-[#F3EFE7]/[0.05] flex items-center justify-center text-[#8F8B80] hover:text-[#F3EFE7] hover:bg-[#32342E] transition-all duration-700"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#7A786F] mb-8">
                Navigation
              </p>

              <ul className="space-y-5">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="group flex items-center gap-3 text-left text-[#B8B3A8] hover:text-[#F3EFE7] transition-all duration-700"
                    >
                      <span className="w-0 group-hover:w-5 h-px bg-[#B08A3E] transition-all duration-700" />
                      <span className="text-[15px] tracking-wide">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#7A786F] mb-8">
                Contact
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#7A786F] mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:pradyuman212@gmail.com"
                    className="text-[#B8B3A8] hover:text-[#F3EFE7] transition-colors duration-700 break-all"
                  >
                    pradyuman212@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#7A786F] mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+918454894108"
                    className="text-[#B8B3A8] hover:text-[#F3EFE7] transition-colors duration-700"
                  >
                    +91 8454894108
                  </a>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#7A786F] mb-2">
                    Location
                  </p>
                  <p className="text-[#B8B3A8]">Mumbai, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-sm text-[#7A786F] tracking-[0.03em]"
          >
            © {currentYear} Pradyuman Mishra. Designed and developed with care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-8"
          >
           <button
  onClick={onPrivacyClick}
  className="text-sm text-[#BEB8AA] hover:text-[#F3EFE7] transition-colors duration-700"
>
  Privacy Policy
</button>

<button
  onClick={onTermsClick}
  className="text-sm text-[#BEB8AA] hover:text-[#F3EFE7] transition-colors duration-700"
>
  Terms of Service
</button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
