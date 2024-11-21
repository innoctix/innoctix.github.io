/** @type {import('tailwindcss').Config} */
function withOpacity(cssVariable) {
  return ({ opacityValue }) => {
    return opacityValue ? `rgba(var(${cssVariable}), ${opacityValue})` : `rgb(var(${cssVariable}))`
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--primary"),
        secondary: withOpacity("--secondary"),
        bgColor: withOpacity("--bgColor"),
        textColor: withOpacity("--textColor"),
        headerColor: withOpacity("--headerColor"),
        subHeaderColor: withOpacity("--subHeaderColor"),
      },
      boxShadow:{
        box: "rgba(186, 186, 186, 0.25) 0 0 8px 6px",
      }
    },
  },
  plugins: [],
}