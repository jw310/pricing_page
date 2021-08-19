module.exports = {
  mode: 'jit',
  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#4f3cc9',
        'primary': '#4232aa',
        'secondary': '#ffffff'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
