module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: { fontFamily: {
    'montserrat': ['Montserrat', 'sans-serif'], // Ensure the Montserrat font is imported in your CSS or HTML
  },},
  extend: {},
  
  variants: {
    extend: {},
  },
  plugins: [],
};

