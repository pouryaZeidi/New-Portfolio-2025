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
        primary: "#4f46e5",
        secondary: "#9333ea",
        accent: "#f43f5e",
        background: "#0f172a",
        surface: "#1e293b",
        onPrimary: "#ffffff",
      },
      boxShadow: {
        custombox:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        glow: "0 0 20px rgba(255, 255, 255, 0.5)",
        deep: "0px 10px 30px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        leftWindow: "leftWindow 3s linear 2s forwards",
        fadeIn: "fadeIn 2s ease-in-out forwards",
        pulseSlow: "pulse 5s infinite",
        slideIn: "slideIn 1s ease-out forwards",
        slideOut: "slideOut 1s ease-out forwards",
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
