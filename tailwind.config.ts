import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C6CFF",
          light: "#A0A8FF",
          dark: "#000047",
          hover: "#675BF9",
        },
        secondary: {
          DEFAULT: "#4C516D",
          light: "#747d8c",
          dark: "#303952",
        },
        tertiary: {
          DEFAULT: "#F53B57",
          light: "#FEA3AD",
          dark: "#891235",
        },
        typography: {
          light: "#F0F8FF",
          dark: "#0C2340",
          title: "#000033",
          muted: "#9AA5B1",
        },
        background: {
          light: "#E0E0FF",
          dark: "#00001F",
        },
      },
      keyframes: {
        blinking: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        sliding: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fading-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fading-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "rotate-up": {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
            borderRadius: "0",
          },
          "100%": {
            transform: "translateY(-1000px) rotate(720deg)",
            opacity: "0",
            borderRadius: "50%",
          },
        },
      },
      animation: {
        blink: "blinking 1s ease-in-out infinite",
        slide: "sliding 0.5s ease-in-out",
        "fade-in": "fading-in 0.5s ease-in",
        "fade-out": "fading-out 0.5s ease-out",
        "rotate-up": "rotate-up 25s linear infinite",
      },
    },
    fontFamily: {
      primary: [`var(--font-poppins)`, `sans-serif`],
      secondary: [`var(--font-ubuntu)`, `sans-serif`],
    },
    screens: {
      xs: "378px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
} satisfies Config;
