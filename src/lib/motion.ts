import type { Variants } from 'framer-motion'

export const EASE = [0.16, 1, 0.3, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
}

export const stagger = (staggerChildren = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
})

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: '55%' },
  visible: { opacity: 1, y: '0%', transition: { duration: 0.7, ease: EASE } },
}

export const viewportOnce = { once: true, amount: 0.2 } as const
