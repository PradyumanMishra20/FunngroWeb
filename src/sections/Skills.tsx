import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { skillCategories, skills } from '../data/skills'
import type { SkillCategory } from '../data/skills'
import { cn } from '../lib/cn'
import { EASE } from '../lib/motion'

export function Skills() {
  const [filter, setFilter] = useState<SkillCategory | 'All'>('All')
  const filtered = filter === 'All' ? skills : skills.filter((skill) => skill.category === filter)

  return (
    <section id="skills" aria-labelledby="skills-title" className="hairline-t py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          id="skills-title"
          index="02"
          label="Skills"
          title="The tools I actually use."
          lede="No percentages — just what I reach for, and what I use it for."
        />

        <Reveal className="mb-10 flex flex-wrap gap-2" as="div">
          {(['All', ...skillCategories] as const).map((category) => {
            const isActive = filter === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={isActive}
                className={cn(
                  'rounded-full border px-4 py-2 font-mono text-[0.7rem] tracking-[0.12em] uppercase transition-colors duration-300',
                  isActive
                    ? 'border-accent-soft/60 bg-accent/10 text-fg'
                    : 'border-line text-faint hover:border-line-strong hover:text-muted',
                )}
              >
                {category}
              </button>
            )
          })}
        </Reveal>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill, index) => (
            <motion.li
              key={`${skill.category}-${skill.name}`}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: EASE, delay: Math.min(index * 0.03, 0.24) }}
              className="group relative overflow-hidden rounded-xl border border-line bg-ink-800/40 p-5 transition-colors duration-300 hover:border-accent-soft/50 focus-within:border-accent-soft/50"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px scale-x-0 bg-accent-soft transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100"
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-medium tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5">
                    {skill.name}
                  </p>
                  <p className="label mt-1 text-[0.625rem]">{skill.category}</p>
                </div>
                <span
                  aria-hidden
                  className="font-mono text-[0.7rem] text-faint transition-colors duration-300 group-hover:text-accent-soft"
                >
                  ↗
                </span>
              </div>
              <p className="mt-3 overflow-hidden text-[0.85rem] leading-relaxed text-muted transition-all duration-400 max-md:max-h-24 max-md:opacity-100 md:max-h-0 md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100 md:group-focus-within:max-h-24 md:group-focus-within:opacity-100">
                {skill.note}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
