import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import LaunchList from "./components/LaunchList";
import Hero from "./components/Hero";
import theme from "../src/theme";
import Fonts from "../src/theme/Fonts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box bg="grayDark">
        <Container color="gray.400">
          <Hero />
          <LaunchList />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
