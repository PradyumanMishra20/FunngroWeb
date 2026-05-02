# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimal aesthetic with premium feel
- **Fully Responsive**: Mobile-first approach, works on all devices
- **Smooth Animations**: Subtle micro-interactions and transitions
- **Component-Based**: Reusable React components
- **Smooth Scrolling**: Navigation with scroll spy
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Lazy loading and optimized animations

## Sections

1. **Hero**: Eye-catching introduction with CTAs
2. **About**: Personal story and achievements
3. **Projects**: Filterable portfolio grid with hover effects
4. **Testimonials**: Client success stories and social proof
5. **Contact**: Contact form and multiple contact methods

## Tech Stack

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **React Intersection Observer**: Scroll-triggered animations
- **React Router DOM**: Smooth navigation (if needed for routing)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

The build will be in the `build` folder.

## Customization

### Colors and Themes

The color scheme is defined in `tailwind.config.js`. You can customize:

- Background colors
- Brand colors (primary, secondary, tertiary)
- Accent colors
- Semantic colors (success, warning, error, info)

### Typography

Fonts are defined in `tailwind.config.js` and imported in `src/index.css`:

- **Inter**: Primary font for body text
- **Space Grotesk**: Display font for headlines
- **JetBrains Mono**: Monospace font for code

### Content

Update the content in each component:

- **Hero**: Update headline, subheadline, and CTAs
- **About**: Update bio, achievements, and philosophy
- **Projects**: Update project data in the component
- **Testimonials**: Update client testimonials
- **Contact**: Update contact information and form details

## Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Testimonials.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Deployment

### Netlify

1. Run `npm run build`
2. Upload the `build` folder to Netlify
3. Configure build settings if needed

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### Other Platforms

Any static hosting service that supports React applications will work.

## Performance

- Images use placeholder URLs - replace with actual optimized images
- Consider implementing lazy loading for images
- Use a CDN for assets in production
- Enable Gzip compression on the server

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
