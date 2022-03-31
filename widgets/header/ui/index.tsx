import styled from '@emotion/styled'
import Link from 'next/link'
import { VFC } from 'react'

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 12px 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.logo};
`

const NavigationBlock = styled.nav``

const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.colors.logo};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: 3px;
    font-feature-settings: 'salt' on;
    text-align: center;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
`

const PreferencesBlock = styled.div``

export const Header: VFC = () => (
  <StyledHeader>
    <NavigationBlock />

    <LogoBlock>
      <Link passHref href='/'>
        <a>Разрабы</a>
      </Link>
    </LogoBlock>

    <PreferencesBlock />
  </StyledHeader>
)
