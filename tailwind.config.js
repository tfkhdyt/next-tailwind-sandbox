module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  safelist: [
    {
      pattern: /(bg|shadow|from|to)-*-*/,
      variants: ['hover'],
    },
  ],
}
