import Link from 'next/link'
import styled from '@emotion/styled'
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
`

const Logo = styled.a`
  color: ${({ theme }) => theme.colors.logo};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 3px;
  font-feature-settings: 'salt' on;
  text-align: center;
  text-decoration: none;
`

const PreferencesBlock = styled.div``

export const Header: VFC = () => (
  <StyledHeader>
    <NavigationBlock />

    <LogoBlock>
      <Link passHref href='/'>
        <Logo>Разрабы</Logo>
      </Link>
    </LogoBlock>

    <PreferencesBlock />
  </StyledHeader>
)
