import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const getApolloClient = async (userCredential) => {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
  });
  const token = await userCredential.user.getIdToken();
  const authLink = setContext((request, previousContext) => ({
    headers: { authorization: `Bearer ${token}` },
  }));
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client;
};