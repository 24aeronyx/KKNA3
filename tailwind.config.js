/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      colors: {
        customGreen: "#96a756",
        customYellow: "#ccdb9c",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
