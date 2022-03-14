module.exports = {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['dark'],
  },
};
