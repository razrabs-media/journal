import styled from '@emotion/styled'

export const WrapperFooter = styled.div`
  display: grid;
  grid-auto-flow: row;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.contrast};
`
export const Copyleft = styled.div`
  height: 24px;
  width: 140px;
  text-align: left;
  margin-top: 20px;
`

export const FooterLogo = styled.p`
  --width: min(1900px, calc(100vw - 48px));
  padding: 0;
  font-family: Styrene B LC, serif;
  font-feature-settings: 'salt' on;
  color: ${({ theme }) => theme.colors.primary.main};
  opacity: 5%;
  overflow: hidden;
  text-transform: uppercase;
  font-weight: bold;
  font-size: calc(var(--width) * 0.163);
  margin: 0 0 0 calc(var(--width) * -0.014);
  line-height: calc(var(--width) * 0.131);
  letter-spacing: calc(var(--width) * 0.024);
`
