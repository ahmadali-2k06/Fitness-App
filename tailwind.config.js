/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1e3b8a",
        "primary-light": "#3b82f6",
        "background-light": "#f9f9fb",
        "background-dark": "#121620",
        "card-light": "#ffffff",
        "card-dark": "#1e2330",
        "sky-custom": "#60A5FA",
        "deep-navy": "#0f172a",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        "3d": "0 10px 40px -10px rgba(0,0,0,0.1), 0 4px 10px -2px rgba(30, 59, 138, 0.1)",
        "3d-hover":
          "0 20px 50px -12px rgba(0,0,0,0.15), 0 8px 20px -4px rgba(30, 59, 138, 0.15)",
        "footer-inner": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
