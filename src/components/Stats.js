import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollAnimation';
import {
  ArrowUpRight,
  Zap,
  Code2,
  TrendingUp
} from 'lucide-react';
const Stats = React.memo(() => {
  const { ref, controls } = useScrollAnimation();

  // Memoize stats array to prevent recreation on every render
  const stats = React.useMemo(() => [
  {
    number: "5+",
    label: "Projects",
    description: "Designed and developed from scratch",
    icon: ArrowUpRight
  },
  {
    number: "Fast",
    label: "First",
    description: "Optimized for speed and responsiveness",
    icon: Zap
  },
  {
    number: "Modern",
    label: "Stack",
    description: "React, Tailwind, JavaScript",
    icon: Code2
  },
  {
    number: "Growing",
    label: "Every Day",
    description: "Actively improving through real projects",
    icon: TrendingUp
  }
], []);

  return (
    <section id="stats" className="relative py-32 bg-background-primary">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
          ref={ref}
        >
          <h2
  className="font-display text-heading-1 mb-6 leading-tight"
  style={{
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: "700",
    letterSpacing: "-0.04em",
    color: "#2A2A26"
  }}
>
           Learning Through Building
          </h2>
          <motion.div 
            className="flex items-center justify-center mb-6 mx-auto w-[120px]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
           <motion.div
  className="w-20 h-px bg-accent-gold/40 mx-auto"
  initial={{ width: 0, opacity: 0 }}
  whileInView={{ width: 80, opacity: 1 }}
  transition={{ duration: 1.2, delay: 0.4 }}
/>
          </motion.div>
          <p className="text-text-secondary mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            A growing body of work focused on thoughtful interfaces, performance, and functional design.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
  const Icon = stat.icon;

  return (
            <motion.div 
              key={index}
              variants={staggerItemVariants}
              whileHover={{ y: -6 }}
transition={{ duration: 0.5 }}
              className={`bg-[#EAE4D8] border border-black/5 rounded-5xl ${index === 1 ? 'p-10' : 'p-8'} text-center hover:border-black/10 transition-all duration-200 h-full flex flex-col justify-between`}
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#DDD6C8]">
  <Icon className="w-5 h-5 text-accent-gold" />
</div>
              <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
                {stat.number}
              </div>
              <div className="font-semibold text-accent-gold mb-2" style={{ fontSize: index === 1 ? '12px' : '1.25rem' }}>
                {stat.label}
              </div>
              <div className="text-text-secondary text-sm">
                {stat.description}
              </div>
            </motion.div>
         );
})}
        </motion.div>

       {/* Additional Context */}
<motion.div
  variants={fadeInUpVariants}
  initial="hidden"
  animate={controls}
  transition={{ delay: 1 }}
  className="bg-background-secondary/80 border border-black/5 rounded-5xl p-10 sm:p-14 text-center shadow-editorial"
  whileHover={{ y: -2, transition: { duration: 0.8 } }}
>
  <div className="grid md:grid-cols-3 gap-10">
    
    <div className="space-y-3">
      <h4 className="font-display text-xl text-text-primary">
        Early-Stage Developer
      </h4>
      <p className="text-text-secondary leading-relaxed">
        Focused on building real-world products and improving through consistent execution.
      </p>
    </div>

    <div className="space-y-3">
      <h4 className="font-display text-xl text-text-primary">
        Exploring Multiple Domains
      </h4>
      <p className="text-text-secondary leading-relaxed">
        Experimenting across interfaces, systems, and user experiences to expand technical depth.
      </p>
    </div>

    <div className="space-y-3">
      <h4 className="font-display text-xl text-text-primary">
        Remote Ready
      </h4>
      <p className="text-text-secondary leading-relaxed">
        Comfortable collaborating asynchronously and building independently with strong attention to detail.
      </p>
    </div>

  </div>
</motion.div>
      </div>
    </section>
  );
});

export default Stats;
