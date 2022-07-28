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

  & > * {
    margin-bottom: 20px !important;

    &:last-child {
      margin-bottom: 0 !important;
    }
  }

  &:hover {
    .title {
      color: ${({ theme }) => theme.colors.brand};
    }
  }

  @media screen and (max-width: 671px) {
    & > * {
      margin-bottom: 10px !important;

      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
`
