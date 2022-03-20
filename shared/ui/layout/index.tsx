import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { FC } from 'react'

type LayoutProps = {
  aside?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
}

const Container = styled.div`
  width: 100%;
  max-width: 1872px;
  margin: auto;
  padding: 0 24px;
  box-sizing: border-box;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 671px) {
    padding: 0 10px;
  }
`

const Content = styled.main<{ withAside?: boolean }>`
  padding: 24px 0;

  // Если передан aside, то отображаем грид и ставим слева aside
  ${({ withAside }) =>
    withAside &&
    css`
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
      grid-gap: 24px;
    `};

  @media (max-width: 671px) {
    padding: 10px 0;
  }
`

export const Layout: FC<LayoutProps> = ({
  header,
  aside,
  children,
  footer,
}) => (
  <Container>
    {header}

    <Content withAside={!!aside}>
      {aside}
      {children}
    </Content>

    {footer}
  </Container>
)
