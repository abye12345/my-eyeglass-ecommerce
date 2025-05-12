/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%) rotate(-15deg)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translateX(0%) rotate(0deg)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translateX(100%) rotate(15deg)",
            opacity: "0.3",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        sweep: "sweep 1s ease-in-out",
        shimmer: "shimmer 1.5s ease-in-out",
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
