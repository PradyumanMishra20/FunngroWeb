import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { philosophy } from '../data/site'
import { EASE, stagger, wordReveal } from '../lib/motion'

export function Philosophy() {
  const lines = philosophy.statement.split('\n')

  return (
    <section
      aria-labelledby="philosophy-title"
      className="hairline-t relative overflow-hidden py-24 md:py-36"
    >
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
      <div className="shell relative">
        <Reveal className="mb-10 flex items-center gap-3">
          <span className="label text-accent-soft">05</span>
          <span aria-hidden className="h-px w-8 bg-line-strong" />
          <span className="label">Building philosophy</span>
        </Reveal>

        <motion.h2
          id="philosophy-title"
          variants={stagger(0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-5xl text-[clamp(1.9rem,6.2vw,4.5rem)] font-semibold"
        >
          {lines.map((line, lineIndex) => (
            <span key={line} className="block">
              {line.split(' ').map((word, index) => (
                <span key={`${word}-${index}`} className="mr-[0.22em] inline-block overflow-hidden">
                  <motion.span
                    variants={wordReveal}
                    className={lineIndex === 1 ? 'inline-block' : 'inline-block text-muted'}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          ))}
        </motion.h2>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-[color:var(--color-line)] sm:grid-cols-2 lg:grid-cols-5">
          {philosophy.principles.map((principle, index) => (
            <motion.li
              key={principle.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: EASE, delay: index * 0.06 }}
              className="group bg-ink-900 p-6 transition-colors duration-500 hover:bg-ink-800"
            >
              <span className="label text-[0.625rem] text-faint transition-colors group-hover:text-accent-soft">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 font-display text-xl font-medium tracking-tight">
                {principle.title}
              </p>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">{principle.note}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
