/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '14' : '3.5rem',
        '125px':'125px'
      },
      colors:{
        'hoverpt':'#18d760',
        'purple-main':'#2d46b9',
        'green-main':'#1ed760'
      },
      backgroundImage: theme =>({
        'spotfy-theme':'url("/assets/bursts.svg")',
        'spotfy-theme-mobile':'url("/assets/bursts-mobile.svg")',
      }),
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
