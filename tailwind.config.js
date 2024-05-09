/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/*.css',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'Jersey': ['"Jersey 25 Charted"', 'sans-serif'],
    },
  },
  plugins: [],
  
}

