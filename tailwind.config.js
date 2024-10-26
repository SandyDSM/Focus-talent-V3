/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'bmb-blue': '#0000B3',
        'bmb-blue-20': '#8181D9',
        'bmb-secundary': '#406ABF',
        'bmb-grey-10': '#FAFAFA'
      },
    }
  },
  plugins: [],
}
