import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#030712",
          900: "#050816",
          850: "#070c24",
          800: "#0b1236",
          700: "#111c4e",
          600: "#1a2c72",
        },
        cyan: {
          neon: "#00f0ff",
        },
        purple: {
          neon: "#a855f7",
          electric: "#8b5cf6",
        },
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 35s linear infinite",
        "spin-reverse-slow": "spin-reverse 25s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "meteor-effect": "meteor 5s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.6",
            filter: "drop-shadow(0 0 15px rgba(0, 240, 255, 0.4))",
          },
          "50%": {
            opacity: "1",
            filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.8))",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "space-radial": "radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.15), rgba(5, 8, 22, 1) 70%)",
        "nebula-glow": "radial-gradient(circle at 50% 30%, rgba(56, 189, 248, 0.12), rgba(168, 85, 247, 0.08) 50%, transparent 80%)",
      },
    },
  },
  plugins: [],
};

export default config;
