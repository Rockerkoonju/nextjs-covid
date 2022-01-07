module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': 'var(--text-color)' ,
        'secondary':'var(--text-color-secondary)',
        'dark-bg':'var(--background-color-dark)',
        'light-bg':'var(--background-color-light)',
        'primary-color':'var(--primary-color)',
      },
    },
    fontFamily: {
      'Nunito': ['Nunito', "sans-serif"],
      'Mitr': ['Mitr','sans-serif'],
    },
  },
  plugins: [],
}
