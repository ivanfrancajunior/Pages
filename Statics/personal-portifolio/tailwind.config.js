/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      spacing: {
        '500px': '500px', 
        '376px': '376px',
        '330px': '330px',
        '340px': '340px',
        '277px': '277px',
        '210px': '210px',
        '158px': '158px', 
        '124px': '124px',
        '106px': '106px',
        '50px' : '50px', 
        '10px' : '10px', 
      },
      fontFamily: {
       'Poppins': 'Poppins',
      }
    },
  },
  plugins: [],
}
