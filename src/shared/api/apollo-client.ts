import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_API_GATEWAY }),
  cache: new InMemoryCache().restore({}),
})
