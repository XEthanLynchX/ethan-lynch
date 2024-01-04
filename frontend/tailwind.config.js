/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.jsx"],

  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: ["./src/components/**/*.jsx"], // We need to specify files where we look for classes, because Tailwind doesn't know about JSX
  theme: {
    extend: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'lightred': '#f87171'

    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
    },
  },
},
  variants: {},
  plugins: [],
}
