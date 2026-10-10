/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38aaf6',
          500: '#0e8ee9',
          600: '#0271c7',
          700: '#035aa2',
          800: '#074d85',
          900: '#0c406e',
        },
        category: {
          trabalho: {
            bg: '#eff6ff',
            text: '#1d4ed8',
            border: '#bfdbfe',
            badge: '#3b82f6',
          },
          pessoal: {
            bg: '#fdf4ff',
            text: '#a21caf',
            border: '#f5d0fe',
            badge: '#d946ef',
          },
          estudos: {
            bg: '#f0fdf4',
            text: '#15803d',
            border: '#bbf7d0',
            badge: '#22c55e',
          },
          saude: {
            bg: '#fff7ed',
            text: '#c2410c',
            border: '#ffedd5',
            badge: '#f97316',
          },
          outros: {
            bg: '#f8fafc',
            text: '#475569',
            border: '#e2e8f0',
            badge: '#64748b',
          },
        },
        priority: {
          alta: {
            bg: '#fef2f2',
            text: '#b91c1c',
            border: '#fecaca',
            dot: '#ef4444',
          },
          media: {
            bg: '#fffbeb',
            text: '#b45309',
            border: '#fde68a',
            dot: '#f59e0b',
          },
          baixa: {
            bg: '#f0fdf4',
            text: '#15803d',
            border: '#bbf7d0',
            dot: '#10b981',
          },
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
        'soft-xl': '0 20px 30px -4px rgba(0, 0, 0, 0.08), 0 8px 12px -3px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.25s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
