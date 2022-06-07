const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', 'src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'custom-md': '900px',
        'custom-lg': '1080px',
      },
    },
  },
  plugins: [],
};
