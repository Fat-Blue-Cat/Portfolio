import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 8EC5FC
        // F5F5F5
        // D3D3D3
        // E0FFFF
        // primary: "#2454FF",
        primary: "#2454FF",
        secondary: "#F0F8FF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        tail: {
          "0%": { width: "0" },
          "30%": { width: "100px" },
          "100%": { width: "0" },
        },
        shining: {
          "0%": { width: "0" },
          "50%": { width: "30px" },
          "100%": { width: "0" },
        },
        shooting: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(320px)" },
        },
      },
      animation: {
        tail: "tail 3000ms ease-in-out infinite",
        shining: "shining 3000ms ease-in-out infinite",
        shooting: "shooting 3000ms ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
