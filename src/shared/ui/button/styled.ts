import styled from '@emotion/styled'

export const Button = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.contrastPrimary};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 12px */
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  padding: 6px 8px;
  transition: 0.2s linear;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.brand};
    border-color: ${({ theme }) => theme.colors.brand};
  }
`

export const FullwidthButton = styled(Button)`
  width: 100%;
  padding: 12px 6px;
  font-size: 16px;
  margin-top: 32px;
`
