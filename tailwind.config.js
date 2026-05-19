/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        serif: ['"Crimson Pro"', 'serif'],
      },
      colors: {
        void: '#0a0808',
        deep: '#0f0c0c',
        surface: '#141010',
        elevated: '#1c1717',
        glass: '#231d1d',
        ember: '#8b1a1a',
        crimson: '#a91b1b',
        vivid: '#c42020',
        bright: '#d93030',
        wine: '#6b1515',
        burgundy: '#4a0f0f',
      },
    },
  },
  plugins: [],
}
