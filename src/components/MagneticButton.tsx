import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMagnetic } from '../hooks/useMagnetic'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'ghost'

const base =
  'group relative inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 font-mono text-[0.75rem] tracking-[0.14em] uppercase transition-colors duration-300 min-h-11'

const styles: Record<Variant, string> = {
  primary: 'bg-fg text-ink-900 hover:bg-accent-soft',
  ghost: 'border border-line-strong text-fg hover:border-accent-soft hover:text-accent-soft',
}

type MagneticButtonProps = {
  children: ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  className?: string
  ariaLabel?: string
  external?: boolean
}

export function MagneticButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  ariaLabel,
  external,
}: MagneticButtonProps) {
  const { ref, offset, onMouseMove, onMouseLeave } = useMagnetic()
  const classes = cn(base, styles[variant], className)
  const animation = { x: offset.x, y: offset.y }
  const transition = { type: 'spring' as const, stiffness: 250, damping: 18, mass: 0.4 }

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        animate={animation}
        transition={transition}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={animation}
      transition={transition}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  )
}
