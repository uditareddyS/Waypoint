/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        awning: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
          soft: 'var(--color-primary-soft)',
        },
        marigold: {
          DEFAULT: 'var(--color-accent)',
          dark: 'var(--color-accent-dark)',
          light: 'var(--color-accent-light)',
          soft: 'var(--color-accent-soft)',
        },
        cream: {
          DEFAULT: 'var(--color-bg)',
          light: 'var(--color-surface-card)',
          dark: 'var(--color-surface)',
        },
        ink: {
          DEFAULT: 'var(--color-text)',
          light: 'var(--color-text-muted)',
          muted: 'var(--color-text-muted)',
          subtle: 'var(--color-text-muted)',
        },
        clay: {
          DEFAULT: 'var(--color-secondary)',
          dark: 'var(--color-primary)',
          light: 'var(--color-secondary)',
          soft: 'var(--color-secondary-soft)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          light: 'var(--color-surface-card)',
          dark: 'var(--color-primary-soft)',
        },
      },
      fontFamily: {
        display: ['Baloo 2', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.35s ease-out forwards',
        slideUp: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
  fadeIn: {
    '0%': { opacity: '0', transform: 'translateY(8px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  slideUpFade: {
    '0%': { opacity: '0', transform: 'translateY(12px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  floatSlow: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-4px)' },
  },
},
    },
  },
  plugins: [],
}