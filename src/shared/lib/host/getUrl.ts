import { NextRouter } from 'next/router'
import { getHost } from './getHost'

export const getUrl = (router: NextRouter) => {
  const { asPath: path } = router
  const host = getHost()
  return host + path
}
