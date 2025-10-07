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
        primary: "#1369D9",
        secondary: "#F5F7FA",
        line: "#E0E8F2",
        accent: "#327AD9",
        background: "#F5F8FA",
        focus: "#E8EBF0",
        "text-dark": "#121D2C",
      },
      fontSize: {
        base: "14px",
        lg: "18px",
        xl: "25px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
