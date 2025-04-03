import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        javanese: ["Javanese Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
