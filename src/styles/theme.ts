import { createTheme } from "@shopify/restyle";

const palette = {
  brandAccent: "#FF455B",
  mediumBlack: "#A5A7AC",
  fullBlack: "#121420",
  fullWhite: "#FFFFFF",
  darkBg: "#181A20",
  darkSubBg: "#222333",
};

const theme = createTheme({
  colors: {
    background: palette.fullWhite,
    primary: palette.brandAccent,
    secondary: palette.mediumBlack,
    black: palette.fullBlack,
    white: palette.fullWhite,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: "Nunito-Bold",
      fontSize: 28,
    },
    "paragraph-one-bold": {
      fontFamily: "Nunito-Bold",
      fontSize: 16,
    },
    "paragraph-one-semibold": {
      fontFamily: "Nunito-SemiBold",
      fontSize: 16,
    },
    "paragraph-one-regular": {
      fontFamily: "Nunito-Regular",
      fontSize: 16,
    },
    "paragraph-two-bold": {
      fontFamily: "Nunito-Bold",
      fontSize: 15,
    },
    "paragraph-two-semibold": {
      fontFamily: "Nunito-SemiBold",
      fontSize: 15,
    },
    "paragraph-two-regular": {
      fontFamily: "Nunito-Regular",
      fontSize: 15,
    },
    "paragraph-three-semibold": {
      fontFamily: "Nunito-Regular",
      fontSize: 14,
    },
    "default-semibold": {
      fontSize: 13,
      fontFamily: "Nunito-SemiBold",
    },
    defaults: {
      fontSize: 13,
      fontFamily: "Nunito-Regular",
    },
  },
});

export type Theme = typeof theme;

export default theme;
