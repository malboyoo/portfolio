/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-1": "#2D2E32",
        "dark-2": "#25262A",
        "dark-3": "#14130E",
        green: "#4DBA87",
        gray: "#777777",
        code: "#1E1E1E",
        variable: "#9CDCFE",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatingR: {
          "0%, 100%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(0px)" },
        },
        fromRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(200px)",
          },
          "100%": {
            opacity: 1,
          },
        },
        fromLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-200px)",
          },
          "100%": {
            opacity: 1,
          },
        },
        fromRightFar: {
          "0%": {
            opacity: 0,
            transform: "translateX(300px)",
          },
          "100%": {
            opacity: 1,
          },
        },
        fromLeftFar: {
          "0%": {
            opacity: 0,
            transform: "translateX(-300px)",
          },
          "100%": {
            opacity: 1,
          },
        },
        fromBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(200px)",
          },
          "100%": {
            opacity: 1,
          },
        },
        fromTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(-200px)",
          },
          "100%": {
            opacity: 1,
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
        fromRight: "fromRight 0.5s forwards ease-in-out",
        fromRightSlow: "fromRight 1.2s forwards ease-in-out",
        fromRightFarSlow: "fromRightFar 1.2s forwards ease-in-out",
        fromLeft: "fromLeft 0.5s forwards ease-in-out",
        fromLeftSlow: "fromLeft 1.2s forwards ease-in-out",
        fromLeftFarSlow: "fromLeftFar 1.2s forwards ease-in-out",
        fromBottom: "fromBottom 0.5s forwards ease-in-out",
        fromTop: "fromTop 0.5s forwards ease-in-out",
        appear: "appear 3s forwards",
      },
      screens: {
        tall: { raw: "(min-height: 779px)" },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
