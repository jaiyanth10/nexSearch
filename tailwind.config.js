/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", //add this for toggeling b/w dark and nrml.
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#1E3A8A", // Custom primary color (blue)
        secondary: "#E5E7EB", // Custom secondary color (light gray)
        accent: "#F59E0B", // Custom accent color (amber)
      },
    },
  },
  plugins: [],
};
