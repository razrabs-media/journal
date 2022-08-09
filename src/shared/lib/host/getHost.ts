import getConfig from 'next/config'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

export const getHost = (): string => {
  const isServerSide = typeof window === 'undefined'
  const host = (isServerSide ? serverRuntimeConfig : publicRuntimeConfig).HOST
  return host
}
