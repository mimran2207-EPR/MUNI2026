/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        muni: {
          deep: '#0F3D5C',
          dark: '#16557A',
          primary: '#1F87C7',
          accent: '#2DB6E0',
          light: '#E8F4FA',
          bg: '#F4F8FB',
          text: '#1A2B3C',
          muted: '#6B7B8A'
        }
      },
      fontFamily: {
        heebo: ['Heebo', 'Assistant', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 4px 24px rgba(15, 61, 92, 0.08)',
        cardHover: '0 8px 32px rgba(15, 61, 92, 0.14)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F3D5C 0%, #16557A 45%, #2DB6E0 100%)'
      }
    }
  },
  plugins: []
};
