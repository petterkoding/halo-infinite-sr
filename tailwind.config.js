module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"]
      },
      backgroundImage: {
        'john117': "url('/john.png')",
      }
    },
  },
  plugins: [],
}
