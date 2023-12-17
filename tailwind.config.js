/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        medium: "Open Sans Medium",
        bold: "Open Sans Bold",
        semibold: "Open Sans SemiBold",
        light: "Open Sans Light",
        regular: "Open Sans",
      },
      backgroundColor: {
        "orange":"#67C25E",
        "gray":"#D9D9D9",
        "dark-red":"008480",
        "mid-green":"#504E4E",
        "mild-gray": "#E1E1E1",
        "dark-silver": "#C0C0C0",
        "dark-blue": "#0b57d0",
        "light-blue": "#D3E3FD",
        "blue": "#4589eb",
        "light-green": "#C7EED1",
        "dark-green": "#79D28F",
        "sky-blue": "#e1e9f7",
        "light-sky-blue": "rgb(14, 101, 235, 0.1)",
        "mild-blue": "#EDF2FA",
        "light-silver": "#f9fbfd",
        "light-gray": "#BEC1C6",
      },
    },
  },
  plugins: [],
}
