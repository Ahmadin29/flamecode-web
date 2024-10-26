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
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "#1D4ED8",

        "fill-100": '#1C1C27',
        "fill-300": '#28293D',
        "fill-500": '#3D3E5C',

        stroke: '#51537B',
        warning: '#FCD62A',
        error: '#FF422D',

        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
