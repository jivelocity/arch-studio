/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        greyDark: "hsl(var(--grey-dark))",
        greyLight: "hsl(var(--grey-light))",
        greyMedium: "hsl(var(--grey-medium))",
        greyLightest: "hsl(var(--grey-lightest))",
        redError: "hsl(var(--red-error))",
      },
      fontFamily: {
        sans: ["LeagueSpartan", "sans-serif"],
      },
      lineHeight: {
        16: "4rem",
        20: "5rem",
      },
      spacing: {
        161: "161px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {},
          "@screen md": {
            maxWidth: "968px",
            padding: "0 2rem",
          },
          "@screen lg": {
            maxWidth: "1280px",
            padding: "0 2rem",
          },
          "@screen xl": {
            maxWidth: "1440px",
            padding: "0 4rem",
          },
        },
        ".containerChild": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {},
          "@screen md": {
            padding: "0 2rem",
          },
          "@screen lg": {
            padding: "0 2rem",
          },
          "@screen xl": {
            padding: "0 4rem",
          },
        },
      });
    },
  ],
};
