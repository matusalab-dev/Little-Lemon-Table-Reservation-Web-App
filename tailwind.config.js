/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F4CE14",
          200: "#495E57",
        },
        secondary: {
          100: "#EE9972",
          200: "#FBDABB",
          300: "#EDEFEE",
          400: "#333333",
        },
      },
      fontFamily: {
        primary: ["Markazi Text, serif"],
        secondary: ["Karla, sans-serif"],
      },
      gridTemplateColumns: {
        galleryCol: "repeat(auto-fit,minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        galleryRow: "minmax(400px, min-content)",
      },
      borderColor: "#495E57",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
