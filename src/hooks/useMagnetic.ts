import { useCallback, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type MagneticProps = {
  ref: React.RefObject<HTMLElement | null>
  offset: { x: number; y: number }
  onMouseMove: (event: React.MouseEvent<HTMLElement>) => void
  onMouseLeave: () => void
}

/** Pointer-follow offset for CTA buttons. Disabled for reduced motion and touch. */
export function useMagnetic(strength = 0.28, max = 14): MagneticProps {
  const ref = useRef<HTMLElement | null>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const reduced = useReducedMotion()

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const node = ref.current
      if (!node || reduced) return
      if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

      const rect = node.getBoundingClientRect()
      const dx = event.clientX - (rect.left + rect.width / 2)
      const dy = event.clientY - (rect.top + rect.height / 2)
      setOffset({
        x: Math.max(-max, Math.min(max, dx * strength)),
        y: Math.max(-max, Math.min(max, dy * strength)),
      })
    },
    [max, reduced, strength],
  )

  const onMouseLeave = useCallback(() => setOffset({ x: 0, y: 0 }), [])

  return { ref, offset, onMouseMove, onMouseLeave }
}
