import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#181B1F", // Kong Dark Grey
        foreground: "#F6F8F9", // Kong Bright Gray
        primary: {
          DEFAULT: "#0057FF", // Kong Primary Blue
          foreground: "#F6F8F9",
        },
        card: {
          DEFAULT: "#23262B",
          foreground: "#F6F8F9",
        },
        popover: {
          DEFAULT: "#23262B",
          foreground: "#F6F8F9",
        },
        secondary: {
          DEFAULT: "#23262B",
          foreground: "#F6F8F9",
        },
        muted: {
          DEFAULT: "#23262B",
          foreground: "#A3A9B3",
        },
        accent: {
          DEFAULT: "#0057FF",
          foreground: "#F6F8F9",
        },
        destructive: {
          DEFAULT: "#E5484D",
          foreground: "#F6F8F9",
        },
        border: "#23262B",
        input: "#23262B",
        ring: "#0057FF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
