import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cin: ["Cinzel", "serif"],
        mont: ["Montserrat", "sans-serif"],
        pf: ["Playfair Display", "serif"],
      },
      fontSize: {
        lh1: "64px",
        lh2: "40px",
        lh3: "24px",
        lh4: "20px",
        lh5: "18px",
        lh6: "16px",
        lp1: "24px",
        lp2: "16px",
        lp3: "14px",
        sh1: "40px",
        sh2: "24px",
        sh3: "18px",
        sh4: "16px",
        sh5: "14px",
        sh6: "13px",
        sp1: "20px",
        sp2: "13px",
        sp3: "11px",
      },
    },
  },
  plugins: [],
};
export default config;
