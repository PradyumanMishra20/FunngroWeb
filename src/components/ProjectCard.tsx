import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import type { Project } from '../data/projects'
import { cn } from '../lib/cn'
import { EASE } from '../lib/motion'

type ProjectCardProps = {
  project: Project
  featured?: boolean
  /** Flip image/content sides for the alternating editorial rhythm. */
  reversed?: boolean
  onOpenCaseStudy: (slug: string) => void
}

function Thumb({ project, className }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt ?? `${project.name} interface`}
        loading="lazy"
        decoding="async"
        className={cn(
          'h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]',
          className,
        )}
      />
    )
  }

  return (
    <div
      className={cn(
        'grid h-full w-full place-items-center bg-[radial-gradient(70%_60%_at_50%_30%,rgba(77,93,251,0.18),transparent_70%)]',
        className,
      )}
      aria-hidden
    >
      <span className="font-display text-[clamp(2.5rem,8vw,5rem)] font-semibold tracking-tight text-white/12">
        {project.name}
      </span>
    </div>
  )
}

export function ProjectCard({ project, featured, reversed, onOpenCaseStudy }: ProjectCardProps) {
  const hasCaseStudy = Boolean(project.caseStudy)

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-line bg-ink-800/40 transition-colors duration-500 hover:border-line-strong',
        featured ? 'lg:grid lg:grid-cols-[1.05fr_0.95fr]' : 'md:grid md:grid-cols-2',
        reversed && !featured ? 'md:[&>*:first-child]:order-2' : '',
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden border-b border-line md:border-b-0',
          featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[420px]' : 'aspect-[16/10]',
          reversed && !featured ? 'md:border-l' : 'md:border-r',
        )}
      >
        <Thumb project={project} />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent"
        />
        <span
          aria-hidden
          className="absolute left-5 top-4 font-mono text-xs text-white/70 transition-transform duration-500 group-hover:-translate-y-0.5"
        >
          {project.number}
        </span>
      </div>

      <div
        className={cn(
          'flex flex-col justify-between gap-8 p-6 md:p-8',
          featured ? 'lg:p-10' : '',
        )}
      >
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="label text-accent-soft">{project.kind}</span>
            {featured ? (
              <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.625rem] tracking-[0.14em] uppercase text-faint">
                Featured
              </span>
            ) : null}
          </div>

          <h3
            className={cn(
              'font-semibold tracking-tight',
              featured ? 'text-[clamp(2rem,5vw,3.25rem)]' : 'text-[clamp(1.6rem,3.4vw,2.25rem)]',
            )}
          >
            {project.name}
          </h3>
          <p className="mt-2 font-display text-base text-muted md:text-lg">{project.tagline}</p>
          <p className="mt-5 max-w-xl text-[0.925rem] leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.03 * index }}
                className="rounded-full border border-line px-3 py-1 font-mono text-[0.68rem] tracking-[0.06em] text-faint transition-colors duration-300 group-hover:border-line-strong group-hover:text-muted"
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
          {hasCaseStudy ? (
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project.slug)}
              className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.12em] uppercase text-fg"
            >
              <span className="relative">
                View case study
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent-soft transition-transform duration-400 group-hover:scale-x-100"
                />
              </span>
              <ArrowUpRight
                size={14}
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          ) : null}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.12em] uppercase text-faint transition-colors hover:text-fg"
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
              className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.12em] uppercase text-faint transition-colors hover:text-fg"
            >
              Live demo
              <ArrowUpRight size={13} aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
