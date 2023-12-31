/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lobster: ["Lobster", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
      madeoutersans: ["madeoutofsans", "sans-serif"],
    },
    extend: {colors: {
      "primary-blue": "#1F5EF5",
      "error": "#B71816",
      "black": "#2B2B2B",
      "black-2": "rgba(51, 51, 51, 0.70)",
      "grey-1": "#EEEEEE",
      "grey-2": "#E1E1E1",
      "grey-3": "#D3D3D3",
      "grey-4": "#C4C4C4",
      "grey-5": "#B3B3B3",
      "grey-7": "#757575",
      "green-1": "#1E8E3A",
      "white": "#FFFFFF",
      "white-2": "#F2F2F2",
      "blue-3": "#3B7CAC",
      "blue-1": "#DBECFE",
      "blue-2": "#0F4576",
      "warning": "#D97C3C",
      "accent-4": "#F3B263"
    },
  backgroundImage: {
    "hero_bg": "url('/hero_img.jpg')",
    "about_hero_bg": "url('/aboutus_hero.jpg')",
    "nav_bg": "linear-gradient(180deg,rgba(0,0,0,.7),transparent)"
  }},
  },
  plugins: [],
}

