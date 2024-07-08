/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,md,png}"],
  options: {
    safelist: ['html', 'body'],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  assetsInclude: ['**/*.png']
}

