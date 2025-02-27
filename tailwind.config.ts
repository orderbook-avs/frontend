import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "animate-navbar": "animate-navbar 0.3s ease-in-out",
      },
      fontFamily: {
        robotoMono: ["var(--font-roboto-mono)"],
        inriaSans: ["var(--font-inria-sans)"],
      },
      colors: {
        background: "#191B1C",
        light: "#ACACAC",
        navbar: "#252728",
        primary: "#BA8BC8FF",
      },
      backgroundImage: {
        "button-primary":
          "linear-gradient(90deg, #BA8BC8FF 0%, #875193FF 100%)",
        "button-secondary": "linear-gradient(90deg, #D5D5D5 0%, #BCBCBC 100%)",
        bubble:
          "linear-gradient(132.98deg, #6338767A 28.43%, #4E2F6C4B 110.85%)",
      },
      backdropBlur: {
        bubble: "720px",
      },
    },
  },
  plugins: [],
};
export default config;
