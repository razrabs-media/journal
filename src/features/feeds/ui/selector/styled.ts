import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Badge from '@razrabs-ui/badge'

export const FeedsContainer = styled.div`
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

  margin-bottom: 64px;

  // Для мобильных сетка 1 колонка
  @media screen and (max-width: ${({ theme }) =>
      `${parseInt(theme.breakpoints.sm) - 1}px`}) {
    margin-bottom: 20px;
  }
`

export const FeedBadge = styled(Badge)<{ active?: boolean }>`
  ${({ theme, active }) => {
    if (active) {
      return css`
        color: ${theme.colors.contrastPrimary};
        background-color: ${theme.colors.primary};
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
