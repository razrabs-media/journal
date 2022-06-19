import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_GATEWAY,
  credentials: 'include',
  fetchOptions: {
    mode: 'no-cors',
  },
})

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: httpLink,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  cache: new InMemoryCache().restore({}),
})
