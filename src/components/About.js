import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      number: '50+',
      label: 'Projects Delivered',
    },
    {
      number: '95%',
      label: 'Client Satisfaction',
    },
    {
      number: '$2.3M',
      label: 'Revenue Generated',
    },
  ];

  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="container-custom" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-1 md:text-display-3 font-display font-bold mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full" />
        </motion.div>

        {/* Mobile-Optimized Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Photo/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-xs sm:max-w-md mx-auto">
              {/* Placeholder for professional photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-accent-primary/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <span className="text-2xl sm:text-4xl font-bold text-accent-primary">JD</span>
                    </div>
                    <p className="text-accent-primary font-medium text-sm">Professional Photo</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-brand-tertiary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-brand-primary/20 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Mobile-Optimized Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-heading-2 font-semibold mb-3 sm:mb-4 text-accent-primary">
                Transforming Ideas Into Digital Reality
              </h3>
              <p className="text-sm sm:text-base lg:text-body text-accent-secondary leading-relaxed">
                For the past 8 years, I've been helping businesses unlock their digital potential through strategic web development and design. My approach combines technical expertise with a deep understanding of user behavior to create experiences that not only look beautiful but deliver real business results.
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base lg:text-body text-accent-secondary leading-relaxed">
                I specialize in working with startups and established companies looking to scale their digital presence. Whether it's building a custom e-commerce platform from scratch or redesigning a legacy system for better performance, I bring the same level of dedication and attention to detail to every project.
              </p>
            </div>

            {/* Mobile-Optimized Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-background-tertiary border-l-4 border-brand-primary p-4 sm:p-6 rounded-r-lg"
            >
              <blockquote className="text-sm sm:text-base lg:text-body text-accent-primary italic">
                "Great development isn't just about writing clean code—it's about understanding the business problem first and then building the most elegant solution. The best websites are invisible to users; they just work."
              </blockquote>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Achievement Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="achievement-metric bg-gradient-to-br from-background-secondary to-background-tertiary border border-accent-tertiary/30 rounded-2xl p-8 text-center card-hover"
            >
              <div className="achievement-number text-gradient text-4xl font-bold mb-3">
                {achievement.number}
              </div>
              <div className="achievement-label text-accent-secondary font-medium">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center"
        >
          <button
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-secondary text-lg px-8 py-4"
          >
            Learn More About My Process
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
