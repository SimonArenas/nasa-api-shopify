module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "green-200": "#BEDAD2",
        green: "#7EB5A6",
        "green-600": "#599B8A",
        "green-700": "#3C685C",
        "green-800": "#2D4E45",
        orange: "#F0B67F",
        "orange-700": "#E78C36",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
