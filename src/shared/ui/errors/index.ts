import styled from '@emotion/styled'

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  text-transform: uppercase;
  font-feature-settings: 'salt' on;
  color: ${({ theme }) => theme.colors.primary};
  max-width: 350px;

  & + footer {
    margin-top: 12px;
  }
`
export const ErrorLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`
