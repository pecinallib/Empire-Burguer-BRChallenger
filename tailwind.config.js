/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bannerMenuMobile: 'url(./src/assets/banner-menu-mobile.png)',
        bannerMenuWeb: 'url(./src/assets/banner-menu.png)',
      },
      keyframes: {
        letreiro: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        letreiro: 'letreiro 30s linear infinite',
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
