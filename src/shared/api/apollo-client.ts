import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_API_GATEWAY}/gql`,
      credentials: 'include',
    }),
    cache: new InMemoryCache(),
  })

export function initializeApollo() {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (typeof window === 'undefined') return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo() {
  return useMemo(() => initializeApollo(), [])
}
