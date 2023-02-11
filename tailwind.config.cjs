/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik"
      },
      colors: {
        primary: {
          100: "#5C5C5C",
          200: "#333333",
          300: "#1F1F1F",
          500: "#633BBC",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
