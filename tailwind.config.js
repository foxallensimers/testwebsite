/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "textColor":"#707070",
        "secondary":"#d0ae5e",
        "black":"#000000",
        "primary":"#ef3824",
        "orange":"#f2682d",
        "darkColor":"#f4a664",
        "darkGray":"#f1d3a6",
        "white":"#ffffff"

      }
    },
  },
  plugins: [],
}