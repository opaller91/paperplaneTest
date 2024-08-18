/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
    './node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: false, 
  theme: {
    fontFamily: {
      sans: ['"Microsoft Sans Serif"', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      screens: {
        '4xl': '1920px',
      },
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
         'slide-left-infinite': 'slide-left 20s linear infinite',
         'slide-up': 'slideUp 0.5s ease-in-out',
         'slide-down': 'slideDown 0.5s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};