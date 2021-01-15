import { ApolloClient } from "apollo-client";
import { HttpLink, ApolloLink } from "@apollo/client";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
import config from "../config";
import { localStorage, STORAGE_ACTION } from "../utils/storage";

const httpLink = new HttpLink({
  uri: `https://${config.graphqlUrl}`,
});

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors && graphQLErrors.length > 0) {
    graphQLErrors.map(({ message, locations, path }) => {
      if (message.includes("JWT")) {
        window.location.reload();
        localStorage.removeItem(STORAGE_ACTION.AUTH_TOKEN);
      }
      // eslint-disable-next-line no-console
      return console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  // eslint-disable-next-line no-console
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export default new ApolloClient({
  link: ApolloLink.from([errorLink as any, httpLink]) as any,
  cache: cache,
});
