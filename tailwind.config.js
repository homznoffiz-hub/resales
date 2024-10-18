/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightRed: "#C62026",
        darkRed: "#DC1C2E",
        white: "#FFFFFF",
        bgColor: "#F4F4F4",
        mediumBlue: "#7DA2E3",
        lightBlue: "#003DA5",
        fullDarkBlue: "#101A46",
        darkBlue: "#1A3668",
        darkGray: "#404041",
        mediumGray: "#C4C6C8",
        lightGray: "#626366",
        veryLightGreen: "#C6DFD9",
        lightGreen: "#376559",
        mediumGreen: "#62AE64",
        darkGreen: "#16C098",
        veryDarkGray: "#242124",
        bgAbout: "#F9F6F3;",
        formBg: "#281E41;",
        black: "#000000",
        strokecolor: " #EFF0F6",
        basewhite: "#FFFFFF",
        cusmtomgray: "#E0E4EC",
      },

      fontFamily: {
        Inter: ["Inter", "system-ui"],
        Montserrat: ["Montserrat", "system-ui"],
        Garamond: ["EB Garamond", "system-ui"],
        Crimson: ["Crimson Text", "serif"],
        Bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
