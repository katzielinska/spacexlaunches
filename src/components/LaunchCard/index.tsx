import React from "react";
import {
  Text,
  Heading,
  LinkOverlay as ChakraLink,
  LinkBox,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { Launch } from "../../types";
import moment from "moment";
import { Link } from "react-router-dom";

type Props = {
  launch: Launch;
  loading: boolean;
};

const LaunchCard: React.FC<Props> = ({ launch: data, loading }) => {
  return (
    <LinkBox p="6" as="article" bg="whiteAlpha.200" w="full" borderRadius="lg">
      <Flex justifyContent="space-between" align="center">
        <Text>{moment(data.launch_date_local).format("LL")}</Text>
        <Badge
          colorScheme={data.launch_success ? "green" : "red"}
          h="fit-content"
        >
          {data.launch_success ? "Success" : "Failure"}
        </Badge>
      </Flex>

      <Heading fontSize="xl" color="white" py="2" w="70%">
        {data.mission_name}
      </Heading>

      <ChakraLink to={`/${data.id}`} as={Link} fontWeight={700} py="6">
        View details
      </ChakraLink>
    </LinkBox>
  );
};

export default LaunchCard;
