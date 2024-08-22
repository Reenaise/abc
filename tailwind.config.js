/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '50/50': '50% 58%',
      },
        colors: {
        customGreen:'#3a9e25' , // Define your custom green color here
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
