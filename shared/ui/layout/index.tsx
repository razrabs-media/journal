import styled from '@emotion/styled'
import React, { FC } from 'react'

type LayoutProps = {
  header?: React.ReactNode
  footer?: React.ReactNode
}

const Container = styled.div`
  width: 100%;
  max-width: 1872px;
  margin: auto;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 671px) {
    padding: 0 10px;
  }
`

const Content = styled.main`
  padding: 24px 0;

  @media (max-width: 671px) {
    padding: 10px 0;
  }
`

export const Layout: FC<LayoutProps> = ({ header, children, footer }) => (
  <Container>
    {header}

    <Content>{children}</Content>

    {footer}
  </Container>
)
