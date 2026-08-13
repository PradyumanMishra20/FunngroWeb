import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { about, profile } from '../data/site'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="hairline-t py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          id="about-title"
          index="01"
          label="About"
          title={about.statement}
          lede="Where I am in the process, and how I got here."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="max-w-2xl font-display text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.15] font-medium">
                I learn by building. Every project on this site started as something I did not know
                how to do yet.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10 flex items-start gap-5">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={112}
                height={112}
                loading="lazy"
                decoding="async"
                className="h-24 w-24 shrink-0 rounded-lg border border-line object-cover grayscale transition duration-500 hover:grayscale-0 sm:h-28 sm:w-28"
              />
              <div className="space-y-4 text-[0.95rem] leading-relaxed text-muted">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <aside
              aria-label="Currently"
              className="rounded-2xl border border-line bg-ink-800/50 p-6 md:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="label">Currently</p>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" aria-hidden />
                  <span className="label text-[0.625rem] text-muted">live</span>
                </span>
              </div>

              <dl className="divide-y divide-[color:var(--color-line)]">
                {about.currently.map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="label">{item.label}</dt>
                    <dd className="text-right font-display text-lg font-medium tracking-tight">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 border-t border-line pt-5 font-mono text-[0.7rem] leading-relaxed text-faint">
                {profile.location} · open to collaboration
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
