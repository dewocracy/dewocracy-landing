// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      primary: "#2945ff",
      darkBlue: "#0a2540",
      lightBlue: "#78a5ff",
      greyBlue: "#455b70",
      grey: "#bbb",
      teal: "#75dddd",
      purple: "#8d78ff",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      width: {
        200: "200%",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.5 },
        },
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
