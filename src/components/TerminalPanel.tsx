import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const COMMAND = 'npm run build'
const OUTPUT = ['Building something useful...', 'compiled — 0 errors', 'ready in 812 ms']

/** Small terminal that types one command, then settles. Static when motion is reduced. */
export function TerminalPanel() {
  const reduced = useReducedMotion()
  const [typed, setTyped] = useState(reduced ? COMMAND : '')
  const [lines, setLines] = useState<string[]>(reduced ? OUTPUT : [])

  useEffect(() => {
    if (reduced) return
    let index = 0
    const typer = setInterval(() => {
      index += 1
      setTyped(COMMAND.slice(0, index))
      if (index >= COMMAND.length) {
        clearInterval(typer)
        OUTPUT.forEach((line, i) => {
          setTimeout(() => setLines((prev) => [...prev, line]), 420 + i * 520)
        })
      }
    }, 62)
    return () => clearInterval(typer)
  }, [reduced])

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-ink-800/90 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-white/15" aria-hidden />
        <span className="label ml-2 text-[0.625rem]">zsh — dev</span>
      </div>
      <div className="space-y-1.5 px-4 py-4 font-mono text-[0.7rem] leading-relaxed sm:text-xs">
        <p className="text-muted">
          <span className="text-accent-soft">pradyuman@dev</span>
          <span className="text-faint">:~$ </span>
          <span className="text-fg">{typed}</span>
          {typed.length < COMMAND.length ? (
            <span className="caret text-fg" aria-hidden>
              ▍
            </span>
          ) : null}
        </p>
        {lines.map((line) => (
          <p key={line} className="text-faint">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
