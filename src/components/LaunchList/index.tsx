import React from "react";
import { useQuery } from "@apollo/client";
import { Skeleton, VStack, Text } from "@chakra-ui/react";
import { GET_LAUNCHES } from "../../infrastructure/queries";
import { Launches, Launch } from "../../types";
import LaunchCard from "../LaunchCard";
import Hero from "../Hero";

const LaunchList: React.FC = () => {
  const { loading, error, data } = useQuery<Launches>(GET_LAUNCHES);

  if (error)
    return (
      <Text>
        {error.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </Text>
    );

  return (
    <React.Fragment>
      <Hero />
      <VStack align="flex-start" spacing="6">
        {data?.launchesPast.map((launch: Launch) => (
          <Skeleton isLoaded={!loading} w="100%">
            <LaunchCard launch={launch} loading={loading} />
          </Skeleton>
        ))}
      </VStack>
    </React.Fragment>
  );
};

export default LaunchList;
