/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-white': 'white', // Add custom color
      },
      fontFamily : {
        poppins :['Poppins','sans-serif',]
      }
    },
   
  },
  plugins: [
    require('daisyui'),
  ],
}

