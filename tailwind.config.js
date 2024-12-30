/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'bmb-blue': '#0000B3',
        'bmb-blue-20': '#8181D9',
        'bmb-secundary': '#406ABF',
        'bmb-grey-10': '#FAFAFA',
        'tab-text':'#8E8E93',
        'clas1-blue':'#5393FB',
        'clas2-blue':'#00CDFF',
        'clas3-green':'#77E790',
        'clas4-purple':'#7B89E2',
        'clas5-orange':'#DD6F49',
        'hover':'#DAEFF3'
      },
    }
  },
  plugins: [],
}
