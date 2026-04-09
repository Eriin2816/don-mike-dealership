/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          royal: '#1A56DB',
          royalDark: '#1547C0',
          navy: '#1E3A5F',
          steel: '#4A7DB5',
          light: '#EBF3FF',
          pale: '#F0F6FF',
          silver: '#C8D6E5',
          white: '#FFFFFF',
          offwhite: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'Barlow', 'sans-serif'],
        display: ['var(--font-barlow-condensed)', 'Barlow Condensed', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
        display: '-0.03em',
        wide: '0.08em',
        wider: '0.12em',
      },
      lineHeight: {
        body: '1.75',
        relaxed: '1.7',
        snug: '1.2',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.06)',
        'card-hover': '0 4px 12px rgba(15,23,42,0.06), 0 16px 40px rgba(15,23,42,0.1)',
        blue: '0 4px 24px rgba(26,86,219,0.25)',
        'blue-lg': '0 8px 40px rgba(26,86,219,0.3)',
        navy: '0 4px 24px rgba(30,58,95,0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
