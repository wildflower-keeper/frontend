import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: "#00B226",
        fontDefault: "#353535",
        fontWeak: "#999999",
        secondary: "#FFBA0A",
        borderDefault: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
export default config;
