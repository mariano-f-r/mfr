/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#f37472",
        primary: "#88a10e",
        foreground: "#fef6e3",
        background: "#060101",
      },
      fontFamily: {
        sans: ["var(--font-figtree)"],
        mono: ["var(--font-fira-code)"],
      },
    },
  },
  plugins: [],
};
