/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        /* ── Brand ── */
        'bmb-blue':        '#0000B3',
        'bmb-blue-hover':  '#0000CC',
        'bmb-blue-light':  '#E8E8F7',
        'bmb-blue-20':     '#8181D9',
        'bmb-secundary':   '#406ABF',
        'bmb-secundary-hover': '#3560AD',
        'bmb-grey-10':     '#FAFAFA',
        'tab-text':        '#8E8E93',
        'hover':           '#DAEFF3',
        /* ── Talent categories ── */
        'clas1-blue':   '#5393FB',
        'clas2-blue':   '#00CDFF',
        'clas3-green':  '#77E790',
        'clas4-purple': '#7B89E2',
        'clas5-orange': '#DD6F49',
        /* ── UI semantic ── */
        'surface':      '#FFFFFF',
        'surface-muted':'#F5F5F8',
        'border-subtle':'#E2E4ED',
        'text-primary': '#1A1A2E',
        'text-secondary':'#4A4A6A',
        'text-muted':   '#8E8E93',
      },
      boxShadow: {
        'card':   '0 1px 4px 0 rgba(0,0,179,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px 0 rgba(0,0,179,0.12), 0 2px 4px -1px rgba(0,0,0,0.06)',
        'panel':  '0 0 0 1px rgba(226,228,237,1), 0 2px 8px 0 rgba(0,0,0,0.05)',
      },
      borderRadius: {
        'card': '10px',
      },
      fontSize: {
        'xs2': ['0.6875rem', { lineHeight: '1rem' }],
      },
      transitionDuration: {
        '180': '180ms',
      },
      scale: {
        200: '2',
      },
    }
  },
  plugins: [],
}
