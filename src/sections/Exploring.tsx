import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { exploring } from '../data/site'
import { cn } from '../lib/cn'
import { EASE } from '../lib/motion'

export function Exploring() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = exploring[activeIndex]

  return (
    <section aria-labelledby="exploring-title" className="hairline-t py-20 md:py-28">
      <div className="shell">
        <Reveal className="mb-8 flex items-center gap-3">
          <span className="label text-accent-soft">06</span>
          <span aria-hidden className="h-px w-8 bg-line-strong" />
          <span className="label">Right now</span>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 id="exploring-title" className="text-[clamp(1.8rem,4.5vw,3rem)] font-semibold">
              Currently exploring
            </h2>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {exploring.map((item, index) => {
                const isActive = index === activeIndex
                return (
                  <li key={item.topic}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                      className={cn(
                        'rounded-full border px-4 py-2.5 font-mono text-[0.72rem] tracking-[0.08em] transition-colors duration-300',
                        isActive
                          ? 'border-accent-soft/60 bg-accent/10 text-fg'
                          : 'border-line text-faint hover:border-line-strong hover:text-muted',
                      )}
                    >
                      {item.topic}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <motion.p
            key={active.topic}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            aria-live="polite"
            className="max-w-xs border-l border-line pl-5 text-[0.9rem] leading-relaxed text-muted md:text-right md:border-l-0 md:border-r md:pl-0 md:pr-5"
          >
            {active.note}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
