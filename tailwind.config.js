/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    colors: {
      'nord-00': '#2B313C',
      'nord-0': '#2E3440',
      'nord-1': '#3B4252',
      'nord-2': '#434C5E',
      'nord-3': '#4C566A',
      'nord-4': '#D8DEE9',
      'nord-5': '#E5E9F0',
      'nord-6': '#ECEFF4',
      'nord-7': '#8FBCBB',
      'nord-8': '#88C0D0',
      'nord-9': '#81A1C1',
      'nord-10': '#5E81AC',
      'nord-11': '#BF616A',
      'nord-12': '#D08770',
      'nord-13': '#EBCB8B',
      'nord-14': '#A3BE8C',
      'nord-15': '#B48EAD',
    },
    extend: {
      animation: {
          fade: 'fadeOut 0.5s ease',
        },
        keyframes: theme => ({
          fadeOut: {
            '0%': {opacity: 0},
            '100%': {opacity: 100},
          },
        }),
      }
  },
  plugins: [],
};