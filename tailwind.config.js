module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      sm: '8px',
      md: '18rem',
      logo: '48px',
      xl: '36rem',
      hero: '48rem',
      96: "32rem"

    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '2100px',
      // => @media (min-width: 1800px) { ... }
    },
    colors: {
      white: "#fff",
      black: "#000",
      primary: {
        "200": "#437bfe",
        "400": "#2945FF",
        "800": "#1E3A8A",

      },
      darkBlue: "#0a2540",
      lightBlue: "#78a5ff",
      greyBlue: "#455b70",
      grey: "#828282",
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
