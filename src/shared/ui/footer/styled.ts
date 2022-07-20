import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'

export const StyledFooter = styled.footer`
  display: grid;
  grid-auto-flow: row;
  padding: 20px 0 0 0;
  border-top: 1px solid ${({ theme }) => theme.colors.logo};
  overflow: hidden;

  @media screen and (max-width: 671px) {
    height: 205px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 671px) {
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

  @media screen and (max-width: 1319px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 671px) {
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

  @media screen and (max-width: 1319px) {
    justify-content: end;
  }

  @media screen and (max-width: 671px) {
    flex-direction: column;

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
  @media screen and (max-width: 671px) {
    display: none;
  }
`

export const Copyright = styled.span`
  text-align: left;
  width: 140px;
  height: 24px;
`

export const Logo = styled.span`
  margin: 0 0 calc(var(--width) * -0.014) calc(var(--width) * -0.014);

  text-transform: uppercase;
  text-align: center;
  font-size: calc(var(--width) * 0.165);
  font-weight: bold;
  line-height: calc(var(--width) * 0.131);
  letter-spacing: calc(var(--width) * 0.024);
  font-feature-settings: 'salt' on;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 5%;
  overflow: hidden;
  user-select: none;

  @media screen and (max-width: 671px) {
    display: none;
  }

  @media screen and (min-width: 1900px) {
    letter-spacing: calc(var(--width) * 0.026);
  }
`
