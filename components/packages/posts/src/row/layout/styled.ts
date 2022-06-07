import styled from '@emotion/styled'

import type { SizeProps } from '../types'

export const StyledRow = styled.div<SizeProps>`
  display: flex;
  flex-direction: row;

  gap: ${({ small }) => (small ? '10px' : '24px')};

  &:hover {
    .title {
      color: ${({ theme }) => theme.colors.brand};
    }
  }
`

export const Content = styled.div<SizeProps>`
  display: flex;
  flex-direction: column;

  gap: ${({ small }) => (small ? '6px' : '10px')};
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ChiefBadgeWrapper = styled.div`
  margin-right: 15px;
`

export const AdditionalInfoWrapper = styled.div`
  margin-left: 20px;
`
