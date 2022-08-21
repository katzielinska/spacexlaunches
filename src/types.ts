export type Launch = {
  mission_name: string;
  launch_date_local: Date;
  launch_site: {
    site_name_long: string;
  };
  rocket: {
    rocket_name: string;
  };
};

export type Launches = {
  launchesPast: Launch[];
};
