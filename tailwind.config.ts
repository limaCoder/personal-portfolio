import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        custom_primary: {
          DEFAULT: "#5352ED",
          light: "#6867F2",
          dark: "#4645D2",
        },
        custom_secondary: {
          DEFAULT: "#54B6F0",
          light: "#7ECAF8",
          dark: "#47A0D4",
        },
        custom_white: {
          DEFAULT: "#F1F1F6",
          light: "#6867F2",
          dark: "#F5F5F9",
        },
        custom_black: {
          DEFAULT: "#141418",
          light: "#333337",
          dark: "#0F0F12",
        },
        custom_gradient: {
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
  plugins: [require("tailwindcss-animate")],
};
export default config;
