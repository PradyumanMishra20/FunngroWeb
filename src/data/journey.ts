export type JourneyStep = {
  title: string
  detail: string
  /** Optional — leave undefined rather than guessing a date. */
  period?: string
  marker?: string
}

/**
 * A learning progression, not an employment history.
 * Add a `period` only where the date is actually known.
 */
export const journey: JourneyStep[] = [
  {
    title: 'Learning the fundamentals',
    detail: 'HTML and CSS, and the realisation that a page is just structure plus rules.',
  },
  {
    title: 'Building websites',
    detail: 'Static pages, layouts, and the first time something I made worked on a phone.',
  },
  {
    title: 'Learning JavaScript',
    detail: 'Events, the DOM, and forms that respond instead of just sitting there.',
  },
  {
    title: 'Exploring React',
    detail: 'Components and state — and rewriting things I had already built, better.',
  },
  {
    title: 'Backend development',
    detail: 'Node and Express: what happens after the request leaves the browser.',
    marker: 'NoteEase',
  },
  {
    title: 'Databases',
    detail: 'MySQL, schemas, and storing data that outlives the page refresh.',
    marker: 'NoteEase',
  },
  {
    title: 'Building real projects',
    detail: 'Uploads, email, deployment — the unglamorous parts that make a thing usable.',
    marker: 'NoteEase · proposalGen',
  },
  {
    title: 'Learning through mistakes',
    detail: 'CORS, broken deploys, silent failures. Each one is now something I can debug.',
  },
  {
    title: 'Building better things',
    detail: 'TypeScript, full-stack apps, and caring about accessibility and performance.',
    marker: 'VLER · this site',
  },
]
