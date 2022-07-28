import styled from '@emotion/styled'
import { SizeProps } from '../../types'

export const StyledRow = styled.div<SizeProps>`
  display: flex;
  flex-direction: row;

  /* Откуда брались значения на минимальные высоты в 105 и 140 писелей? */
  /* min-height: ${({ small }) => (small ? '105px' : '140px')}; */
  & > * {
    margin-right: ${({ small }) => (small ? '10px' : '24px')};

    &:last-child {
      margin-right: 0;
    }
  }

  &:hover {
    .title {
      color: ${({ theme }) => theme.colors.brand};
    }
  }
`

export const Content = styled.div<SizeProps>`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: ${({ small }) => (small ? '6px' : '10px')};

    &:last-child {
      margin-bottom: 0;
    }
  }
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
