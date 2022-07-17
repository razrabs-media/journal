import styled from '@emotion/styled'
import { Tag } from 'shared/ui'

export const PreferencesBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`

export const AccountBadge = styled(Tag)`
  font-weight: 500;
`

export const AuthButton = styled(Tag)`
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  &:active {
    background: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`
