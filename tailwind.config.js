/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lobsterTwo: ['Lobster Two', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
      colors: {
        primary: '#424242',
        primary1: '#000000',
        primary2: '#FFFFFF',
        secondary: '#e63945;',
        secondaryShade: '#ee747d',
        secondary1: '#faab34',
      },
    },
  },
  plugins: [],
};
