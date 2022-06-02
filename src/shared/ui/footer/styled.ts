import styled from '@emotion/styled'

export const StyledFooter = styled.footer`
  display: grid;
  grid-auto-flow: row;
  padding: 20px 0 0 0;
  border-top: 1px solid ${({ theme }) => theme.colors.text.primary};
  overflow: hidden;
`

export const Copyright = styled.span`
  text-align: left;

  width: 140px;
  height: 24px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-feature-settings: 'salt' on;
  color: ${({ theme }) => theme.colors.text.secondary};
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
  color: ${({ theme }) => theme.colors.text.primary};
  opacity: 5%;

  overflow: hidden;
  user-select: none;

  @media screen and (max-width: 671px) {
    display: none;
  }
`
