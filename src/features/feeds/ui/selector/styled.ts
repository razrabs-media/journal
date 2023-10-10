import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Badge } from 'shared/ui'
import { MediaScreen } from 'shared/ui/theme/responsive'

export const FeedsContainer = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  & > a {
    margin-right: 4px;
    margin-top: 4px;

    &:last-child {
      margin-right: 0;
    }
  }

  margin-bottom: 46px;

  // Для мобильных сетка 1 колонка
  ${MediaScreen.mobile} {
    margin-bottom: 0;
  }
`

export const FeedBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>`
  font-weight: 400;

  ${({ theme, active }) => {
    if (active) {
      return css`
        font-weight: 500;
        color: ${theme.colors.primary};
        background-color: ${theme.colors.backgroundSecondary};
        &:hover {
          color: ${theme.colors.primary};
          background-color: ${theme.colors.backgroundSecondary};
        }
      `
    }

    return css`
      &:hover {
        color: ${theme.colors.contrastSecondary};
        background-color: ${theme.colors.secondary};
      }
    `
  }}
`
