module.exports = {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3696D5"
      },
      fontFamily:{
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}