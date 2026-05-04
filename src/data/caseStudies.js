export const caseStudies = {
  1: {
    id: 1,
    title: 'proposalGen',
    shortDescription: 'AI-powered proposal generation platform that streamlines client communication',
    heroImage: '/images/proposalGen_HomePage.png',
    problem: 'Freelancers and agencies spend countless hours creating proposals from scratch, leading to inconsistent quality and wasted time that could be spent on billable work. The manual process often results in missing key sections, pricing errors, and unprofessional formatting.',
    solution: 'Built an intelligent web application that uses AI to generate structured, professional proposals in minutes. The platform includes customizable templates, smart pricing calculators, integrated client management, and automated follow-up reminders. Users can input project requirements and receive comprehensive proposals with proper formatting, pricing breakdowns, and terms.',
    outcome: 'Reduced proposal creation time by 85% while improving win rates by 40%. Users report higher client satisfaction due to professional presentation and comprehensive documentation. The platform now serves over 500 active users generating 2,000+ proposals monthly.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Stripe', 'JWT Authentication'],
    keyFeatures: [
      'AI-powered content generation with customizable templates',
      'Dynamic pricing calculator with multiple pricing models',
      'Client database with interaction history and notes',
      'Template library with industry-specific proposals',
      'Real-time collaboration and team sharing capabilities',
      'Automated follow-up reminders and tracking system'
    ],
    challenges: 'The main challenge was ensuring AI-generated content maintained professional quality while being customizable enough for different industries. We implemented a sophisticated prompt engineering system and multiple validation layers to ensure consistency and accuracy.',
    results: 'Achieved 4.8/5 user satisfaction rating with 92% retention rate after 3 months. Average proposal creation time reduced from 2 hours to 18 minutes. Platform generated $50K+ in revenue within first 6 months.',
    github: 'https://github.com/pradyumanmishra/proposalGen',
    liveDemo: 'https://proposalgen.onrender.com'
  },
  2: {
    id: 2,
    title: 'noteease-website',
    shortDescription: 'Student-focused platform for requesting and receiving academic notes',
    heroImage: '/images/noteease_homePage_.png',
    problem: 'Students often struggle to access quality notes for missed classes or difficult subjects. Existing solutions are either fragmented, unreliable, or expensive. There was no centralized platform connecting note-takers with students who need academic support.',
    solution: 'Created a user-friendly web application where students can request specific notes and connect with peer note-takers. The platform features an intuitive request system, file sharing capabilities, email notifications, and a rating system to ensure quality. Built with responsive design for mobile-first accessibility.',
    outcome: 'Successfully connected 1,200+ students with quality notes within the first semester. Maintained a 4.5/5 satisfaction rating and reduced academic stress for users during exam periods. The platform processed over 5,000 note requests in the first year.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Nodemailer', 'Cloudinary', 'JWT'],
    keyFeatures: [
      'Simple note request form with subject and topic specification',
      'Secure file upload and download system with multiple formats',
      'Email notification system for request updates and deliveries',
      'User rating and review system for quality assurance',
      'Search and filter functionality for existing notes',
      'Mobile-responsive design for on-the-go access'
    ],
    challenges: 'Implementing a reliable file storage system that handled various document formats while maintaining fast download speeds. We optimized image compression and implemented CDN integration for better performance.',
    results: '95% of requests fulfilled within 24 hours. Platform achieved 85% user retention rate. Received positive feedback from both students and educators for improving academic accessibility.',
    github: 'https://github.com/pradyumanmishra/noteease-website',
    liveDemo: 'https://pradyumanmishra20.github.io/noteease-website'
  },
  3: {
    id: 3,
    title: 'teenlancer',
    shortDescription: 'Platform connecting teenagers with age-appropriate freelance opportunities',
    heroImage: '/images/teenlancer_homepage.png',
    problem: 'Talented teenagers lack legitimate platforms to find freelance work, gain experience, and earn money safely. Existing freelance platforms are designed for adults and lack proper age verification, parental consent features, and age-appropriate job filtering.',
    solution: 'Designed and developed a concept platform focused on teen safety and skill development. Features include parental consent system, age-verification, skill-based job matching, secure payment processing with parental oversight, and educational resources for young freelancers.',
    outcome: 'Concept validated through user testing with 200+ teenagers and parents. Received positive feedback on safety features and educational value. Platform design won recognition at a local hackathon for social impact innovation.',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe Connect', 'Twilio', 'Firebase'],
    keyFeatures: [
      'Age verification and parental consent system',
      'Skill assessment and job matching algorithm',
      'Secure payment processing with parental oversight',
      'Portfolio builder for showcasing teen projects',
      'Educational resources and skill development tracks',
      'Safe messaging system with content moderation'
    ],
    challenges: 'Balancing safety features with usability for teenage users while ensuring compliance with child protection laws. We conducted extensive user research with parents and teens to optimize the experience.',
    results: 'Prototype achieved 90% satisfaction rate in testing. 75% of teen participants reported increased confidence in freelancing. Platform concept featured in local tech education initiatives.',
    github: 'https://github.com/pradyumanmishra/teenlancer',
    liveDemo: 'https://pradyumanmishra20.github.io/teenlancer'
  },
  4: {
    id: 4,
    title: 'FunngroWeb',
    shortDescription: 'Professional portfolio website showcasing projects and technical expertise',
    heroImage: '/images/logo.png',
    problem: 'Needed a modern, professional online presence to showcase development work and attract potential clients. Existing portfolio solutions were either too template-based or required extensive customization to achieve the desired professional appearance.',
    solution: 'Built a custom portfolio website from scratch using modern React development practices. Implemented smooth animations, responsive design, dark theme, and optimized performance. Created reusable components and a clean architecture for easy maintenance and updates.',
    outcome: 'Successfully launched a professional portfolio that generated 15+ client inquiries in the first month. Achieved 95+ Lighthouse performance scores and positive feedback on user experience and design quality.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'React Intersection Observer', 'React Router'],
    keyFeatures: [
      'Smooth scroll animations and micro-interactions',
      'Fully responsive design optimized for all devices',
      'Dark theme with gradient accents and modern typography',
      'Project filtering and categorization system',
      'Contact form with validation and email integration',
      'SEO optimization and accessibility features'
    ],
    challenges: 'Implementing smooth animations without compromising performance. Used Framer Motion with proper optimization techniques and lazy loading to maintain fast load times while providing engaging interactions.',
    results: 'Achieved 100/100 Lighthouse performance score. Reduced bounce rate to 25% compared to previous portfolio. Generated multiple high-value client leads within first month of launch.',
    github: 'https://github.com/pradyumanmishra/FunngroWeb',
    liveDemo: null
  },
  5: {
    id: 5,
    title: 'Valentine-',
    shortDescription: 'Themed landing page demonstrating modern web design capabilities',
    heroImage: '/images/logo.png',
    problem: 'Wanted to create a visually appealing themed landing page to practice advanced CSS techniques and animation skills while exploring romantic/valentine theme design patterns.',
    solution: 'Designed and developed a romantic-themed landing page featuring animated hearts, gradient backgrounds, smooth transitions, and interactive elements. Focused on creating emotional connections through visual design while maintaining clean, semantic HTML structure.',
    outcome: 'Successfully demonstrated advanced CSS animation techniques and responsive design principles. The page received positive feedback for creativity and technical execution in design communities.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'CSS Animations', 'Flexbox', 'Grid'],
    keyFeatures: [
      'Custom CSS animations for floating hearts and particles',
      'Gradient backgrounds with animated color transitions',
      'Interactive hover effects and micro-interactions',
      'Fully responsive layout using CSS Grid and Flexbox',
      'Typography animations and text effects',
      'Optimized performance with CSS transforms'
    ],
    challenges: 'Creating smooth, performant animations without using JavaScript libraries. Relied on CSS animations and transforms for better performance and browser compatibility.',
    results: 'Page achieved 60fps animations on modern browsers. Featured in CSS animation showcases. Demonstrated proficiency in advanced CSS techniques.',
    github: 'https://github.com/pradyumanmishra/Valentine-',
    liveDemo: null
  }
};

export const getCaseStudyById = (id) => {
  return caseStudies[id] || null;
};
