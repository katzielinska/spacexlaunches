export type Launch = {
  details: string;
  id: string;
  launch_site: {
    site_name_long: string;
  };
  launch_success: boolean;
  mission_name: string;
  rocket: {
    rocket_name: string;
  };
  links: {
    flickr_images: string[];
  };
  launch_date_local: string;
};

export type LaunchQuery = {
  launch: Launch;
};

export type Launches = {
  launchesPast: Launch[];
};
