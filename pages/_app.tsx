import type { AppProps } from 'next/app'
import { ThemeManagerProvider } from 'app/providers/theme-manager'
import 'styles/fonts.css'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeManagerProvider>
      <Component {...pageProps} />
    </ThemeManagerProvider>
  )
}

export default MyApp
