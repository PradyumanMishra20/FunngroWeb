import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { journey } from '../data/journey'
import { EASE } from '../lib/motion'

export function Journey() {
  const trackRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 75%', 'end 60%'],
  })
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 120,
    damping: 30,
  })

  return (
    <section id="journey" aria-labelledby="journey-title" className="hairline-t py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          id="journey-title"
          index="04"
          label="Journey"
          title="My journey."
          lede="Not a job history — the order in which things started making sense."
        />

        <ol ref={trackRef} className="relative ml-1 space-y-8 pl-8 md:ml-4 md:pl-12">
          <span aria-hidden className="absolute left-0 top-2 h-full w-px bg-line md:left-1" />
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute left-0 top-2 h-full w-px origin-top bg-accent-soft md:left-1"
          />

          {journey.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="group relative"
            >
              <span
                aria-hidden
                className="absolute -left-8 top-2 h-2 w-2 -translate-x-[3.5px] rounded-full border border-line-strong bg-ink-900 transition-colors duration-300 group-hover:border-accent-soft group-hover:bg-accent-soft md:-left-12 md:translate-x-[0.5px]"
              />
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="label text-[0.625rem] text-accent-soft">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[clamp(1.15rem,2.6vw,1.6rem)] font-medium tracking-tight">
                  {step.title}
                </h3>
                {step.period ? <span className="label">{step.period}</span> : null}
              </div>
              <p className="mt-2 max-w-xl text-[0.9rem] leading-relaxed text-muted">
                {step.detail}
              </p>
              {step.marker ? (
                <p className="mt-2 font-mono text-[0.65rem] tracking-[0.1em] uppercase text-faint">
                  {step.marker}
                </p>
              ) : null}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
