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
      lato: ["Lato", "sans-serif"]
    },
    extend: {colors: {
      "primary-blue": "#1F5EF5",
      "grey-1": "#f2f2f2",
      "blue-1": "#1a283f",
      "black": "#2B2B2B",
      "grey-7": "#757575",
      "white": "#FFFFFF",
      "book": "#d5b020"
    },
  backgroundImage: {
    "home_hero_bg": "url('/src/assets/images/home_hero.jpg')",
    "about_hero_bg": "url('/src/assets/images/about_us_hero.jpg')",
    "accommodation_hero_bg": "url('/src/assets/images/walkway.jpg')",
    "contact_hero_bg": "url('/src/assets/images/contactus_1.jpg')",
    "contact_2_bg": "url('/src/assets/images/receptionwait.jpg')",
    "nav_bg": "linear-gradient(180deg,rgba(0,0,0,.7),transparent)"
  },
boxShadow: {
  "xs": "inset 0 -7px 17px -6px rgba(0,0,0,0.5)"
}
},
  },
  plugins: [],
}

