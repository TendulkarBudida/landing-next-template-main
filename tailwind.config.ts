import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "1.3rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "1.8rem",
      xl: ["2.2rem", "1.3"],
      "2xl": "2.4rem",
      "3xl": "2.6rem",
      "4xl": "3.2rem",
      "5xl": "4rem",
      "6xl": ["4.4rem", "1.1"],
      "7xl": ["4.8rem", "1.1"],
      "8xl": ["8rem", "1.1"],
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      15: "6rem",
      16: "6.4rem",
      17: "6.8rem",
      18: "7.2rem",
      19: "7.6rem",
      20: "8rem",
      "navigation-height": "var(--navigation-height)",
    },

    backgroundImage: {
      "page-gradient":
        "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(59, 130, 246, 0.1), transparent)",
    },

    extend: {
      colors: {
        transparent: "transparent",
        "transparent-white": "rgb(255 255 255 / 0.1)",
        background: "#ffffff",
        "off-white": "#f8f9fa",
        primary: "#1e293b",
        grey: "#64748b",
        "grey-dark": "#334155",
        "primary-text": "#475569",
        brand: "#3b82f6",
      },
    },

    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",

      "infinite-scroll":
        "infinite-scroll var(--animation-delay) linear infinite ",
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
      "image-rotate": "image-rotate 1400ms ease forwards",
      "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",

      marquee: "marquee var(--duration) linear infinite",
      "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      bounce: "bounce 8s infinite",
    },
    keyframes: {
      bounce: {
        "0%, 100%": {
          transform: "translateY(-10%)",
          "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
        },
      },

      spotlight: {
        "0%": {
          opacity: "0",
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: "1",
          transform: "translate(-50%,-40%) scale(1)",
        },
      },

      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
      "marquee-vertical": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(calc(-100% - var(--gap)))" },
      },

      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-50%)" },
      },
      "border-beam": {
        "100%": {
          "offset-distance": "100%",
        },
      },

      "fade-in": {
        from: { opacity: "0", transform: "translateY(-10px)" },
        to: { opacity: "1", transform: "none" },
      },
      "image-rotate": {
        "0%": { transform: "rotateX(25deg)" },
        "25%": { transform: "rotateX(25deg) scale(0.9)" },
        "60%": { transform: "none" },
        "100%": { transform: "none" },
      },
    },
  },
  plugins: [],
} satisfies Config;
