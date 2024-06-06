/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#035933",
        "primary-light": "#ADC522",
        "primary-dark": "#99cc33",
        secondary: "#99cc33",
        grey: "#484743",
        dark: "#181A1E",
      },
    },
  },
  plugins: [],
};
