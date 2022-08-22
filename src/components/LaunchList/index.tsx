import React from "react";
import { useQuery } from "@apollo/client";
import { Skeleton, VStack } from "@chakra-ui/react";
import { GET_LAUNCHES } from "../../infrastructure/queries";
import { Launches } from "../../types";
import LaunchCard from "../LaunchCard";
import Hero from "../Hero";

const LaunchList: React.FC = () => {
  const { loading, error, data } = useQuery<Launches>(GET_LAUNCHES);

  return (
    <React.Fragment>
      <Hero />
      <VStack align="flex-start" spacing="6">
        {data?.launchesPast.map((launch) => (
          <Skeleton isLoaded={!loading} w="100%">
            <LaunchCard launch={launch} loading={loading} />
          </Skeleton>
        ))}
      </VStack>
    </React.Fragment>
  );
};

export default LaunchList;
