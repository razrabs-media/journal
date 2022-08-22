import getConfig from 'next/config'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

export const getRuntime = (
  config: 'HOST' | 'YM_CODE' | 'YM_ENABLE',
): string => {
  const isServerSide = typeof window === 'undefined'

  return (isServerSide ? serverRuntimeConfig : publicRuntimeConfig)[config]
}
