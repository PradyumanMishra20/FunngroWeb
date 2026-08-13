import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, GitBranch } from 'lucide-react'
import { MagneticButton } from '../components/MagneticButton'
import { TerminalPanel } from '../components/TerminalPanel'
import { profile } from '../data/site'
import { EASE, stagger, wordReveal } from '../lib/motion'

const headlineWords = profile.headline.split(' ')

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Hero() {
  const reduced = useReducedMotion()
  const float = reduced ? {} : { y: [0, -8, 0] }

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div className="grid-lines absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink-900 to-transparent"
        aria-hidden
      />

      <div className="shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" aria-hidden />
            <span className="label text-[0.625rem] text-muted">{profile.role}</span>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={stagger(0.055, 0.25)}
            initial="hidden"
            animate="visible"
            className="max-w-[15ch] text-[clamp(2.6rem,9vw,6.2rem)] font-semibold"
          >
            {headlineWords.map((word, index) => (
              <span key={`${word}-${index}`} className="mr-[0.25em] inline-block overflow-hidden">
                <motion.span
                  variants={wordReveal}
                  className={
                    index >= headlineWords.length - 3 ? 'inline-block text-accent-soft' : 'inline-block'
                  }
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
            className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-muted md:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.72 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton onClick={() => scrollTo('projects')}>
              Explore My Work
              <ArrowRight
                size={14}
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => scrollTo('contact')}>
              Let&apos;s Connect
            </MagneticButton>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6"
          >
            {profile.heroMeta.map((meta, index) => (
              <div key={meta} className="flex items-center gap-2">
                <dt className="label text-[0.625rem] text-accent-soft">
                  {String(index + 1).padStart(2, '0')}
                </dt>
                <dd className="font-mono text-[0.7rem] tracking-[0.08em] text-muted uppercase">
                  {meta}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
          className="relative"
          aria-hidden
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <TerminalPanel />

            <motion.div
              animate={float}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-4 grid grid-cols-2 gap-4"
            >
              <div className="rounded-xl border border-line bg-ink-800/60 p-4">
                <p className="label mb-2 text-[0.625rem]">status</p>
                <p className="font-mono text-xs text-fg">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-soft align-middle" />
                  building + learning
                </p>
              </div>
              <div className="rounded-xl border border-line bg-ink-800/60 p-4">
                <p className="label mb-2 text-[0.625rem]">branch</p>
                <p className="flex items-center gap-2 font-mono text-xs text-fg">
                  <GitBranch size={12} className="text-accent-soft" />
                  feat/learn-by-building
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={reduced ? {} : { y: [0, 10, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="mt-4 rounded-xl border border-line bg-ink-800/60 p-4 font-mono text-[0.7rem] leading-relaxed text-faint"
            >
              <p>
                <span className="text-accent-soft">const</span> approach ={' '}
                <span className="text-fg">&#123;</span>
              </p>
              <p className="pl-4">
                build: <span className="text-fg">&apos;first&apos;</span>,
              </p>
              <p className="pl-4">
                debug: <span className="text-fg">&apos;always&apos;</span>,
              </p>
              <p className="pl-4">
                ship: <span className="text-fg">true</span>
              </p>
              <p>
                <span className="text-fg">&#125;</span>
              </p>
            </motion.div>

            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(60%_50%_at_50%_40%,rgba(77,93,251,0.12),transparent_70%)]" />
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex"
        aria-label="Scroll to about section"
      >
        <span className="label text-[0.625rem]">scroll</span>
        <motion.span
          animate={reduced ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-faint"
        >
          <ArrowDown size={13} aria-hidden />
        </motion.span>
      </motion.button>
    </section>
  )
}
