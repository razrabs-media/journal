import styled from '@emotion/styled'
import { Media } from '@razrabs-ui/responsive'
import { SizeProps } from '../../types'

export const StyledCard = styled.article<SizeProps>`
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

  ${Media.mobile} {
    & > * {
      margin-bottom: 10px !important;

      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
`
