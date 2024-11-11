/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      satoshi: ["Satoshi"],
      roxborough: ["Roxborough"],
      gt: ["GT"]
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        'background': {
          DEFAULT: '#151515',
          black: '#151515'
        },
        'primary': {
          DEFAULT: '#FFFDED'
        }
      },
    },
  },
  plugins: [],
}



// https://docs.google.com/document/d/1isMTWueQHa6e5sehO5AAls_CbOLC_C8Dno9kmiSdL9o/edit

// - Weights: 400, 700