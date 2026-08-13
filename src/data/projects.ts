export type CaseStudyChapter = {
  /** "01", "02", ... rendered as a chapter marker. */
  number: string
  title: string
  question: string
  body: string[]
}

export type CaseStudy = {
  chapters: CaseStudyChapter[]
  stack: { group: string; items: string[] }[]
  gallery?: { src: string; alt: string; caption: string }[]
}

export type Project = {
  slug: string
  number: string
  name: string
  tagline: string
  description: string
  /** Short honest label: what this actually is. */
  kind: string
  tech: string[]
  image?: string
  imageAlt?: string
  github?: string
  live?: string
  featured?: boolean
  caseStudy?: CaseStudy
}

export const projects: Project[] = [
  {
    slug: 'noteease',
    number: '01',
    name: 'NoteEase',
    tagline: 'Handwritten notes, requested online.',
    kind: 'Full-stack student project',
    description:
      'A platform where a student can upload the material they need covered — PDFs, screenshots, handwritten references — and student writers can prepare physical handwritten notes from it. Built to make requesting and preparing notes a simple, trackable process instead of a chain of chat messages.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'Multer', 'Nodemailer'],
    image: '/media/noteease-homepage-.webp',
    imageAlt: 'NoteEase home page showing the note request flow',
    github: 'https://github.com/PradyumanMishra20/noteease-website',
    live: 'https://pradyumanmishra20.github.io/noteease-website/',
    featured: true,
    caseStudy: {
      stack: [
        { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
        { group: 'Backend', items: ['Node.js', 'Express'] },
        { group: 'Database', items: ['MySQL (mysql2)'] },
        { group: 'Services', items: ['Multer', 'Nodemailer', 'GitHub Pages', 'Railway'] },
      ],
      gallery: [
        {
          src: '/media/noteease-homepage-.webp',
          alt: 'NoteEase home page',
          caption: 'Home — what the service does, in one screen.',
        },
        {
          src: '/media/noteease-orderpage.webp',
          alt: 'NoteEase order page',
          caption: 'Order — details, subject, and the reference upload.',
        },
        {
          src: '/media/noteease-writterpage.webp',
          alt: 'NoteEase writer page',
          caption: 'Writers — the side that prepares the notes.',
        },
        {
          src: '/media/noteease-pricingpage.webp',
          alt: 'NoteEase pricing page',
          caption: 'Pricing — kept simple and readable.',
        },
        {
          src: '/media/noteease-contactpage.webp',
          alt: 'NoteEase contact page',
          caption: 'Contact — the form wired to the mail flow.',
        },
      ],
      chapters: [
        {
          number: '01',
          title: 'The Idea',
          question: 'Why did I build it?',
          body: [
            'Handwritten notes are still how a lot of students actually study, and getting them made is an entirely informal process — you ask around, send screenshots, follow up, hope someone remembers.',
            'I wanted to see whether that informal loop could be turned into a proper request flow: submit what you need, attach the material, and have the request exist somewhere other than a chat thread.',
            'It was also the first project where I could not stay in the frontend. Files had to be stored, records had to persist, and someone had to be notified — so it became the project that pushed me into the backend.',
          ],
        },
        {
          number: '02',
          title: 'The Problem',
          question: 'What was I trying to solve?',
          body: [
            'Requests are scattered. Reference material arrives as a mix of PDFs, photos and screenshots across different apps, and nothing ties them to a specific request.',
            'Nobody knows the state of anything. The student does not know if their request was picked up; the writer does not have the full brief in one place.',
            'The fix is not clever technology. It is one structured form, one place where the files land, and one notification that closes the loop.',
          ],
        },
        {
          number: '03',
          title: 'The Solution',
          question: 'How does NoteEase work?',
          body: [
            'A student fills in a request: subject, what needs to be covered, and the reference material to work from.',
            'Uploads are handled server-side with Multer, so PDFs and images are attached to the request rather than sent separately.',
            'The request is written to MySQL so it exists as a record instead of a message, and Nodemailer sends the confirmation and notification email that tells both sides something happened.',
            'Around that core flow are the plain, static pages a service needs: what it does, who writes the notes, what it costs, and how to get in touch.',
          ],
        },
        {
          number: '04',
          title: 'The Technology',
          question: 'What did I use?',
          body: [
            'Frontend: HTML, CSS and vanilla JavaScript — deliberately no framework, because I wanted to understand form handling and validation without one.',
            'Backend: Node.js with Express serving the API and form endpoints.',
            'Database: MySQL through the mysql2 driver for requests and their details.',
            'Supporting pieces: Multer for multipart uploads, Nodemailer for transactional email, GitHub Pages for the static front, and Railway while experimenting with hosting the server.',
          ],
        },
        {
          number: '05',
          title: 'The Build',
          question: 'How did I approach development?',
          body: [
            'I built the pages first, because that was the part I already knew how to do, and it gave me something concrete to wire up.',
            'Then the server: one endpoint at a time, tested with the real form rather than a tool, so I could see exactly what the browser was actually sending.',
            'Uploads came next, then the database, then email — each one added only after the previous step worked end to end. Adding them all at once would have made every failure ambiguous.',
          ],
        },
        {
          number: '06',
          title: 'Challenges',
          question: 'What went wrong?',
          body: [
            'Multipart form data. The moment a file input entered the form, the request body I expected disappeared — that was my introduction to how multipart encoding actually works and why the upload middleware has to run before I read the fields.',
            'Email delivery. Sending mail from a server is not one line of code: credentials, app passwords and provider restrictions all had to be understood before anything reached an inbox.',
            'Deployment. A static frontend and a Node server do not live in the same place. Splitting them meant learning about environment variables, and about CORS — the hard way.',
            'Database connections. Getting connection details right, and handling the case where the query simply fails, instead of leaving the request hanging.',
          ],
        },
        {
          number: '07',
          title: 'Lessons',
          question: 'What did I learn?',
          body: [
            'The interesting problems live between the parts. Each piece worked alone; the bugs were all in the handoffs — form to server, server to storage, server to mail.',
            'Errors need somewhere to go. My first version quietly failed and showed the user nothing, which is worse than an error message.',
            'A schema is a design decision. Deciding what a "request" is made the rest of the code obvious.',
            'Ship the small version. The project only made sense once one complete flow worked, rather than five half-built ones.',
          ],
        },
        {
          number: '08',
          title: "What's Next",
          question: 'What could be improved?',
          body: [
            'Real accounts, so a student can come back and see their own requests.',
            'A status on each request — received, in progress, ready — instead of relying on email.',
            'Server-side validation and file-type limits that I would trust with untrusted input.',
            'Rebuilding the frontend in React, now that the flow itself is settled.',
          ],
        },
      ],
    },
  },
  {
    slug: 'vler',
    number: '02',
    name: 'VLER',
    tagline: 'A streetwear storefront, end to end.',
    kind: 'Next.js e-commerce build',
    description:
      'A streetwear e-commerce front end built with Next.js and TypeScript: collections, product pages, cart, account management and a checkout flow, with Supabase behind authentication and data. My attempt at the full shape of a commerce site rather than a single page.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Zustand', 'EmailJS'],
    github: 'https://github.com/PradyumanMishra20/VLER',
    live: 'https://vler.vercel.app',
    featured: true,
    caseStudy: {
      stack: [
        { group: 'Framework', items: ['Next.js', 'React', 'TypeScript'] },
        { group: 'UI', items: ['Tailwind CSS', 'Radix UI', 'Framer Motion'] },
        { group: 'Data', items: ['Supabase', 'Zustand'] },
        { group: 'Services', items: ['EmailJS', 'Vercel'] },
      ],
      chapters: [
        {
          number: '01',
          title: 'The Idea',
          question: 'Why did I build it?',
          body: [
            'I wanted to build something with more than one screen of state — a site where what you do on one page changes another.',
            'A store was the clearest version of that: a cart that survives navigation, an account that knows who you are, a checkout that depends on both.',
          ],
        },
        {
          number: '02',
          title: 'The Problem',
          question: 'What was I trying to solve?',
          body: [
            'This one is honest about its purpose: it is a learning build, not a shop with customers.',
            'The problem I set myself was structural — how to organise a multi-page app so that authentication, cart state and product data do not turn into tangled code.',
          ],
        },
        {
          number: '03',
          title: 'The Solution',
          question: 'How does it work?',
          body: [
            'Next.js handles routing and rendering; collections and product pages are composed from shared components.',
            'Zustand holds cart state so it persists across navigation, and Supabase covers auth and account data.',
            'The design leans luxury-minimal, which forced me to think about typography and spacing rather than adding more UI.',
          ],
        },
        {
          number: '04',
          title: 'The Technology',
          question: 'What did I use?',
          body: [
            'Next.js and TypeScript, Tailwind CSS for styling, Radix primitives for accessible components, Supabase for auth and data, Zustand for client state, EmailJS for form delivery, deployed on Vercel.',
          ],
        },
        {
          number: '05',
          title: 'The Build',
          question: 'How did I approach it?',
          body: [
            'Layout and product pages first, then cart state, then auth — each layer added only once the previous one was stable.',
            'Using TypeScript from the start changed how I worked: the shape of a product and an order had to be decided before the UI, not after.',
          ],
        },
        {
          number: '06',
          title: 'Challenges',
          question: 'What went wrong?',
          body: [
            'Server and client components. Working out what can run where in the Next.js app model took several confused attempts.',
            'Auth state that needs to be correct on both the server and the client, without flashing the wrong UI on load.',
            'Keeping the cart consistent across reloads and routes.',
          ],
        },
        {
          number: '07',
          title: 'Lessons',
          question: 'What did I learn?',
          body: [
            'Types are documentation that cannot go stale.',
            'A hosted backend removes a lot of setup, but you still have to understand the rules it enforces.',
            'Restraint is a design tool — most of my improvements came from removing things.',
          ],
        },
        {
          number: '08',
          title: "What's Next",
          question: 'What could be improved?',
          body: [
            'Real payment handling, which the current build deliberately stops short of.',
            'Server-side validation of orders rather than trusting the client.',
            'Tests around the cart, which is the part most likely to break silently.',
          ],
        },
      ],
    },
  },
  {
    slug: 'proposalgen',
    number: '03',
    name: 'proposalGen',
    tagline: 'Turning a blank page into a draft.',
    kind: 'React + TypeScript web app',
    description:
      'A React and TypeScript web app around proposal writing: templates, guides, and a structured editor built with routing, markdown rendering and client-side state. The project where I moved from single-page sites to an app with real navigation and shared state.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Zustand', 'Framer Motion'],
    image: '/media/proposalgen.webp',
    imageAlt: 'proposalGen landing page',
    github: 'https://github.com/PradyumanMishra20/proposalGen',
    featured: true,
    caseStudy: {
      stack: [
        { group: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
        { group: 'App', items: ['React Router', 'Zustand'] },
        { group: 'Content', items: ['react-markdown', 'remark-gfm'] },
        { group: 'Motion', items: ['Framer Motion'] },
      ],
      gallery: [
        {
          src: '/media/proposalgen.webp',
          alt: 'proposalGen landing page',
          caption: 'Landing — the pitch for the tool.',
        },
        {
          src: '/media/proposalgen-templatepage.webp',
          alt: 'proposalGen templates page',
          caption: 'Templates — structured starting points.',
        },
        {
          src: '/media/proposalgen-guidepage.webp',
          alt: 'proposalGen guide page',
          caption: 'Guides — markdown content rendered in-app.',
        },
        {
          src: '/media/proposalgen-aboutpage.webp',
          alt: 'proposalGen about page',
          caption: 'About — the project explained.',
        },
      ],
      chapters: [
        {
          number: '01',
          title: 'The Idea',
          question: 'Why did I build it?',
          body: [
            'Writing a proposal from an empty document is the slowest part of the job, and most of it is structure rather than thinking.',
            'I wanted to build a tool that supplies the structure — and, along the way, learn how a multi-page React app is actually put together.',
          ],
        },
        {
          number: '02',
          title: 'The Problem',
          question: 'What was I trying to solve?',
          body: [
            'A blank page gives no hints about what a good proposal contains, so sections get forgotten and the result reads inconsistently.',
            'Templates and guidance solve most of that before any clever generation is involved.',
          ],
        },
        {
          number: '03',
          title: 'The Solution',
          question: 'How does it work?',
          body: [
            'The app is organised around routes: templates, guides, blog and the editor view.',
            'Content is authored as markdown and rendered in-app, which keeps writing content separate from writing components.',
            'Shared state lives in a Zustand store so the editor and the template picker stay in sync.',
          ],
        },
        {
          number: '04',
          title: 'The Technology',
          question: 'What did I use?',
          body: [
            'React with TypeScript, Tailwind CSS, React Router for navigation, Zustand for state, react-markdown with remark-gfm for content, and Framer Motion for transitions.',
          ],
        },
        {
          number: '05',
          title: 'The Build',
          question: 'How did I approach it?',
          body: [
            'Routes and layout first, then the shared components, then content.',
            'Adding TypeScript to a project I had started loosely was its own exercise — it surfaced assumptions I did not know I had made.',
          ],
        },
        {
          number: '06',
          title: 'Challenges',
          question: 'What went wrong?',
          body: [
            'State that started local and needed to be shared, which meant refactoring components I thought were finished.',
            'Type errors from third-party libraries that taught me how to read a type definition properly.',
            'Keeping animation subtle enough that navigation still felt fast.',
          ],
        },
        {
          number: '07',
          title: 'Lessons',
          question: 'What did I learn?',
          body: [
            'Decide where state lives before building the component that uses it.',
            'Content and code should be separable — markdown made editing painless.',
            'Routing is the app architecture; getting it right early saves rewrites.',
          ],
        },
        {
          number: '08',
          title: "What's Next",
          question: 'What could be improved?',
          body: [
            'A backend so drafts persist beyond the browser.',
            'Export to PDF, which is what the tool is missing to be genuinely useful.',
            'Slimmer bundles — the app grew faster than I was watching.',
          ],
        },
      ],
    },
  },
  {
    slug: 'teenlancer',
    number: '04',
    name: 'Teenlancer',
    tagline: 'A concept site for teens who build.',
    kind: 'Concept site (design + frontend)',
    description:
      'A concept website for a platform connecting teenagers with companies for age-appropriate work, with separate landing experiences for teens and for companies. This one was about layout, information architecture and writing copy that speaks to two different audiences.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/media/teenlancer-homepage.webp',
    imageAlt: 'Teenlancer homepage',
    github: 'https://github.com/PradyumanMishra20/teenlancer',
    live: 'https://pradyumanmishra20.github.io/teenlancer/',
    caseStudy: {
      stack: [
        { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
        { group: 'Hosting', items: ['GitHub Pages'] },
      ],
      gallery: [
        {
          src: '/media/teenlancer-homepage.webp',
          alt: 'Teenlancer homepage',
          caption: 'Home — the shared entry point.',
        },
        {
          src: '/media/teenlancer-teenpage.webp',
          alt: 'Teenlancer page for teens',
          caption: 'For teens — one audience, one argument.',
        },
        {
          src: '/media/teenlancer-companypage.webp',
          alt: 'Teenlancer page for companies',
          caption: 'For companies — the same product, different framing.',
        },
      ],
      chapters: [
        {
          number: '01',
          title: 'The Idea',
          question: 'Why did I build it?',
          body: [
            'A concept for a platform where teenagers could find real, age-appropriate work — built as a website, not as a business.',
          ],
        },
        {
          number: '02',
          title: 'The Problem',
          question: 'What was I trying to solve?',
          body: [
            'Two audiences with completely different motivations have to be convinced on the same site without either page feeling like an afterthought.',
          ],
        },
        {
          number: '03',
          title: 'The Solution',
          question: 'How does it work?',
          body: [
            'Separate landing pages for teens and companies, sharing one visual language and navigation, so each audience gets copy written for them.',
          ],
        },
        {
          number: '04',
          title: 'The Technology',
          question: 'What did I use?',
          body: ['Plain HTML, CSS and JavaScript, deployed on GitHub Pages.'],
        },
        {
          number: '05',
          title: 'The Build',
          question: 'How did I approach it?',
          body: [
            'Sections were sketched as blocks first and only then styled, which kept me from decorating a layout that did not work yet.',
          ],
        },
        {
          number: '06',
          title: 'Challenges',
          question: 'What went wrong?',
          body: [
            'Keeping two pages consistent without a component system meant repeated markup — the exact pain that made React make sense to me later.',
            'Responsive behaviour written by hand, breakpoint by breakpoint.',
          ],
        },
        {
          number: '07',
          title: 'Lessons',
          question: 'What did I learn?',
          body: [
            'Copy is part of the design; the layout only worked once the words were right.',
            'Repetition in markup is a signal, not a chore to accept.',
          ],
        },
        {
          number: '08',
          title: "What's Next",
          question: 'What could be improved?',
          body: [
            'Rebuild it with components, and add the real application flow the concept only illustrates.',
          ],
        },
      ],
    },
  },
]

/** Smaller experiments — not full projects, but they exist and they taught me something. */
export const experiments = [
  {
    name: 'Valentine',
    note: 'A small interactive page built for fun — animation practice in plain HTML and CSS.',
    github: 'https://github.com/PradyumanMishra20/Valentine-',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'This portfolio',
    note: 'Built from scratch with React, TypeScript, Tailwind and Framer Motion.',
    github: 'https://github.com/PradyumanMishra20/Pradyuman',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
  },
]

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug)
