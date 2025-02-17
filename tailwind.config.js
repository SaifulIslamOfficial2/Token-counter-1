/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontfamily: {
        'lato': ["Lato"," sans-serif"]
      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

