/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "5xl": "5rem",
      },
      dropShadow: {
        DEFAULT: "0 15px 10px rgba(0, 0, 0, 0.25)",
      },
      minWidth: {
        48: "12rem",
        "4/12": "33.333333%",
      },
      maxWidth: {
        "1/2": "50%",
        "3/5": "60%",
      },
      height: {
        85: "80vh",
      },
    },
    colors: {
      primary: {
        DEFAULT: "#2C3246",
      },
      secondary: {
        dark: "#999999",
        DEFAULT: "#9195A0",
        light: "#D9D9D9",
        lightest: "#EEEEEE",
      },
      action: {
        DEFAULT: "#50A8EA",
      },
      error: {
        DEFAULT: "#FF7272",
      },
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
