import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import type { Project } from '../data/projects'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { EASE } from '../lib/motion'

type CaseStudyOverlayProps = {
  project: Project | null
  onClose: () => void
}

export function CaseStudyOverlay({ project, onClose }: CaseStudyOverlayProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = Boolean(project?.caseStudy)
  useLockBodyScroll(open)

  const { scrollYProgress } = useScroll({ container: scrollerRef })
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26 })

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const focusables = scrollerRef.current?.parentElement?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (!focusables || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {project?.caseStudy ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-80 bg-ink-900"
        >
          <motion.div
            aria-hidden
            style={{ scaleX: progress }}
            className="absolute inset-x-0 top-0 z-10 h-px origin-left bg-accent"
          />

          <div className="absolute inset-x-0 top-0 z-10 border-b border-line bg-ink-900/85 backdrop-blur-xl">
            <div className="shell flex items-center justify-between py-4">
              <div className="flex items-baseline gap-3">
                <span className="label text-accent-soft">{project.number}</span>
                <span className="font-display text-sm font-medium tracking-tight">
                  {project.name}
                </span>
                <span className="label hidden sm:inline">Case study</span>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent-soft hover:text-fg"
              >
                <X size={16} aria-hidden />
              </button>
            </div>
          </div>

          <motion.div
            ref={scrollerRef}
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="h-full overflow-y-auto overscroll-contain pt-20"
          >
            <div className="shell max-w-4xl pb-24">
              <header className="border-b border-line py-12 md:py-16">
                <p className="label mb-5">{project.kind}</p>
                <h2
                  id="case-study-title"
                  className="text-[clamp(2.2rem,7vw,4.5rem)] font-semibold"
                >
                  {project.name}
                </h2>
                <p className="mt-4 max-w-2xl font-display text-lg text-muted md:text-xl">
                  {project.tagline}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 font-mono text-[0.7rem] tracking-[0.12em] uppercase text-muted transition-colors hover:border-accent-soft hover:text-fg"
                    >
                      <GithubIcon size={13} />
                      GitHub
                    </a>
                  ) : null}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 font-mono text-[0.7rem] tracking-[0.12em] uppercase text-muted transition-colors hover:border-accent-soft hover:text-fg"
                    >
                      Live demo
                      <ArrowUpRight size={13} aria-hidden />
                    </a>
                  ) : null}
                </div>
              </header>

              <section aria-label="Stack" className="grid gap-6 border-b border-line py-10 sm:grid-cols-2">
                {project.caseStudy.stack.map((group) => (
                  <div key={group.group}>
                    <p className="label mb-3">{group.group}</p>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-line px-3 py-1 font-mono text-[0.68rem] text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <div className="divide-y divide-[color:var(--color-line)]">
                {project.caseStudy.chapters.map((chapter) => (
                  <motion.section
                    key={chapter.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25, root: scrollerRef }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="grid gap-6 py-12 md:grid-cols-[auto_1fr] md:gap-12"
                  >
                    <p className="label pt-2 text-accent-soft md:w-16">{chapter.number}</p>
                    <div>
                      <h3 className="text-[clamp(1.5rem,3.6vw,2.25rem)] font-semibold">
                        {chapter.title}
                      </h3>
                      <p className="mt-2 font-mono text-[0.72rem] tracking-[0.1em] uppercase text-faint">
                        {chapter.question}
                      </p>
                      <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-muted">
                        {chapter.body.map((paragraph) => (
                          <p key={paragraph.slice(0, 28)}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </motion.section>
                ))}
              </div>

              {project.caseStudy.gallery?.length ? (
                <section aria-label="Screens" className="border-t border-line pt-12">
                  <p className="label mb-6">Screens</p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {project.caseStudy.gallery.map((shot) => (
                      <figure key={shot.src} className="overflow-hidden rounded-xl border border-line">
                        <img
                          src={shot.src}
                          alt={shot.alt}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[16/10] w-full object-cover object-top"
                        />
                        <figcaption className="border-t border-line px-4 py-3 font-mono text-[0.68rem] text-faint">
                          {shot.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
