import { Global, ThemeProvider } from '@emotion/react'
import { VFC } from 'react'
import type { AppProps } from 'next/app'
import { Header } from 'widgets/header'
import { ThemeData, ThemeName } from 'shared/config'
import {
  ContentArea,
  FONT_FACE,
  Footer,
  FooterArea,
  GLOBAL_STYLES,
  HeaderArea,
  MainGrid,
  Scroll,
  Wrapper,
} from 'shared/ui'

const DEFAULT_THEME = ThemeData[ThemeName.Dark]

const App: VFC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <Global styles={FONT_FACE} />
    <Global styles={GLOBAL_STYLES} />

    <Scroll>
      <Wrapper>
        <MainGrid>
          <HeaderArea>
            <Header />
          </HeaderArea>

          <ContentArea>
            <Component {...pageProps} />
          </ContentArea>

          <FooterArea>
            <Footer />
          </FooterArea>
        </MainGrid>
      </Wrapper>
    </Scroll>
  </ThemeProvider>
)

export default App
