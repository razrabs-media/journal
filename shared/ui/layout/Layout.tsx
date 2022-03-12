import { Footer } from 'shared/ui/footer'
import { Wrapper } from 'shared/ui/wrapper'
import { Content } from 'shared/ui/content'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { FC } from 'react'

export const Layout: FC = ({ children }) => {
  const theme = useTheme()
  return (
    <Wrapper
      className={css`
        background-color: ${theme.colors.background};
      `}
    >
      <Content>
        <main>{children}</main>
        <Footer />
      </Content>
    </Wrapper>
  )
}
