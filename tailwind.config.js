/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Overpass"]
    },

    extend: {
      backgroundColor: {
        "very-dark-blue": "#131518",
        "black-gradient": "hsl(213, 19%, 18%)",
        "star-bg": "hsl(211, 19%, 24%)",
        "orange": "#FC7614",
        "medium-grey": "#7C8798",
      },
      colors: {
        "light-grey": "#969FAD",
        "medium-grey": "#7C8798",
        "orange": "#FC7614"
      },
      padding: {
        "14": "14px",
        "22": "22px",
        "11px": "11px"
      },
      margin: {
        "30": "30px",
        "44px": "44px"
      },
      borderRadius: {
        "32": "32px"
      },
      width: {
        "412": "412px",
      },
      height: {
        "416": "416px"
      }
    },
  },
  plugins: [],
}