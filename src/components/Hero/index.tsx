import { Box, Heading } from "@chakra-ui/react";

const Hero: React.FC = () => {
  const current = new Date();
  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;

  return (
    <Box py="10">
      <Heading as="h1" size="2xl" pb="4" color="gray.100">
        SpaceX rocket launches{" "}
        <span role="img" aria-label="rocket and sparkle emojis">
          🚀 ✨
        </span>
      </Heading>
      <Heading as="h3" fontSize={["lg", "2xl"]}>
        before {date}
      </Heading>
    </Box>
  );
};

export default Hero;
