import React from "react";
import { Skeleton, Box, Text, Heading } from "@chakra-ui/react";
import { Launch } from "../../types";

type Props = {
  launch: Launch;
};
const DATE_OPTIONS = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const LaunchCard: React.FC<Props> = ({ launch }) => {
  return (
    <Box>
      <Text> </Text>

      <Heading>{launch.mission_name}</Heading>
    </Box>
  );
};

export default LaunchCard;
