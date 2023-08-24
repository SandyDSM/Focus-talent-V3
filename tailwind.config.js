/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'bmb-blue': '#0161A7',
        'bmb-blue-20': '#C0D1DE',
        'bmb-secundary': '#3F78E9',
        'bmb-grey-10': '#FAFAFA'
      },
    }
  },
  plugins: [],
}
