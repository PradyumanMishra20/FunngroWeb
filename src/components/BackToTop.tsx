import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'

export function BackToTop() {
  const visible = useScrolled(900)

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-ink-800/80 text-muted backdrop-blur transition-colors hover:border-accent-soft hover:text-fg md:bottom-8 md:right-8"
        >
          <ArrowUp size={16} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
