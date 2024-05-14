/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#00abf0",
        secondary: "#141e33",
        third: "#27052e",
        fourth: "#C8B6F8",
        fifth: "#8C2DE0",
        gray: "#94A3B8",
        grayStrong: "#454545ad",
      },
    },
  },
  plugins: [],
};
