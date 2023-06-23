/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '500px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fill-sm': 'repeat(auto-fill, minmax(300px, 1fr))',
      },},
  },
  plugins: [],
};
