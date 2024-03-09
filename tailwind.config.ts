import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          default: "#5352ED",
          light: "#6867F2",
          dark: "#4645D2",
        },
        secondary: {
          default: "#54B6F0",
          light: "#7ECAF8",
          dark: "#47A0D4",
        },
        white: {
          default: "#F1F1F6",
          light: "#6867F2",
          dark: "#F5F5F9",
        },
        black: {
          default: "#141418",
          light: "#333337",
          dark: "#0F0F12",
        },
        gradient: {
          primary:
            "linear-gradient(90deg, rgba(104,103,242,1) 0%, rgba(70,115,210,1) 100%)",
          secondary:
            "linear-gradient(90deg, rgba(55,55,65,1) 0%, rgba(83,82,237,1) 100%);",
          light:
            "linear-gradient(90deg, rgba(241,241,246,1) 0%, rgba(211,211,215,1) 100%);",
          dark: "linear-gradient(90deg, rgba(20,20,24,1) 0%, rgba(51,51,55,1) 100%);",
        },
      },
    },
  },
  plugins: [],
};
export default config;
