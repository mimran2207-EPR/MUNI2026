/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        muni: {
          primary: '#027DB3',
          secondary: '#83DFE8',
          accent: '#5CEBBE',
          light: '#E6F2F7',
          gray6: '#625F68',
          darkgray: '#484848',
          tertiary: '#B3B3B3'
        }
      },
      fontFamily: {
        rubik: ['Rubik', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        search: '0px 16px 16px 0px rgba(2, 125, 179, 0.2)',
        card: '0px 4px 24px rgba(2, 125, 179, 0.08)'
      },
      borderRadius: {
        card: '36px'
      }
    }
  },
  plugins: []
};
