/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xx: "320px",
        xs: "412px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1024px",
        xl: "1700px",
      },
      backgroundImage: {
        'hero': "url('./src/assets/img/hero-bg.png')", // Adjust the path to match your image location
      }
    },
  },
  // plugins: [require("daisyui")],
}

