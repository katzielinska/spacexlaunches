import { ChakraProvider } from "@chakra-ui/react";
import LaunchList from "./components/LaunchList";
import theme from "../src/theme";
import Fonts from "../src/theme/Fonts";
import { Route, Routes } from "react-router-dom";
import LaunchDetails from "./components/LaunchDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Routes>
          <Route path="/" element={<LaunchList />} />
          <Route path="/:launchId" element={<LaunchDetails />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
