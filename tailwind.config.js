/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        md: "830px",
      },
      backgroundImage: {
        "hero-badge": "url('./src/assets/pic-home.webp')",
        "sign-in": "url('./src/assets/Rectangle1.svg')",
        "sign-up": "url('./src/assets/Rectangle2.svg')",
      },
      colors: {
        "deep-purple": "#422F7E",
        "lite-purple": "#7F56DA",
        "button-purple": "#7A58C9",
        "dark-purple": "#756496",
        "lite-pink": "#F4EBFD",
        "lite-white": "#F9F9FF",
        "lite-gray": "#F3F4F8",
        "deep-gray": "#8D8D8D",
        "sick-gray": "#B7B7B7",
        "cool-gray": "#555555",
        "lite-violet": "#D1C1F6",
        "lite-blue": "#005DFD",
        "dark-primary": "#1c1c1c",
        "dark-secondary": "#282828",
        "dark-tertiary": "#3c3a3a",
        "dark-primary-title": "#EFEFEF",
        "dark-secondary-title": "#CCCDCC",
        "dark-text": "#C8C0AD",
      },
      dropShadow: {
        nun: "0 82px 40px rgba(100,100,100,0.2)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
