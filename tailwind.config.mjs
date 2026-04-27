import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        navy: "#071426",
        violet: "#8b5cf6",
        cyan: "#2dd4bf",
        frost: "#e6edf7"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(139, 92, 246, 0.18)"
      }
    }
  },
  plugins: [typography]
};
