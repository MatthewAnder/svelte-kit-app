const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,css,svelte,ts}'],
  theme: {
    color: {
      'black': '#0a0a0b',
      'silver': '#2e3038',
    },
    fontFamily: {
      'sans-serif': 'Inter, sans-serif',
      'serif': 'Prata, serif',
    },
    screens: {
      'phone': '100px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    
    extend: {},
  },
  plugins: [],
}
