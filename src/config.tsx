import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React, { ReactNode } from "react";

const GRAPHQL_ENDPPOINT = "https://countries-274616.ew.r.appspot.com";

const client = new ApolloClient({
  uri: GRAPHQL_ENDPPOINT,
  cache: new InMemoryCache(),
});

const ApolloConnectedProvider: React.FC<any> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloConnectedProvider;
