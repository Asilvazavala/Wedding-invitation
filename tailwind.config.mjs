/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#d48b63",
        secondary: "#dca47c",
        third: "#dca47c",
        blue: "#102C57",
        gray: "#aeb1a4",
      },
    },
  },
  plugins: [],
};
