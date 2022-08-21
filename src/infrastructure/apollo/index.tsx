import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apollo = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache()
});
