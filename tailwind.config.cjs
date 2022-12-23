/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Primary */
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        /* Neutral */
        "light-grayish-cyan-(Background)": "hsl(180, 52%, 96%)",
        "light-grayish-cyan-(Filter-Tablets)": "hsl(180, 31%, 95%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
      fontSize: {
        "semi-base": "15px",
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 0.5s forwards",
        "fade-out": "fade-out 0.5s forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
