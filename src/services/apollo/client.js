import { ApolloClient, InMemoryCache } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

// if (process.env.NODE_ENV === "development") {
//   loadDevMessages();
//   loadErrorMessages();
// }

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,
  cache: new InMemoryCache(),
  credentials: "include",
});

export const getClient = ({ req }) => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_URL,
    cache: new InMemoryCache(),
    credentials: "include",
    headers: {
      cookie: req.headers.cookie,
    },
  });
};

export default client;
