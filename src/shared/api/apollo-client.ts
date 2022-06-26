import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_GATEWAY,
  credentials: 'include',
})

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: httpLink,
  cache: new InMemoryCache().restore({}),
})
