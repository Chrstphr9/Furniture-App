/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/img/hero-bg.png')", // Adjust the path to match your image location
      }
    },
  },
  // plugins: [require("daisyui")],
}

