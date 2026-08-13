/**
 * Personal details, contact info and navigation.
 * Everything here is meant to be edited by hand — no component reads hard-coded copy.
 */

export const profile = {
  name: 'Pradyuman Mishra',
  initials: 'PM',
  role: 'Student Developer · Builder · Problem Solver',
  location: 'Mumbai, India',
  status: 'Available for projects & collaboration',
  photo: '/media/profile.webp',
  headline: 'I build things to understand how they work.',
  intro:
    "I'm Pradyuman Mishra — a student developer exploring web development, software, and real-world product building through hands-on projects.",
  heroMeta: ['Student Developer', 'Mumbai, India', 'Building + Learning'],
} as const

export const contact = {
  email: 'pradyuman212@gmail.com',
  phone: '+91 8454894108',
  /**
   * Optional POST endpoint for the contact form (Formspree, a serverless function, etc).
   * When empty, the form validates locally and hands the message to the visitor's mail client.
   */
  formEndpoint: (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) ?? '',
} as const

export const socials = [
  { name: 'GitHub', href: 'https://github.com/PradyumanMishra20', handle: '@PradyumanMishra20' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pradyuman-mishra-918902402',
    handle: 'pradyuman-mishra',
  },
  { name: 'Email', href: `mailto:${contact.email}`, handle: contact.email },
] as const

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
] as const

export const about = {
  statement: 'More than just code.',
  paragraphs: [
    "I'm a student developer from Mumbai. Most of what I know did not come from finishing a course — it came from starting a project, getting stuck somewhere in the middle, and refusing to leave it broken.",
    'I started with HTML and CSS, moved into JavaScript and React, and then went looking for what happens after the browser: Node, Express, MySQL, file uploads, mail delivery, deployment. Each project pulled me one layer deeper into the stack.',
    "I care about building things people can actually use — a form that handles bad input, a page that works on a small phone, a server that does not fall over. That's the part I'm still practising, project after project.",
  ],
  currently: [
    { label: 'Learning', value: 'Web Development' },
    { label: 'Building', value: 'Personal Projects' },
    { label: 'Exploring', value: 'Full-Stack Development' },
  ],
} as const

export const philosophy = {
  statement: "I don't want to just learn technology.\nI want to understand it by building with it.",
  principles: [
    { title: 'Build first.', note: 'Start before it feels comfortable.' },
    { title: 'Break things.', note: 'A broken build teaches faster than a tutorial.' },
    { title: 'Figure out why.', note: 'Read the error. Actually read it.' },
    { title: 'Fix them.', note: 'Small fix, then understand the real cause.' },
    { title: 'Build better.', note: 'Carry the lesson into the next project.' },
  ],
} as const

export const exploring = [
  { topic: 'React', note: 'Components, state, and keeping re-renders sane.' },
  { topic: 'Full-Stack Development', note: 'Connecting a UI to a real server and database.' },
  { topic: 'Backend Development', note: 'Express routes, file handling, and APIs.' },
  { topic: 'MySQL', note: 'Schema design and queries that do not scan everything.' },
  { topic: 'UI/UX', note: 'Layout, hierarchy, and making interfaces feel considered.' },
  { topic: 'AI-assisted development', note: 'Using AI tools without outsourcing understanding.' },
] as const

export const footerTagline = 'Student Developer · Builder · Learner'
export const copyrightYear = 2026
