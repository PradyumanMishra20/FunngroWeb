import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  const reasons = [
    {
      title: "Clean Code",
      description:
        "I build structured frontend systems with maintainability, scalability, and clarity in mind.",
      icon: "✦",
      features: [
        "Component-driven architecture",
        "Readable code structure",
        "Modern React practices",
      ],
    },
    {
      title: "Refined Frontend",
      description:
        "I focus on interfaces that feel smooth, minimal, responsive, and visually balanced.",
      icon: "◌",
      features: [
        "Responsive layouts",
        "Editorial visual systems",
        "Motion with purpose",
      ],
    },
    {
      title: "Fast Iteration",
      description:
        "I move quickly, improve continuously, and adapt fast while keeping the quality consistent.",
      icon: "↗",
      features: [
        "Rapid implementation",
        "Continuous improvement",
        "Hands-on problem solving",
      ],
    },
    {
      title: "Reliable Communication",
      description:
        "Clear updates, realistic timelines, and transparent collaboration throughout the process.",
      icon: "⌁",
      features: [
        "Clear communication",
        "Consistent updates",
        "Collaborative workflow",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Understand",
      description:
        "Understanding the problem, requirements, and overall direction before touching the design or code.",
    },
    {
      step: "02",
      title: "Structure",
      description:
        "Creating a clean frontend structure with thoughtful layout, hierarchy, and interaction flow.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "Developing responsive, scalable components with refined motion and polished UI behavior.",
    },
    {
      step: "04",
      title: "Refine",
      description:
        "Testing, improving details, optimizing performance, and polishing the overall experience.",
    },
  ];

  return (
    <section
      id="why-choose-me"
      className="section-padding section-light section-divider relative overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent-gold/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-accent-olive/5 blur-[140px] rounded-full" />
      </div>

      <div className="container-tight relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-ui uppercase tracking-[0.28em] text-text-muted mb-6">
            Why Choose Me
          </p>

          <h2 className="font-display text-heading-1 text-text-primary leading-[0.95] mb-8 max-w-5xl mx-auto">
            Thoughtful frontend systems with a refined visual approach.
          </h2>

          <motion.div
            className="w-20 h-px bg-accent-gold/40 mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 80, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
          />

          <p className="text-body-large text-text-secondary max-w-3xl mx-auto mt-8 leading-relaxed">
            I focus on building modern interfaces that feel clean, intentional,
            responsive, and easy to use without unnecessary complexity.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-28">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-background-secondary border border-black/5 rounded-5xl shadow-editorial transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)]" />

              <div className="relative z-10 p-8 sm:p-10">
                <div className="flex items-start justify-between mb-10">
                  <div className="w-14 h-14 rounded-full bg-background-tertiary border border-black/5 flex items-center justify-center">
                    <span className="text-xl text-accent-gold">
                      {reason.icon}
                    </span>
                  </div>

                  <motion.div
                    className="w-12 h-px bg-accent-gold/30 mt-7"
                    whileHover={{ width: 72 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <h3 className="font-display text-3xl text-text-primary mb-4 leading-tight">
                  {reason.title}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-8">
                  {reason.description}
                </p>

                <ul className="space-y-3">
                  {reason.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-text-muted"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-28"
        >
          <div className="text-center mb-16">
            <p className="text-ui uppercase tracking-[0.24em] text-text-muted mb-5">
              Process
            </p>

            <h3 className="font-display text-heading-2 text-text-primary mb-6">
              A clean and structured workflow.
            </h3>

            <div className="w-20 h-px bg-accent-gold/40 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.15,
                }}
                whileHover={{
                  y: -6,
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-background-secondary border border-black/5 rounded-5xl shadow-editorial transition-all duration-700 group-hover:-translate-y-1" />

                <div className="relative z-10 p-8 sm:p-10">
                  <div className="flex items-center justify-between mb-12">
                    <div className="w-14 h-14 rounded-full bg-background-tertiary border border-black/5 flex items-center justify-center">
                      <span className="text-sm tracking-wide text-accent-gold font-medium">
                        {item.step}
                      </span>
                    </div>

                    <div className="w-10 h-px bg-accent-gold/30" />
                  </div>

                  <h4 className="font-display text-2xl text-text-primary mb-4">
                    {item.title}
                  </h4>

                  <p className="text-text-secondary leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{
            y: -2,
            transition: { duration: 0.8 },
          }}
          className="bg-background-secondary/80 border border-black/5 rounded-5xl p-10 sm:p-14 text-center shadow-editorial mb-20"
        >
          <blockquote className="font-display text-2xl sm:text-3xl italic text-text-secondary leading-relaxed max-w-4xl mx-auto">
            "Good frontend work is not about adding more. It is about removing
            friction until the experience feels effortless."
          </blockquote>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden bg-background-secondary border border-black/5 rounded-5xl shadow-editorial p-10 sm:p-14 text-center"
        >
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.2),transparent_60%)]" />
          </div>

          <div className="relative z-10">
            <p className="text-ui uppercase tracking-[0.24em] text-text-muted mb-6">
              Collaboration
            </p>

            <h3 className="font-display text-4xl sm:text-5xl text-text-primary mb-6 leading-tight">
              Ready to build something refined?
            </h3>

            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              Clean structure, modern frontend systems, thoughtful interaction,
              and a polished visual experience from start to finish.
            </p>

            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');

                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent-olive text-white rounded-full transition-all duration-500 hover:bg-accent-gold"
            >
              <span>Start a Project</span>

              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
