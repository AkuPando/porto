/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  safelist: [
    "blur-[0px]",
    "blur-[2px]",
    "blur-[4px]",
    "blur-[8px]",
  ],

  theme: {
    extend: {
      keyframes: {
        loadingPulse: {
          "0%": { filter: "blur(0px)", opacity: "1" },
          "50%": { filter: "blur(4px)", opacity: "0.6" },
          "100%": { filter: "blur(0px)", opacity: "1" },
        },
      },
      animation: {
        loadingPulse: "loadingPulse 1.5s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
