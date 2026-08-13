import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

/** Soft accent light that trails the pointer. Desktop + fine pointer only. */
export function CursorAccent() {
  const reduced = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const springX = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 })

  useEffect(() => {
    if (reduced) return
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!query.matches) return
    setEnabled(true)

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduced, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-screen"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(77,93,251,0.16)_0%,transparent_62%)] blur-2xl" />
    </motion.div>
  )
}
