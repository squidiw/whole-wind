/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,css}', './layout/**/*.{liquid,json}', './sections/**/*.{liquid,json}', './snippets/**/*.{liquid,json}', './templates/**/*.{liquid,json}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '670px',
        'md': '769px',
        'lg': '1024px',
        '1080': '1080px',
        'xl': '1200px',
        '2xl': '1320px',
        '3xl': '1440px'
      }
    },
  },
  plugins: [],
}

