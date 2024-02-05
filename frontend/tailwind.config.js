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
    boxShadow: {
      txt: '2px 2px #000',
    },
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
      'lightred': '#f87171',
      'red': '#dc2626',
      'orange': '#fbbf24',
      'yellow': '#facc15',
      'green': '#10b981',
      'teal': '#14b8a6',
      'blue': '#3b82f6',
      'indigo': '#6366f1',
      'purple': '#8b5cf6',
      "berige": "#d9b382",
      "dark": "#1a1a1a",
      "gray": "#3a3b3c",
      

    },
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
      'mono': ['Inconsolata', 'Menlo', 'Monaco', 'monospace'],
    },
  },
},
  variants: {},
  plugins: [],
}
