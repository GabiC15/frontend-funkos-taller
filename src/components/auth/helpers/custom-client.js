import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const getApolloClient = async (userCredential, authId) => {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_BACKEND_URL,
    credentials: "include",
  });
  const token = authId || (await userCredential.user.getIdToken());
  const authLink = setContext((request, previousContext) => ({
    headers: { authorization: `Bearer ${token}` },
  }));
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client;
};
