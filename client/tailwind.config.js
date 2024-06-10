

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-color':'#45F882'
      },
      backgroundImage:{
        'custom-background': "url[('./src/assets/headerBtnBg.svg')]"
      }
    },
    daisyui: {
      themes: ["night"],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

