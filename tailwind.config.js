/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },

    extend: {
      /* ==========================================
         EDITORIAL COLOR SYSTEM
      ========================================== */
      colors: {
        background: {
          primary: "#E6E1D7",
          secondary: "#DDD7CB",
          tertiary: "#D4CEC2",
          overlay: "rgba(230,225,215,0.85)",
        },

        surface: {
          base: "#DDD7CB",
          elevated: "#D4CEC2",
          muted: "#CFC8BC",
        },

        text: {
          primary: "#2A2A26",
          secondary: "#5A5A52",
          muted: "#7A786F",
          inverse: "#F3EFE7",
        },

        dark: {
          primary: "#1B1D18",
          secondary: "#22231D",
        },

        accent: {
          gold: "#B08A3E",
          brass: "#A27B36",
          olive: "#7A7B4F",
          oliveDark: "#6D6E46",
        },

        semantic: {
          success: "#7A7B4F",
          warning: "#B08A3E",
          error: "#8C5A46",
          info: "#7A786F",
        },
      },

      /* ==========================================
         TYPOGRAPHY
      ========================================== */
      fontFamily: {
        primary: ["Inter", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      fontSize: {
        "display-1": [
          "clamp(4rem, 8vw, 7rem)",
          {
            lineHeight: "0.96",
            fontWeight: "500",
            letterSpacing: "-0.03em",
          },
        ],

        "display-2": [
          "clamp(3.25rem, 6vw, 5.5rem)",
          {
            lineHeight: "0.98",
            fontWeight: "500",
            letterSpacing: "-0.025em",
          },
        ],

        "display-3": [
          "clamp(2.5rem, 5vw, 4.25rem)",
          {
            lineHeight: "1.02",
            fontWeight: "500",
            letterSpacing: "-0.02em",
          },
        ],

        "heading-1": [
          "2.5rem",
          {
            lineHeight: "1.1",
            fontWeight: "500",
            letterSpacing: "-0.02em",
          },
        ],

        "heading-2": [
          "2rem",
          {
            lineHeight: "1.15",
            fontWeight: "500",
            letterSpacing: "-0.015em",
          },
        ],

        "heading-3": [
          "1.5rem",
          {
            lineHeight: "1.25",
            fontWeight: "500",
          },
        ],

        "heading-4": [
          "1.25rem",
          {
            lineHeight: "1.35",
            fontWeight: "500",
          },
        ],

        "body-large": [
          "1.125rem",
          {
            lineHeight: "2rem",
            fontWeight: "400",
          },
        ],

        "body": [
          "1rem",
          {
            lineHeight: "1.9",
            fontWeight: "400",
          },
        ],

        "body-small": [
          "0.875rem",
          {
            lineHeight: "1.75",
            fontWeight: "400",
          },
        ],

        "ui": [
          "0.75rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "500",
            letterSpacing: "0.08em",
          },
        ],
      },

      /* ==========================================
         SPACING
      ========================================== */
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "96": "24rem",
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
      },

      /* ==========================================
         BORDER RADIUS
      ========================================== */
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },

      /* ==========================================
         SHADOWS
      ========================================== */
      boxShadow: {
        soft: "0 10px 30px rgba(42, 42, 38, 0.06)",
        editorial: "0 25px 60px rgba(42, 42, 38, 0.08)",
        cinematic: "0 40px 100px rgba(27, 29, 24, 0.12)",
      },

      /* ==========================================
         BACKDROP BLUR
      ========================================== */
      backdropBlur: {
        xs: "2px",
        soft: "8px",
      },

      /* ==========================================
         MOTION
      ========================================== */
      animation: {
        "fade-in": "fadeIn 1s cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-up": "fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
        "drift": "drift 14s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        drift: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0)",
          },
          "50%": {
            transform: "translate3d(0, -8px, 0)",
          },
        },
      },

      /* ==========================================
         PERFORMANCE UTILITIES
      ========================================== */
      willChange: {
        transform: "transform",
        opacity: "opacity",
        "scroll-position": "scroll-position",
      },
    },
  },

  plugins: [],
};