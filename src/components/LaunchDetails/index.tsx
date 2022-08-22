import React from "react";
import {
  Skeleton,
  Box,
  Text,
  Heading,
  Image,
  VStack,
  SkeletonText,
  Link as ChakraLink
} from "@chakra-ui/react";
import moment from "moment";
import { GET_LAUNCH } from "../../infrastructure/queries";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { LaunchQuery } from "../../types";

const LaunchDetails: React.FC = () => {
  const { launchId } = useParams();

  const { loading: isLaunchLoading, error, data } = useQuery<LaunchQuery>(
    GET_LAUNCH,
    {
      variables: { id: launchId }
    }
  );

  if (error)
    return (
      <Text>
        {error.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </Text>
    );

  return (
    <Box py="10">
      <ChakraLink as={Link} to="/" mb="6" display="block">
        Back to launch list
      </ChakraLink>
      <Skeleton isLoaded={!isLaunchLoading}>
        <Box>
          <Skeleton isLoaded={!isLaunchLoading}>
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
          <SkeletonText isLoaded={!isLaunchLoading}>
            <Text
              color={data?.launch.launch_success ? "green.400" : "red.400"}
              textTransform="uppercase"
              fontWeight="bold"
            >
              Flight {launchId}:{" "}
              {data?.launch.launch_success ? "success" : "failed"}
            </Text>
            <Heading fontSize={["2xl", "3xl"]} color="white" my="2">
              {data?.launch.mission_name}
            </Heading>
          </SkeletonText>
          <SkeletonText isLoaded={!isLaunchLoading}>
            <VStack spacing="2" align="flex-start" my="4">
              <Text>
                Date: {moment(data?.launch.launch_date_local).format("LL")}
              </Text>
              <Text>Rocket: {data?.launch.rocket.rocket_name}</Text>
              <Text>
                Launch site: {data?.launch.launch_site.site_name_long}
              </Text>
            </VStack>
            <Text color="white">{data?.launch.details}</Text>
          </SkeletonText>
        </Box>
      </Skeleton>
    </Box>
  );
};

export default LaunchDetails;
