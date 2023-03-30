/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#12145F",
        secondary: "#051984",
        red: "#E7455B",
        accent: "#E7455B",
        home: "#E7E9F2",
        gray: { DEFAULT: "#F1F1F1" },
      },
      fontSize: {
        xxs: "0.563rem", // 9px
        xs: "0.688rem", // 11px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        md: "1.125rem", // 18px
        lg: "1.25rem", // 20px
        xl: "1.5rem", // 24px
        "2xl": "1.875rem", // 30px
        "3xl": "2.25rem", // 36px
        "4xl": "3.125rem", // 50px
        "5xl": "4.375rem", //70px
        xxl: "6.250rem", //100px
        xxxl: "10rem",
      },
      screens: {
        "4xl": "2020px",
      },
      animation: {
        "spin-slow": "spin 70s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms")],
};
