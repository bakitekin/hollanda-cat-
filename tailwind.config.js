/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand palette (light theme)
        ink: "#151313", // primary text
        accent: "#346B9E", // primary action (mat mavi)
        lavender: "#be94f5", // secondary accent
        sun: "#fccc42", // highlight
        paper: "#f7f7f5", // surfaces
      },
    },
  },
  plugins: [],
};
