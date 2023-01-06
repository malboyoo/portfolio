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
        fromRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(200px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        fromLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-200px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        fromBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(200px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        fromTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(-200px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        appear: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        floating: "floating 6s ease-in-out infinite",
        floatingR: "floatingR 6s ease-in-out infinite",
        fromRight: "fromRight 0.5s forwards",
        fromRightSlow: "fromRight 1.5s forwards",
        fromLeft: "fromLeft 0.5s forwards",
        fromLeftSlow: "fromLeft 1s forwards",
        fromBottom: "fromBottom 0.5s forwards",
        fromTop: "fromTop 0.5s forwards",
        appear: "appear 3s forwards",
      },
      screens: {
        tall: { raw: "(min-height: 779px)" },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
