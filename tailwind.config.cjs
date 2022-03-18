module.exports = {
  content: ["./src/**/*.{html,svelte}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
