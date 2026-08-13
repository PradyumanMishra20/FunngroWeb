import { Reveal } from './Reveal'

type SectionHeadingProps = {
  index: string
  label: string
  title: string
  lede?: string
  id?: string
}

export function SectionHeading({ index, label, title, lede, id }: SectionHeadingProps) {
  return (
    <header className="mb-14 md:mb-20">
      <Reveal className="mb-6 flex items-center gap-3">
        <span className="label text-accent-soft">{index}</span>
        <span aria-hidden className="h-px w-8 bg-line-strong" />
        <span className="label">{label}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          id={id}
          className="max-w-3xl text-[clamp(2.1rem,6.5vw,4.25rem)] font-semibold text-fg"
        >
          {title}
        </h2>
      </Reveal>
      {lede ? (
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-[0.975rem] leading-relaxed text-muted md:text-lg">
            {lede}
          </p>
        </Reveal>
      ) : null}
    </header>
  )
}
