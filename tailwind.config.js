/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat"],
        "lato": ["Lato"],
      },
      screens: {
        "custom": "1410px",
        "custom2": "2340px",
      },
    },
  },
  plugins: [],
};

