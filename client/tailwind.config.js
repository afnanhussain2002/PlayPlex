

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-color':'#45F882',
        'sec-color': '#131A23',
        'three-color':'#FFCC67'
      },
      backgroundImage:{
        'custom-background': "url[('./src/assets/headerBtnBg.svg')]"
      },
      boxShadow: {
        '3xl': '-1px 5px 0px rgba(69, 248, 130, 0.66)',
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

