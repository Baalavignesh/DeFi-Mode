/** @type {import('tailwindcss').Config} */

export default {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      'primary': '#D6FF00',
      'secondary': '#346DDB',
      'secondary-2':'#307F98',
      'custom-grey': '#22272E',
      'custom-white':'#f2f2f2',
      'custom-black': '#14181C',
      'custom-red':'#FF1200'
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },

  },

  plugins: [],

};
