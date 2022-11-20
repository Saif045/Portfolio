/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
