/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-850': '#0C1617',
        'primary-500': '#DFAD9A',
        'secondary-500': '#E4DEDE',
        'secondary-400': '#FBFFF8',
      },
      backgroundImage: {
        noise: "url('./assets/icons/Шум.png')",
        blic1: "url('./assets/bg/blik1.png')",
        blic2: "url('./assets/bg/blik2.png')",
        blicForBril: "url('./assets/bg/blikForBrill.png')",
        StarsWithLine: "url('./assets/photo/Звездочки с палочкой.png')"
      },
      fontFamily: {
        geo: ['Geometria', 'sans-serif'],
        geoMed: ['GeometriaMedium', 'sans-serif'],
        geoItal: ['GeometriaItalic', 'sans-serif'],
        bergamasco: ['Bergamasco', 'sans-serif'],
      },
      content: {},
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
      xl: '1300px',
      '2xl': '1500px',
    },
  },
  plugins: [],
}
