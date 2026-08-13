import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { experiments, projects } from '../data/projects'

type ProjectsProps = {
  onOpenCaseStudy: (slug: string) => void
}

export function Projects({ onOpenCaseStudy }: ProjectsProps) {
  const [lead, ...rest] = projects

  return (
    <section id="projects" aria-labelledby="projects-title" className="hairline-t py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          id="projects-title"
          index="03"
          label="Projects"
          title="Things I've built."
          lede="Projects are where I turn curiosity into something that actually works."
        />

        <div className="space-y-6">
          <ProjectCard project={lead} featured onOpenCaseStudy={onOpenCaseStudy} />
          {rest.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reversed={index % 2 === 1}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>

        <Reveal delay={0.05} className="mt-16">
          <p className="label mb-5">Also on the bench</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {experiments.map((item) => (
              <li
                key={item.name}
                className="group flex items-start justify-between gap-4 rounded-xl border border-line bg-ink-800/30 p-5 transition-colors hover:border-line-strong"
              >
                <div>
                  <p className="font-display text-base font-medium tracking-tight">{item.name}</p>
                  <p className="mt-1 text-[0.85rem] leading-relaxed text-muted">{item.note}</p>
                  <p className="mt-3 font-mono text-[0.65rem] tracking-[0.1em] uppercase text-faint">
                    {item.tech.join(' · ')}
                  </p>
                </div>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${item.name} on GitHub`}
                  className="mt-1 shrink-0 text-faint transition-colors hover:text-fg"
                >
                  <GithubIcon size={15} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <a
            href="https://github.com/PradyumanMishra20?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.12em] uppercase text-muted transition-colors hover:text-fg"
          >
            Everything else on GitHub
            <ArrowUpRight
              size={14}
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
