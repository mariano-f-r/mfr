/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7a9b04',
        secondary: '#fcbc77',
        accent: '#8ef90d',
        foreground: '#fee4cf',
        background: '#1e1e1e',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-fira-code)'],
      },
    },
  },
  plugins: [],
}

