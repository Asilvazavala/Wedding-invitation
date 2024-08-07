/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3468C0",
        secondary: "#86A7FC",
        third: "#b28405",
        gray: "#909484",
      },
    },
  },
  plugins: [],
};
