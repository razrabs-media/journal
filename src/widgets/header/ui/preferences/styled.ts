import styled from '@emotion/styled'
import { Tag } from 'shared/ui'

export const PreferencesBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const AccountBadge = styled(Tag)`
  font-weight: 500;
`

export const AuthButton = styled(Tag)`
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;

  &:active {
    background: none;
    color: ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.brand};
  }
`
