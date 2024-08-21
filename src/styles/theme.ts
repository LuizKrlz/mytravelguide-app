import { createTheme } from "@shopify/restyle";

const palette = {
  brandAccent: "#FF455B",
  mediumBlack: "#A5A7AC",
  fullBlack: "#121420",
  fullWhite: "#FFFFFF",
  darkBg: "#181A20",
  darkSubBg: "#222333",
  blue: "#009BFF",
  greenDark: "#97B38A",
  lightGray: "#F4F4F5",
  orange: "#FF9900",
};

const theme = createTheme({
  colors: {
    background: palette.fullWhite,
    primary: palette.brandAccent,
    secondary: palette.mediumBlack,
    lightSecondary: palette.lightGray,
    black: palette.fullBlack,
    white: palette.fullWhite,
    blue: palette.blue,
    greenDark: palette.greenDark,
    orange: palette.orange,
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
      fontWeight: "bold",
    },
    "paragraph-one-bold": {
      fontFamily: "Nunito-Bold",
      fontSize: 16,
      fontWeight: "bold",
    },
    "paragraph-one-semibold": {
      fontFamily: "Nunito-SemiBold",
      fontSize: 16,
      fontWeight: "semibold",
    },
    "paragraph-one-regular": {
      fontFamily: "Nunito-Regular",
      fontSize: 16,
      fontWeight: "regular",
    },
    "paragraph-two-bold": {
      fontFamily: "Nunito-Bold",
      fontSize: 15,
      fontWeight: "bold",
    },
    "paragraph-two-semibold": {
      fontFamily: "Nunito-SemiBold",
      fontSize: 15,
      fontWeight: "semibold",
    },
    "paragraph-two-regular": {
      fontFamily: "Nunito-Regular",
      fontSize: 15,
      fontWeight: "regular",
    },
    "paragraph-three-semibold": {
      fontFamily: "Nunito-Regular",
      fontSize: 14,
      fontWeight: "regular",
    },
    "default-semibold": {
      fontSize: 13,
      fontFamily: "Nunito-SemiBold",
      fontWeight: "semibold",
    },
    defaults: {
      fontSize: 13,
      fontFamily: "Nunito-Regular",
      fontWeight: "regular",
    },
  },
});

export type Theme = typeof theme;

export default theme;
