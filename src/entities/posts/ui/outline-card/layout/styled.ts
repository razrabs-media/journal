import styled from '@emotion/styled'
import { MediaScreen } from 'shared/ui/theme/responsive/MediaScreen'
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

  .title {
    margin-bottom: 10px !important;
  }

  &:hover {
    .title {
      color: ${({ theme }) => theme.colors.brand};
    }
  }

  ${MediaScreen.mobile} {
    & > * {
      margin-bottom: 10px !important;

      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
`
