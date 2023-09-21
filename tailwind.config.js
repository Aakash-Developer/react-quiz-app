/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Black Ops One", "cursive"],
        title2: ["Edu SA Beginner", "cursive"],
        roboto: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
