import { copyrightYear, footerTagline, profile, socials } from '../data/site'

export function Footer() {
  return (
    <footer className="hairline-t py-12">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line-strong font-display text-xs font-semibold">
              {profile.initials}
            </span>
            <span className="font-display text-base font-medium tracking-tight">
              {profile.name}
            </span>
          </div>
          <p className="label mt-4">{footerTagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              {...(social.name === 'Email' ? {} : { target: '_blank', rel: 'noreferrer noopener' })}
              className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-faint transition-colors hover:text-fg"
            >
              {social.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="shell mt-10 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.68rem] text-faint">
          © {copyrightYear} {profile.name}
        </p>
        <p className="font-mono text-[0.68rem] text-faint">Built with React, TypeScript &amp; Tailwind</p>
      </div>
    </footer>
  )
}
