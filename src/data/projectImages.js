export const projectImages = {
  1: { // proposalGen
    title: 'proposalGen',
    images: [
      {
        name: 'Home Page',
        path: '/images/proposalGen_HomePage.png',
        description: 'Main dashboard and proposal generation interface',
        alt: 'proposalGen home page showing AI proposal generation'
      },
      {
        name: 'About Page',
        path: '/images/proposalGen_aboutPage.png',
        description: 'About section with platform overview',
        alt: 'proposalGen about page with company information'
      },
      {
        name: 'Blog Page',
        path: '/images/proposalGen_blogPage.png',
        description: 'Blog and resources section',
        alt: 'proposalGen blog page with articles and tips'
      },
      {
        name: 'Career Page',
        path: '/images/proposalGen_careerPage.png',
        description: 'Career opportunities and team information',
        alt: 'proposalGen career page with job listings'
      },
      {
        name: 'Guide Page',
        path: '/images/proposalGen_guidePage.png',
        description: 'User guides and documentation',
        alt: 'proposalGen guide page with tutorials'
      },
      {
        name: 'Template Page',
        path: '/images/proposalGen_templatePage.png',
        description: 'Proposal templates gallery',
        alt: 'proposalGen template page with proposal examples'
      }
    ]
  },
  2: { // noteease-website
    title: 'noteease-website',
    images: [
      {
        name: 'Home Page',
        path: '/images/noteease_homePage_.png',
        description: 'Main landing page and service overview',
        alt: 'noteease home page with note request interface'
      },
      {
        name: 'Writer Page',
        path: '/images/noteease-writterPage.png',
        description: 'Note writer dashboard and submission interface',
        alt: 'noteease writer page for note creators'
      },
      {
        name: 'Order Page',
        path: '/images/noteease_orderPage.png',
        description: 'Order management and tracking',
        alt: 'noteease order page with request status'
      },
      {
        name: 'Contact Page',
        path: '/images/Noteease_ContactPage.png',
        description: 'Contact form and support information',
        alt: 'noteease contact page for customer support'
      },
      {
        name: 'Pricing Page',
        path: '/images/noteease_pricingPage.png',
        description: 'Pricing plans and subscription options',
        alt: 'noteease pricing page with service tiers'
      }
    ]
  },
  3: { // teenlancer
    title: 'teenlancer',
    images: [
      {
        name: 'Homepage',
        path: '/images/teenlancer_homepage.png',
        description: 'Main landing page for teen freelancers',
        alt: 'teenlancer homepage with platform overview'
      },
      {
        name: 'Company Page',
        path: '/images/teenlancer_companyPage.png',
        description: 'Company information and partnerships',
        alt: 'teenlancer company page with business details'
      },
      {
        name: 'Teen Page',
        path: '/images/teenlancer_teenPage.png',
        description: 'Teen freelancer dashboard and opportunities',
        alt: 'teenlancer teen page with freelance jobs'
      }
    ]
  },
  4: { // FunngroWeb
    title: 'FunngroWeb',
    images: [
      {
        name: 'Logo',
        path: '/images/logo.png',
        description: 'Portfolio website logo and branding',
        alt: 'FunngroWeb portfolio logo'
      }
    ]
  },
  5: { // Valentine-
    title: 'Valentine-',
    images: [
      {
        name: 'Logo',
        path: '/images/logo.png',
        description: 'Valentine themed project logo',
        alt: 'Valentine project logo placeholder'
      }
    ]
  }
};

export const getProjectImagesById = (id) => {
  return projectImages[id] || null;
};
