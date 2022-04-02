import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_GQL_ENDPOINT }),
  cache: new InMemoryCache().restore({}),
})
