import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { cn } from '../lib/cn'
import { EASE } from '../lib/motion'

const sectionIds = navItems.map((item) => item.id)

export function Nav() {
  const scrolled = useScrolled(24)
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  useLockBodyScroll(open)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const goTo = useCallback((id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-60"
      >
        <div
          className={cn(
            'shell flex items-center justify-between transition-all duration-500',
            scrolled ? 'py-2.5' : 'py-5',
          )}
        >
          <div
            className={cn(
              'flex w-full items-center justify-between rounded-full border transition-all duration-500',
              scrolled
                ? 'border-line bg-ink-800/80 px-4 py-2 backdrop-blur-xl md:px-5'
                : 'border-transparent px-1 py-1',
            )}
          >
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault()
                goTo('home')
              }}
              className="flex items-center gap-3"
              aria-label={`${profile.name} — home`}
            >
              <span
                className={cn(
                  'grid place-items-center rounded-full border border-line-strong font-display font-semibold transition-all duration-500',
                  scrolled ? 'h-8 w-8 text-[0.7rem]' : 'h-9 w-9 text-xs',
                )}
              >
                {profile.initials}
              </span>
              <span className="hidden font-display text-sm font-medium tracking-tight sm:block">
                {profile.name}
              </span>
            </a>

            <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={(event) => {
                      event.preventDefault()
                      goTo(item.id)
                    }}
                    className={cn(
                      'relative rounded-full px-3.5 py-2 text-[0.8rem] transition-colors duration-300',
                      isActive ? 'text-fg' : 'text-faint hover:text-muted',
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        transition={{ duration: 0.4, ease: EASE }}
                        className="absolute inset-0 rounded-full bg-white/6"
                      />
                    ) : null}
                    <span className="relative">{item.label}</span>
                  </a>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 lg:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-soft" />
                </span>
                <span className="label text-[0.625rem] text-muted">{profile.status}</span>
              </span>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:text-fg md:hidden"
              >
                <Menu size={17} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-70 bg-ink-900/98 backdrop-blur-xl md:hidden"
          >
            <div className="grid-lines absolute inset-0 opacity-50" aria-hidden />
            <div className="relative flex h-full flex-col">
              <div className="shell flex items-center justify-between py-5">
                <span className="label">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  autoFocus
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted"
                >
                  <X size={17} aria-hidden />
                </button>
              </div>

              <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-center">
                <ul className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + index * 0.05, duration: 0.45, ease: EASE }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(event) => {
                          event.preventDefault()
                          goTo(item.id)
                        }}
                        className="flex items-baseline gap-4 border-b border-line py-4"
                      >
                        <span className="label w-6">{String(index + 1).padStart(2, '0')}</span>
                        <span className="font-display text-[2rem] font-medium tracking-tight">
                          {item.label}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="shell flex items-center gap-2 py-8">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" aria-hidden />
                <span className="label text-muted">{profile.status}</span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
