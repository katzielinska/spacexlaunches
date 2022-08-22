import React from "react";
import {
  Skeleton,
  Box,
  Text,
  Heading,
  Image,
  VStack,
  SkeletonText,
} from "@chakra-ui/react";
import moment from "moment";
import { GET_LAUNCH } from "../../infrastructure/queries";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { LaunchQuery } from "../../types";

const LaunchDetails: React.FC = () => {
  const { launchId } = useParams();

  const {
    loading: isLaunchLoading,
    error,
    data,
  } = useQuery<LaunchQuery>(GET_LAUNCH, {
    variables: { id: launchId },
  });

  return (
    <Box>
      <Box py="4">
        <Link to="/">Back to launch list</Link>
      </Box>
      <Skeleton isLoaded={!isLaunchLoading}>
        <Box>
          <Skeleton isLoaded={!isLaunchLoading && !!data}>
            {data?.launch.links.flickr_images[0] && (
              <Image
                src={data?.launch.links.flickr_images[0]}
                width="full"
                objectFit="cover"
                objectPosition="center"
                h={["200px", "300px"]}
                mb={6}
                borderRadius={4}
              />
            )}
          </Skeleton>
          <SkeletonText isLoaded={!isLaunchLoading && !!data}>
            <Text>{moment(data?.launch.launch_date_local).format("LL")}</Text>
            <Heading fontSize={["xl", "3xl"]} color="white" my="2">
              {data?.launch.mission_name}
            </Heading>
          </SkeletonText>
          <SkeletonText isLoaded={!isLaunchLoading && !!data}>
            <VStack spacing="4" align="flex-start" my="6">
              <Text
                color={data?.launch.launch_success ? "green.400" : "red.400"}
                textTransform="uppercase"
                fontWeight="bold"
              >
                Flight {launchId}:{" "}
                {data?.launch.launch_success ? "success" : "failed"}
              </Text>
              <Text>Rocket: {data?.launch.rocket.rocket_name}</Text>
              <Text>
                Launch site: {data?.launch.launch_site.site_name_long}
              </Text>
            </VStack>
            <Text>{data?.launch.details}</Text>
          </SkeletonText>
        </Box>
      </Skeleton>
    </Box>
  );
};

export default LaunchDetails;
