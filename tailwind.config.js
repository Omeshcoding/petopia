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
        primary: '#F7ECEB',
        secondary: '#2b2d42',
        white: '#F0F1F7',
        lightGray: '#DADBE6',
        darkGray: '#9597A6',
        lightBrown: '#E6DBDA',
        darkbrown: '#B8817D',
        cream: '#EBD0CE',
        darkBlue: '#636780',
      },
      letterSpacing: {
        widest: '.4rem',
      },
      lineHeight: {
        wider: '3rem',
      },
    },
  },
  plugins: [],
};
