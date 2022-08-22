import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query getLaunches {
    launchesPast {
      mission_name
      launch_success
      launch_date_local
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
      id
    }
  }
`;

export const GET_LAUNCH = gql`
  query getLaunch($id: ID!) {
    launch(id: $id) {
      details
      id
      launch_site {
        site_name_long
      }
      launch_success
      mission_name
      rocket {
        rocket_name
      }
      links {
        flickr_images
      }
    }
  }
`;
