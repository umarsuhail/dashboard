import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#11a56f",
        foreground: "var(--foreground)",
        primary:"#00885A",
        secondary_bg:"#ECF3EC"
      },
    },
  },
  plugins: [],
};
export default config;
