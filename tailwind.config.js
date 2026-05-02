/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme base
        background: {
          primary: '#0A0A0A',
          secondary: '#111111',
          tertiary: '#1A1A1A',
        },
        accent: {
          primary: '#FFFFFF',
          secondary: '#E5E5E5',
          tertiary: '#999999',
        },
        brand: {
          primary: '#6366F1', // Indigo
          secondary: '#8B5CF6', // Violet
          tertiary: '#EC4899', // Pink
        },
        semantic: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        }
      },
      fontFamily: {
        primary: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Production-ready typography scale
        'display-1': ['72px', { lineHeight: '76px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-2': ['60px', { lineHeight: '64px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-3': ['48px', { lineHeight: '52px', fontWeight: '700', letterSpacing: '-0.01em' }],
        'heading-1': ['36px', { lineHeight: '40px', fontWeight: '600', letterSpacing: '-0.01em' }],
        'heading-2': ['30px', { lineHeight: '32px', fontWeight: '600', letterSpacing: '-0.01em' }],
        'heading-3': ['24px', { lineHeight: '28px', fontWeight: '600' }],
        'heading-4': ['20px', { lineHeight: '24px', fontWeight: '600' }],
        'heading-5': ['18px', { lineHeight: '22px', fontWeight: '600' }],
        'body-large': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'body-small': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'ui-large': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'ui': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'ui-small': ['10px', { lineHeight: '14px', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      // Production-ready performance optimizations
      willChange: {
        'transform': 'transform',
        'opacity': 'opacity',
        'scroll-position': 'scroll-position',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
