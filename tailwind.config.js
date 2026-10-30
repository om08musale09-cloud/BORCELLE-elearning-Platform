/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neu: {
          bg: '#e6edf3',
          surface: '#e6edf3',
          shadowDark: '#c3cdd7',
          shadowLight: '#ffffff',
          dark: '#1e293b',
          muted: '#64748b',
          lightMuted: '#94a3b8',
          accent: '#2563eb',
          accentHover: '#1d4ed8',
          accentLight: '#3b82f6',
          positive: '#10b981',
          warning: '#f59e0b',
          danger: '#ef4444',
          purple: '#8b5cf6',
        }
      },
      boxShadow: {
        'neu-raised-sm': '3px 3px 6px #c3cdd7, -3px -3px 6px #ffffff',
        'neu-raised': '6px 6px 14px #c3cdd7, -6px -6px 14px #ffffff',
        'neu-raised-md': '8px 8px 16px #c3cdd7, -8px -8px 16px #ffffff',
        'neu-raised-lg': '12px 12px 24px #bcc7d2, -12px -12px 24px #ffffff',
        'neu-pressed-sm': 'inset 2px 2px 5px #c3cdd7, inset -2px -2px 5px #ffffff',
        'neu-pressed': 'inset 4px 4px 8px #c3cdd7, inset -4px -4px 8px #ffffff',
        'neu-pressed-deep': 'inset 5px 5px 10px #bcc7d2, inset -5px -5px 10px #ffffff',
        'neu-pill-active': 'inset 3px 3px 6px #bcc7d2, inset -3px -3px 6px #ffffff',
        'neu-btn-primary': '4px 4px 12px rgba(37, 99, 235, 0.35), -3px -3px 8px rgba(255, 255, 255, 0.7)',
        'neu-btn-primary-pressed': 'inset 3px 3px 6px rgba(29, 78, 216, 0.6), inset -2px -2px 5px rgba(96, 165, 250, 0.4)',
      },
      borderRadius: {
        'neu-pill': '9999px',
        'neu-card': '20px',
        'neu-sm': '12px',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
