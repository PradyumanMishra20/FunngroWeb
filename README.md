# Pradyuman Mishra — Portfolio

Personal portfolio of Pradyuman Mishra, a student developer who learns by building.
Dark-first, editorial, built from scratch with React 19, TypeScript, Vite, Tailwind CSS v4
and Framer Motion.

## Getting started

Requires Node.js 20.19+ or 22+ (Vite 8 / rolldown native bindings).

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run typecheck  # tsc -b
npm run lint       # oxlint
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build
```

## Editing content

All content lives in `src/data/` and is kept separate from presentation, so the site can be
updated without touching components:

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Name, role, location, hero copy, contact details, socials, nav items, About text, the "Currently" panel, philosophy principles, "Currently exploring" topics, footer |
| `src/data/projects.ts` | Projects, tech stacks, links, screenshots and the 8-chapter case studies; smaller experiments live in the `experiments` export |
| `src/data/skills.ts` | Skill cards grouped by category (Frontend / Backend / Database / Programming / Tools) |
| `src/data/journey.ts` | Learning journey steps |

Images are optimized WebP files in `public/media/`.

## Structure

```
src/
├── components/   reusable UI (Nav, ProjectCard, CaseStudyOverlay, ContactForm, …)
├── sections/     page sections (Hero, About, Skills, Projects, Journey, …)
├── data/         all editable content
├── hooks/        scroll spy, body-scroll lock, magnetic buttons, clipboard
├── lib/          motion variants and helpers
├── index.css     design tokens (colors, type scale) + utilities
└── App.tsx
```

## Contact form

The form posts JSON to `VITE_CONTACT_ENDPOINT` when set (e.g. a Formspree/Web3Forms URL):

```bash
echo 'VITE_CONTACT_ENDPOINT=https://…' > .env.local
```

Without it, the form falls back to opening a prefilled email to the address in
`src/data/site.ts`.

## Deployment

Any static host works — build with `npm run build` and serve `dist/`.

## Accessibility & performance

Semantic landmarks, keyboard-navigable nav and dialogs, visible focus states, ARIA labels,
alt text, and full `prefers-reduced-motion` support. Case studies are code-split and images
are lazy-loaded.
