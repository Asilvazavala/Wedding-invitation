/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#c59872",
        secondary: "#d8ba99",
        third: "#d8ba99",
        blue: "#102C57",
        gray: "#909484",
      },
    },
  },
  plugins: [],
};
