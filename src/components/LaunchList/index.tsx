import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Skeleton, VStack, StackDivider } from "@chakra-ui/react";
import { Launches } from "../../types";
import LaunchCard from "../LaunchCard";

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
    }
  }
`;

const LaunchList: React.FC = () => {
  const { loading, error, data } = useQuery<Launches>(GET_LAUNCHES);

  return (
    <VStack
      align="flex-start"
      divider={<StackDivider borderColor="gray.200" />}
    >
      {data?.launchesPast.map((launch) => (
        <Skeleton isLoaded={!loading}>
          <LaunchCard launch={launch} />
        </Skeleton>
      ))}
    </VStack>
  );
};

export default LaunchList;
