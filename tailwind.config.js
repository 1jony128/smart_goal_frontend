/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        muted: "rgba(185,186,190,0.62)",
        primary: "#41ce43",
      },
    },
  },
  plugins: [],
};
