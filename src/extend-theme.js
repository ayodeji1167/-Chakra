import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "yellow",
    900: "#f77070",
  },
  grey: {
    100: "#eff3fa",
  },
  blue: {
    100: "#0098ae",
  },
  red: {
    100: "#ff3d3d",
    200: "#f77070",
  },
};

const fonts = {
  body: "system-ui, sans-serif",

  heading: "Graphik Font",
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  colors,
  fonts,
  fontWeights,
  config,
});

export default customTheme;