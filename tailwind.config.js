module.exports = {
  important: true,
  purge: ["./src/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    // extend: {
    //   colors: {
    //     green: {
    //       1: '#b3bcf5',
    //     }
    // },
    extend: {
      colors: {
        dark: "rgba(0,0,0,.87);",
        dark_mode_light: "#f9fafb",
        secondary: "#113641",
        // [`blue-theme`]: "#185ADB",
        [`blue-theme`]: "#222260",
        [`dark-theme`]: "#212321",
        [`purple-theme`]: "rgb( 117, 95, 211)",
        [`pink-theme`]: "rgb(234, 83, 172)",
        [`gray-theme`]: "#f7f9fa",
        [`green-theme`]: "rgb(106, 201, 119)",
        [`green-theme`]: "rgb(106, 201, 119)",
        [`yellow-theme`]: "#FDCE00",
        // [`green-theme`]: "#70D700",
        [`green-mint-theme`]: "rgb( 70, 220, 216)",
      },
      borderWidth: {
        5: "5px",
        1: "1px",
      },
      borderColor: {
        dard_theme_boder_color: "rgba(113 119 144 / 25%)",
      },
      height: {
        "280px": "280px",
        84: "336px",
        22: "88px",
        90: "360px",
        "11/12": "91.666667%",
        "max-content": "max-content",
      },
      width: {
        22: "88px",
        84: "336px",
        84: "336px",
        84: "336px",
      },
      maxHeight: {
        "max-content": "max-content",
        "max-avatar-user": "112px",
      },
      maxWidth: {
        "max-avatar-user": "112px",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        16: "64px",
      },
      borderRadius: {
        "4xl": "32px",
      },
      backgroundColor: {
        dark_mode_bg: "rgba(16 18 27 / 40%)",
        dark_mode_card_theme_bg: "rgb(146 151 179 / 13%)",
      },
      boxShadow: {
        design_code:
          "rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset, rgba(23, 0, 102, 0.3) 0px 40px 80px, rgba(0, 0, 0, 0.3) 0px 10px 30px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
