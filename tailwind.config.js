/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          dark: '#0A1C13',
          DEFAULT: '#0F2A1D',
          light: '#163E2B',
          card: '#133525',
          border: '#1E4D36',
        },
        leaf: {
          light: '#65C98E',
          DEFAULT: '#3FAE6A',
          dark: '#2E8550',
        },
        amber: {
          glow: '#FFB84D',
          DEFAULT: '#F5A524',
          dark: '#D98207',
          light: '#FDE68A',
        },
        cream: {
          light: '#FCFAF5',
          DEFAULT: '#F6F1E4',
          dark: '#EAE2CE',
          border: '#DDD2BA',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          muted: '#4A4A4A',
          light: '#717171',
        }
      },
      fontFamily: {
        heading: ['Fraunces', 'Sora', 'serif'],
        display: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'bubble-rise': 'bubbleRise 6s ease-in infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bubbleRise: {
          '0%': { transform: 'translateY(100%) scale(0.6)', opacity: '0' },
          '30%': { opacity: '0.7' },
          '80%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-120%) scale(1.2)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
