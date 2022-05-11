import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({ uri: process.env.API_GATEWAY_PATH }),
  cache: new InMemoryCache().restore({}),
})
