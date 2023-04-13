/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const darkMode = "class";
export const theme = {
  fontFamily: {
    sans: [
      'PPNeueMontreal,-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
      "sans-serif",
    ],
  },
  extend: {
    backgroundImage: {
      earth: "url('/earth.png')",
      chip: "url('/chip.png')",
    },
    animation: {
      "fade-in": "fadeIn 200ms ease-in forwards",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0", transform: "translateY(16px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
  },
  container: {
    center: true,
    width: 'auto',
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
  },
};
export const plugins = [require("tailwindcss-animation-delay")];
