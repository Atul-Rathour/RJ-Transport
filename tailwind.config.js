/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray : '#2E2F32E0',
        textGray : 'rgba(255, 255, 255, 0.88)',
        bgGray : '#0F1011'
      },

      animation: {
        marquee  : 'marquee 40s linear infinite',
        marquee2  : 'marquee2 40s linear infinite'
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },

      screens:{
        mobile: '350px'
      }

    },
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.animation-pause' : {
          'animation-play-state' : 'paused'
        }
      })
    }
  ],
}