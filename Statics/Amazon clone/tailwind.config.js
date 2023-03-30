/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{html,js}" ],
  theme: {
    extend: {
      fontFamily: {
        'arial': 'Arial'
      }, 
      colors: {
        'darkblue-500': '#485769',
        'darkblue-600': '#37475a',
        'darkblue-700': '#232F3E',
        'darkblue-900': '#191E26',
        'darkblue-950': '#131A22',
        'gold-100'    : '#febd69',
        'gold-200'    : '#faa63a',
        'orange-650'  :'#e47911',
        'yellow-350'  : '#f0c14b',

      },
      spacing: {
        '7': '1.75rem',
        '75px': '75px',
        '210px': '210px',
      }
    },
  },
  plugins: [],
}
