import styled from '@emotion/styled'
import { Tag } from 'shared/ui'
import { accountBadgeColorByTheme } from './utils'

export const PreferencesBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const AccountBadge = styled(Tag)`
  font-weight: 500;

  color: ${({ theme }) => accountBadgeColorByTheme[theme.name]};
  background-color: ${({ theme }) => theme.colors.brand};
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
