/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
    './node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  darkMode: false, 
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

