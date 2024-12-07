/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#99815B",
        secondary: "#bbac89",
        third: "#dca47c",
        blue: "#102C57",
        gray: "#7A7D72",
      },
    },
  },
  plugins: [],
};
