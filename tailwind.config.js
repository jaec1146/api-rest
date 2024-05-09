/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/*.css'
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dog': "url("+URL+")",
      }
    },
  },
  plugins: [],
}

