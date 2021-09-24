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
      primary: {
        "400": "#2945FF",
        "800": "#1E3A8A",

      },
      darkBlue: "#0a2540",
      lightBlue: "#78a5ff",
      greyBlue: "#455b70",
      grey: "#bbb",
      lightGrey: "#eee",
      teal: "#75dddd",
      purple: {
        "600": "#7C3AED",
        "700": "#6D28D9",
        "800": "#1e3a8a14"
      },
      yellow: {
        "100": "#ffe5ada6"
      },
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
