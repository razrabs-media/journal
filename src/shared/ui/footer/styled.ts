import styled from '@emotion/styled'

export const StyledFooter = styled.footer`
  display: grid;
  grid-auto-flow: row;
  padding: 20px 0 0 0;
  border-top: 1px solid ${({ theme }) => theme.colors.logo};
  overflow: hidden;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-feature-settings: 'salt' on;

  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 671px) {
    height: 205px;
  }
`

export const StyledFootMenu = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 671px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
  }
`

export const StyledMenuBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 62%;
  @media screen and (max-width: 1319px) {
    flex-direction: column;
    align-items: flex-end;
  }
  @media screen and (max-width: 671px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const StyledNav = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  list-style-type: none;
  a {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media screen and (max-width: 671px) {
    width: 135px;
    flex-direction: column;
  }
`
export const StyledShareNav = styled(StyledNav)``
export const StyledText = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  @media screen and (max-width: 671px) {
    display: none;
  }
`

export const Copyright = styled.span`
  text-align: left;
  width: 140px;
  height: 24px;
  font-feature-settings: 'salt' on;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Logo = styled.span`
  --width: min(1848px, calc(100vw - 48px));

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
`
