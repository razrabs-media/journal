import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import getConfig from 'next/config'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

const createApolloClient = () => {
  const isServerSide = typeof window === 'undefined'
  const host = (isServerSide ? serverRuntimeConfig : publicRuntimeConfig).HOST

  return new ApolloClient({
    ssrMode: isServerSide,
    link: new HttpLink({
      uri: new URL('api', host).toString(),
      credentials: 'include',
    }),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo() {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (typeof window === 'undefined') return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo() {
  return useMemo(() => initializeApollo(), [])
}
