/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui:{
    darkTheme: "dark",
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        'nprogress':' 0 0 10px var(--p), 0 0 5px var(--p)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}
