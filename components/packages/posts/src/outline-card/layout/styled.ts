import styled from '@emotion/styled'
import { SizeProps } from '../../types'

export const StyledCard = styled.div<SizeProps>`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: ${({ small }) => (small ? '250px' : '400px')};
  padding: 52px 10px;

  border: 1px solid ${({ theme }) => theme.colors.logo};

  gap: 16px;

  &:hover {
    .title {
      color: ${({ theme }) => theme.colors.brand};
    }
  }
`
