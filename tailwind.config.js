/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { navy: { DEFAULT: "#0C3A57", deep: "#061F30", ink: "#2B2F36" }, ivory: "#F5F1E8", brass: "#C9A45C" },
      fontFamily: { display: ["Marcellus", "serif"], serif: ["Fraunces", "serif"], sans: ["Manrope", "sans-serif"] },
    },
  },
  plugins: [],
};
