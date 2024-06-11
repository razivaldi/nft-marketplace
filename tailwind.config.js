/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary : '#A259FF'
      },
      fontFamily: {
        'spaceMono': ['Space Mono', 'sans-serif']
      }
    },
  },
  plugins: [],
}

