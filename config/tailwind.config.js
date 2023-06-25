/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e47070',
      },
      fontFamily: {
        'bagel': ['Bagel Fat One', 'cursive'],
        'balsamiq': ['Balsamiq Sans', 'cursive'],
      },
    },
  },
  plugins: [],
}