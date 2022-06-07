import styled from '@emotion/styled'

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 12px 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.logo};

  height: 54px;
  box-sizing: border-box;
`

export const NavigationBlock = styled.nav``

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PreferencesBlock = styled.div``
