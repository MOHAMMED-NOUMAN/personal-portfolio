/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"], // Fixed path (added slash, removed extra brace)
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}