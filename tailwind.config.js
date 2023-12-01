/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bannerMenuMobile: 'url(./src/assets/banner-menu-mobile.png)',
        bannerMenuWeb: 'url(./src/assets/banner-menu.png)',
      },
    },
    fontFamily: {
      Lato: ['Lato', 'sans-serif'],
      Lilita: ['Lilita One', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
