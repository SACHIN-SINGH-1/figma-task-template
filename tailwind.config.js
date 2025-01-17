module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx, tsx, html,mdx}",
    "./src/**/*.{js,ts,jsx, tsx,html, mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "var(--black_900)" },
        gray: { 600: "var (--gray_600)", 700: "var(--gray_700)" },
        light_green: {
          400: "var(--light_green_400)",
          600: "var (--light_green_600)",
          "400_4c": "var(--light _green_400_4c)",
          "400_7f": "var (--light_green_400_7f)",
        },
        white: {
          a700: "var(--white_a700)",
          a700_00: "var(--white_a700_00)",
          a700_7f: "var(--white_a700_7f)", },
        },
        boxshadow: {},
        fontFamily: { roboto: "Roboto", poppins: "Poppins" },
        backgroundImage: {
          gradient: "linear-gradient (248deg, #7€9949, #a8cb65,#ffffff)",
          gradient1: "linear-gradient(90deg, #ffffff00,#ffffff)",
          gradient2: "radial-gradient(207deg, #a8cb657f,#ffffff7f)",
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
};
