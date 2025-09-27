/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
       keyframes: {
        glowSlide: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        glowSlide: 'glowSlide 3s ease-in-out infinite',
      },

      screens: {
        'xs': '380px', 
      },
    
    },
  },
  plugins: [],
}


