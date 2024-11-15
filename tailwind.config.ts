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
        primary: "rgb(40, 40, 40)", 
        secondary: "rgb(234, 179, 8)", 
        tertiary: "rgb(200, 60, 30)",
        textColor: "rgb(245, 245, 245)",
      },
      boxShadow: {
        custombox:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        glow: "0 0 20px rgba(255, 255, 255, 0.5)",
        deep: "0px 10px 30px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        leftWindow: "leftWindow 5s linear 3s forwards",
        fadeIn: "fadeIn 4s ease-in-out forwards",
        pulseSlow: "pulse 5s infinite",
        slideIn: "slideIn 2s ease-out forwards",
        slideOut: "slideOut 2s ease-out forwards",
      },
      keyframes: {
        leftWindow: {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" }, 
          "100%": { opacity: "1" }, 
        },
        slideIn: {
          "0%": { transform: "translateY(100%)", opacity: "0" }, 
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" }, 
          "100%": { transform: "translateY(100%)", opacity: "0" }, 
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Georgia", "ui-serif", "serif"],
        mono: ["SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
