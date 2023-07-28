/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const brown100 = "#FBF2EA";
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.333rem;",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.157rem",
      "5xl": "4.209rem",
      display: "6rem",
    },
    extend: {
      colors: {
        "puxi-primary": {
          100: brown100,
          500: "#9B5B22",
          800: "#563110",
        },
        "puxi-secondary": "#58CEDE",
        "puxi-background": brown100,
      },
      fontFamily: {
        body: ['"Nunito"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
