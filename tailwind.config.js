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
        black: '#000',
        primary: '#F7ECEB',
        // bg color
        secondary: '#2b2d42',
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
