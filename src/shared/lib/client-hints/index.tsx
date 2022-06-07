import { getCookie, setCookies } from 'cookies-next'
import { NextPageContext } from 'next'
import { useEffect, useMemo, useState } from 'react'
import { Context as ResponsiveContext } from 'react-responsive'
import { AppProps as _AppProps } from 'next/app'
import { MediaInfo } from './types'

export const COOKIE_NAME_MEDIA_INFO = 'mediaInfo'

const SUPPOSED_MEDIA = {
  mobile: {
    width: 671,
  },
  tablet: {
    width: 1000,
  },
  desktop: {
    width: 1320,
  },
}

export function getContextMedia(ctx: NextPageContext): MediaInfo {
  const cookieMedia = getCookie(COOKIE_NAME_MEDIA_INFO, {
    req: ctx.req,
  })

  if (cookieMedia && typeof cookieMedia === 'string') {
    return JSON.parse(cookieMedia) as MediaInfo
  }

  const parser = eval("require('ua-parser-js')") // it's not bundled to a browser js

  const userAgent = ctx.req?.headers['user-agent']
  const deviceType: string = parser(userAgent).device.type ?? 'desktop'

  switch (deviceType) {
    case 'mobile':
      return SUPPOSED_MEDIA.mobile
    case 'tablet':
      return SUPPOSED_MEDIA.tablet
    default:
      return SUPPOSED_MEDIA.desktop
  }
}

type AppProps = _AppProps & { media: MediaInfo }

export function withMediaProvider(App: (props: _AppProps) => JSX.Element) {
  const Wrapper = ({ media, ...appProps }: AppProps) => {
    const app = useMemo(() => App(appProps), [appProps])

    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
      setHydrated(true)

      const mediaInfo = {
        width: window.screen.width,
      }

      setCookies(COOKIE_NAME_MEDIA_INFO, JSON.stringify(mediaInfo))
    }, [])

    return hydrated ? (
      app
    ) : (
      <ResponsiveContext.Provider value={media}>
        {app}
      </ResponsiveContext.Provider>
    )
  }
  Wrapper.displayName = 'MediaProvider'

  return Wrapper
}
