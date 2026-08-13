import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { ContactForm } from '../components/ContactForm'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { contact, profile, socials } from '../data/site'

const icons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail,
} as const

export function Contact() {
  const { copied, copy } = useCopyToClipboard()

  return (
    <section id="contact" aria-labelledby="contact-title" className="hairline-t py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          id="contact-title"
          index="07"
          label="Contact"
          title="Got something worth building?"
          lede="I'm always interested in interesting ideas, projects, collaborations, and opportunities to learn."
        />

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <button
                type="button"
                onClick={() => copy(contact.email)}
                className="group flex w-full items-center justify-between gap-4 rounded-xl border border-line bg-ink-800/40 p-5 text-left transition-colors hover:border-accent-soft/50"
                aria-label={`Copy email address ${contact.email}`}
              >
                <span>
                  <span className="label mb-2 block">Email</span>
                  <span className="font-mono text-sm break-all text-fg">{contact.email}</span>
                </span>
                <span className="shrink-0 text-faint transition-colors group-hover:text-accent-soft">
                  {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
                </span>
              </button>
              <p aria-live="polite" className="mt-2 font-mono text-[0.65rem] text-faint">
                {copied ? 'Copied to clipboard' : 'Click to copy'}
              </p>
            </Reveal>

            <Reveal delay={0.06} className="mt-6 space-y-3">
              {socials.map((social) => {
                const Icon = icons[social.name]
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    {...(social.name === 'Email'
                      ? {}
                      : { target: '_blank', rel: 'noreferrer noopener' })}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-line px-5 py-4 transition-colors hover:border-line-strong"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={15} aria-hidden className="text-faint group-hover:text-accent-soft" />
                      <span className="font-mono text-[0.75rem] tracking-[0.1em] uppercase">
                        {social.name}
                      </span>
                    </span>
                    <span className="flex items-center gap-2 text-faint">
                      <span className="hidden font-mono text-[0.68rem] sm:inline">
                        {social.handle}
                      </span>
                      <ArrowUpRight
                        size={14}
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </a>
                )
              })}
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 border-t border-line pt-6 font-mono text-[0.7rem] leading-relaxed text-faint">
                {profile.location} · usually replies within a day or two
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-line bg-ink-800/40 p-6 md:p-8">
              <p className="label mb-6">Send a message</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
