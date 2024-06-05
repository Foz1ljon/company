/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "40px",
    },

    extend: {
      screens: {
        sm: "310px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        bgGr: "linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)",
      },
      colors: {
        dblue: "#1C1E53",
        darkBlue: "#282938",
        orang: "#FCD980",
        deepBlue: "#282938",
        
      },
    },
  },
  plugins: [],
};
