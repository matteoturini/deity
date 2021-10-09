module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,svelte}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      shadow: ['active', 'hover']
    },
  },
  plugins: [],
}
