import styled from '@emotion/styled'
import { MediaScreen } from 'shared/ui/theme/responsive'
import { Typography } from 'shared/ui/typography'

export const StyledFooter = styled.footer`
  display: grid;
  grid-auto-flow: row;
  padding: 20px 0 0 0;
  border-top: 1px solid ${({ theme }) => theme.colors.logo};
  overflow: hidden;
  margin-top: 96px;
  overflow-wrap: initial;

  ${MediaScreen.mobile} {
    height: 205px;
    margin-top: 70px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${MediaScreen.mobile} {
    flex-direction: column;
    justify-content: flex-start;

    & > * {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: calc(100% / 3 * 2);

  ${MediaScreen.desktopAndBelow} {
    grid-template-columns: 1fr;
  }

  ${MediaScreen.mobile} {
    grid-template-columns: 1fr 1fr;
    width: 276px;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  list-style-type: none;

  & > a {
    margin-left: 16px;
  }

  ${MediaScreen.desktopAndBelow} {
    justify-content: end;
  }

  ${MediaScreen.mobile} {
    flex-direction: column;
    justify-content: flex-start;

    & > a {
      margin-left: 0;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

export const Share = styled(StyledNav)`
  justify-content: end;
`

export const MoreLabel = styled(Typography)`
  ${MediaScreen.mobile} {
    display: none;
  }
`

export const Copyright = styled.span`
  text-align: left;
  width: 140px;
  height: 24px;
`

export const Logo = styled.span`
  margin: 0 calc(var(--width) * -0.014) calc(var(--width) * -0.014);

  text-transform: uppercase;
  text-align: center;
  font-size: calc(var(--width) * 0.16);
  font-weight: bold;
  line-height: calc(var(--width) * 0.131);
  letter-spacing: calc(var(--width) * 0.024);
  font-feature-settings: 'salt' on;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 5%;
  overflow: hidden;
  user-select: none;

  ${MediaScreen.mobile} {
    display: none;
  }
`
