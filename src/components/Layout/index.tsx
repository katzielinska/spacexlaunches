import { Box, Container } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
  return (
    <Box bg="grayDark" minH="100vh">
      <Container color="gray.400" maxW="70ch">
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
