/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xl: '1200px',
    },
    fontFamily: {
      gotham: ['Gotham', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
