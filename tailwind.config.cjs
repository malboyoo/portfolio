/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-1": "#2D2E32",
        "dark-2": "#25262A",
        green: "#4DBA87",
        gray: "#777777",
        code: "#1E1E1E",
        variable: "#9CDCFE",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floatingR: {
          "0%, 100%": { transform: "translateY(-15px)" },
          "50%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        floating: "floating 6s ease-in-out infinite",
        floatingR: "floatingR 6s ease-in-out infinite",
      },
      screens: {
        tall: { raw: "(min-height: 779px)" },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
