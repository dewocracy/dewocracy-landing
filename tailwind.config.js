// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      white: "#fff",
      black: "#000",
      primary: "#2945FF",
      darkBlue: "#0a2540",
      lightBlue: "#78a5ff",
      greyBlue: "#455b70",
      grey: "#bbb",
      lightGrey: "#eee",
      teal: "#75dddd",
      purple: "#8d78ff",
      success: "#19CB76",
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
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
