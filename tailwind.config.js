/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
    colors: {
      // Primary
      softorange:   '#e9ab53',
      softred:      '#f15e50',
      // Neutral
      offwhite:     '#fffdfa',
      grayishblue:  '#5d5f79',
      darkblue:     '#00001a',
    }
  },
  plugins: [],
}

