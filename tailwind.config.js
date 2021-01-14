module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#455D8C",
        secondary: "#0F1926",
        deepBlue: "#0F1926",
        opaqueBlue: "#344F73",
        ocre: "#BF8C2C",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      borderWidth: ["hover"],
    },
  },
  plugins: [],
};
