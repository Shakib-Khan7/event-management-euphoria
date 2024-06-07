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
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

