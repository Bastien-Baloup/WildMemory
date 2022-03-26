const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': colors.orange,
        'forest': '#364e3a'
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
      }
    }
  }
}
