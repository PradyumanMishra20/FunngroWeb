import { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BackToTop } from './components/BackToTop'
import { CursorAccent } from './components/CursorAccent'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { ScrollProgress } from './components/ScrollProgress'
import { getProjectBySlug } from './data/projects'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Exploring } from './sections/Exploring'
import { Hero } from './sections/Hero'
import { Journey } from './sections/Journey'
import { Philosophy } from './sections/Philosophy'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

/** Case studies are a separate chunk — they only load when one is opened. */
const CaseStudyOverlay = lazy(() =>
  import('./components/CaseStudyOverlay').then((module) => ({ default: module.CaseStudyOverlay })),
)

const CASE_PARAM = 'case'

const readCaseFromUrl = () => new URLSearchParams(window.location.search).get(CASE_PARAM)

export default function App() {
  const [caseSlug, setCaseSlug] = useState<string | null>(() => readCaseFromUrl())

  useEffect(() => {
    const onPopState = () => setCaseSlug(readCaseFromUrl())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const openCaseStudy = useCallback((slug: string) => {
    setCaseSlug(slug)
    const url = new URL(window.location.href)
    url.searchParams.set(CASE_PARAM, slug)
    window.history.pushState({ [CASE_PARAM]: slug }, '', url)
  }, [])

  const closeCaseStudy = useCallback(() => {
    setCaseSlug(null)
    if (readCaseFromUrl()) {
      window.history.back()
    }
  }, [])

  const project = caseSlug ? (getProjectBySlug(caseSlug) ?? null) : null

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-90 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-ink-900"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <CursorAccent />
      <Nav />

      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects onOpenCaseStudy={openCaseStudy} />
        <Journey />
        <Philosophy />
        <Exploring />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <Suspense fallback={null}>
        {project ? <CaseStudyOverlay project={project} onClose={closeCaseStudy} /> : null}
      </Suspense>
    </motion.div>
  )
}
