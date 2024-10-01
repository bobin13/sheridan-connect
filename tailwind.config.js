/** @type {import('tailwindcss').Config} */
/// <reference types="nativewind/types" />
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#001F3F'
      }
    },
  },
  plugins: [],
}

