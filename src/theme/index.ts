import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    myFont: `'Dm Sans Bold', sans serif`,
    myFont2: `'Dm Sans Regular', sans serif`
  },
  colors: {
    grayDark: "#1f2028"
  }
});

export default theme;
