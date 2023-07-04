import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.rose,
        green: colors.teal,
        background: '#111111',
        highlight: {
          100: '#FFEDD3',
          200: '#FFE4BD',
          300: '#FFDCA7',
          400: '#FFD391',
          500: '#FFC878',
          600: '#FFB13C',
          700: '#FC9700',
          800: '#BD7100',
          900: '#7E4B00',
        },
        brown: {
          50: '#E1DBD9',
          100: '#C2B6B4',
          200: '#A4928E',
          300: '#846F6A',
          400: '#5E4F4C',
          500: '#382F2D',
          600: '#2F2826',
          700: '#26201E',
          800: '#1C1817',
          900: '#13100F',
        },
      },
    },
  },
  plugins: [],
};
