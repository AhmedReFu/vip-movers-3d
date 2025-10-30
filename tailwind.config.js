/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#00D2FF',
        secondary: '#0EA5E9',
        accent: '#F97316',
        danger: '#EF4444',
        success: '#10B981',
        warning: '#F59E0B',
        brand: {
          50: '#E0F7FF',
          100: '#B3ECFF',
          200: '#80E1FF',
          300: '#4DD5FF',
          400: '#26CBFF',
          500: '#00D2FF',
          600: '#00B8E6',
          700: '#009BCC',
          800: '#007EB3',
          900: '#005A99',
        },
      },
      fontFamily: {
        poppins: ["PoppinsRegular"],
        "poppins-bold": ["PoppinsBold"],
      },
    },
  },
  plugins: [],
}