/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto", "serif"],
      display: ["Roboto"],
      body: ["Roboto"],
    },
    extend: {
      colors: {
        thunderbird: "#b41421",
        nevada: "#6d7275",
        tiara: "#c7d6d5",
        whisper: "#ecebf3",
        chatelle: "#d5c7d6",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
