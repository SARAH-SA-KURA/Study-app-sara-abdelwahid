/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mode-color-text-grey-primary": "var(--mode-color-text-grey-primary)",
      },
    },
  },
  plugins: [],
};
