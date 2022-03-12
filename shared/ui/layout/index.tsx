import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { FC } from 'react'
import { Footer } from 'shared/ui/footer'

const Content = styled.div`
  display: grid;
  width: 100%;
  max-width: 1872px;
  grid-template-rows: repeat(2, auto);
  gap: 65px 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  width: calc(100vw - (100vw - 100%));
  min-height: 100vh;
`

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
