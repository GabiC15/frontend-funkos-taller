import { ApolloClient, InMemoryCache } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import qs from "querystring";

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
  const cookies = qs.decode(req.headers.cookie, "; ");

  return new ApolloClient({
    ssrMode: true,
    uri: process.env.NEXT_PUBLIC_BACKEND_URL,
    cache: new InMemoryCache(),
    credentials: "include",
    headers: {
      session: cookies.session,
      cookie: req.headers.cookie,
    },
  });
};

export default client;
