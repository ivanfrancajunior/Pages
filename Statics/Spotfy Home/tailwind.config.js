/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '14': '3.5rem',
        '125px':'125px'
      },
      colors:{
        'hoverpt':'#18d760',
        'purple-main':'#2d46b9',
        'green-main':'#1ed760'
      },
      backgroundImage: {
        'spotify-theme': "url('../src/img/bursts.png')",
        'spotify-theme-mobile': "url('../src/img/burst-mobile.png')"
      },
      backgroundSize:{
        '175%':'175%',
        '195%': '195%'
      },
      backgroundPosition:{
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize:{
        '9xl':'9rem'
      }
    },
  },
  plugins: [],
}
