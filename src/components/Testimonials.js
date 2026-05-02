import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featuredTestimonial = {
    id: 1,
    quote: "We hired [Developer Name] for what we thought was a simple website redesign, but it turned into a complete business transformation. Our online revenue doubled within six months, and customers constantly comment on how easy our site is to use. What impressed me most was how they took the time to understand our business model and built solutions we didn't even know we needed.",
    author: "Sarah Chen",
    title: "CEO",
    company: "TechStyle Apparel",
    avatar: "SC",
    project: "E-commerce Platform Redesign",
  };

  const testimonials = [
    {
      id: 2,
      quote: "Working with [Developer Name] was completely different from any developer we've hired before. They didn't just code what we asked for—they challenged our assumptions and suggested better solutions. The dashboard they built for us has become a key selling point in our sales pitch.",
      author: "Marcus Rodriguez",
      title: "CTO",
      company: "DataFlow Analytics",
      avatar: "MR",
    },
    {
      id: 3,
      quote: "Our previous developer left us with a mess of code and a site that crashed constantly. [Developer Name] came in, cleaned everything up, and built a system that actually scales. We've grown 300% in the past year and the site has never gone down.",
      author: "Jennifer Park",
      title: "Founder",
      company: "GlowUp Skincare",
      avatar: "JP",
    },
    {
      id: 4,
      quote: "The attention to detail is incredible. Every pixel is perfect, every interaction feels smooth, and the performance is outstanding. Our bounce rate dropped by 40% immediately after the launch.",
      author: "David Kim",
      title: "Marketing Director",
      company: "Apex Financial",
      avatar: "DK",
    },
  ];

  const companyLogos = [
    { name: "TechStyle Apparel", initials: "TA" },
    { name: "DataFlow Analytics", initials: "DA" },
    { name: "GlowUp Skincare", initials: "GS" },
    { name: "Apex Financial", initials: "AF" },
    { name: "InnovateCo", initials: "IC" },
    { name: "GlobalBrand", initials: "GB" },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background-secondary">
      <div className="container-custom" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-1 md:text-display-3 font-display font-bold mb-4">
            Client Success Stories
          </h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full" />
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="testimonial-card max-w-4xl mx-auto bg-gradient-to-br from-background-secondary to-background-tertiary border-0 shadow-2xl">
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8">
              {/* Quote Content */}
              <div className="md:col-span-8">
                <div className="mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-base sm:text-lg lg:text-body-large text-accent-primary mb-6 sm:mb-8 leading-relaxed font-medium">
                  "{featuredTestimonial.quote}"
                </blockquote>
                
                {/* Production-Ready Project Link */}
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-tertiary mb-4 sm:mb-6 flex items-center space-x-2 text-sm sm:text-base will-change-transform"
                  whileHover={{ x: 5 }}
                >
                  <span>View This Project</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>

                {/* Optimized Client Info */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg sm:text-xl font-bold text-white">
                      {featuredTestimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-accent-primary text-base sm:text-lg">
                      {featuredTestimonial.author}
                    </div>
                    <div className="text-accent-secondary text-sm sm:text-base">
                      {featuredTestimonial.title} at {featuredTestimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Optimized Company Logo/Visual */}
              <div className="md:col-span-4 flex justify-center">
                <motion.div 
                  className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-background-primary to-background-secondary rounded-2xl flex items-center justify-center border border-accent-tertiary/30 shadow-xl card-hover will-change-transform"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gradient mb-1">
                      {featuredTestimonial.company.split(' ')[0]}
                    </div>
                    <div className="text-xs text-accent-tertiary">Logo</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="testimonial-card p-6"
              >
                <blockquote className="text-body text-accent-primary mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-accent-primary text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-accent-tertiary text-xs">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Logo Wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-heading-4 font-semibold text-accent-primary mb-2">
              Trusted by Leading Companies
            </h3>
            <p className="text-accent-secondary">
              I've had the privilege of working with amazing brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companyLogos.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                className="flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-background-tertiary rounded-lg flex items-center justify-center border border-accent-tertiary hover:border-brand-primary transition-colors duration-200">
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent-secondary">
                      {company.initials}
                    </div>
                    <div className="text-xs text-accent-tertiary">Logo</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
