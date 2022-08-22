import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query getLaunches {
    launchesPast {
      id
      mission_name
      launch_success
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

export const GET_LAUNCH = gql`
  query getLaunch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      launch_success
      launch_date_local
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
      links {
        flickr_images
      }
    }
  }
`;
