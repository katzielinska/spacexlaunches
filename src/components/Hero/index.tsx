import { Box, Heading, Text } from "@chakra-ui/react";

// type Props = {
//   launch: Launch;
// };

const Hero: React.FC = () => {
  const current = new Date();
  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;

  return (
    <Box py="10">
      <Heading as="h1" size={["xl", "3xl"]} pb="4" color="gray.100">
        SpaceX launches{" "}
        <span role="img" aria-label="rocket and sparkle emojis">
          🚀 ✨
        </span>
      </Heading>
      <Text as="h3" fontSize={["lg", "2xl"]}>
        before {date}
      </Text>
    </Box>
  );
};

export default Hero;
