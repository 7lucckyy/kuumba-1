/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./src/shared/components/*.tsx",
    "./src/shared/contexts/*.tsx",
    "./src/modules/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        Merriweather: ['Merriweather', 'serif'],
        RobotoSlab: ['Roboto Slab', 'serif'],
        SofiaSans: ['Sofia Sans Extra Condensed', 'sans-serif'],
        Kanit: ['Kanit', "sans-serif"]
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6169F8",
          "primary-focus": "#153084",
          "primary-content": "#FFFFFF",
          secondary: "#0C1B3A",
          "secondary-focus": "#153084",
          "secondary-content": "#FFFFFF",
          accent: "#F4F3EF",
          'accent-focus': '#6169F8',
          'accent-content': '#6169F8',
          neutral: "#323232",
          "base-100": "#FAFAFA",
          "base-content": "#1E1E1E",
          info: "#A749BC",
          "info-content": "#FFFFFF",
          success: "#38C976",
          "success-content": "#FFFFFF",
          warning: "#FFA23A",
          "warning-content": "#FFFFFF",
          error: "#FE5050",
          "error-content": "#FFFFFF",
        },
      },
    ],
  },
};
