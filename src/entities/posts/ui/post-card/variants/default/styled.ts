import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { DateAgo, GridArea, Image, ImageWrapper } from 'shared/ui'
import { PostCardVariant } from '../../types'

export const Card = styled.div<{ variant?: PostCardVariant }>`
  display: grid;
  grid-template:
    'preview' auto
    'title' auto;
  gap: 8px;

  ${({ variant }) =>
    variant === PostCardVariant.Point &&
    css`
      @media screen and (max-width: 671px) {
        ${ImageWrapper} {
          height: auto;
          width: auto;
          min-height: initial;
          max-height: initial;
          min-width: initial;
          max-width: initial;
        }

        display: grid;
        grid-template: 'preview title';
        grid-auto-columns: 1fr;
        grid-template-columns: 105px 1fr;
        grid-template-rows: auto;
        column-gap: 10px;
        justify-content: center;
      }
    `}
`

export const TitleGridArea = styled(GridArea)`
  grid-auto-rows: min-content;
`

export const Date = styled(DateAgo)`
  margin-top: 10px;

  @media screen and (max-width: 671px) {
    margin-top: 6px;
  }
`

export const Preview = styled(Image)<{ variant?: PostCardVariant }>`
  width: ${({ variant }) =>
    variant === PostCardVariant.Line ? '100%' : 'auto'};

  height: ${({ variant }) =>
    variant === PostCardVariant.Line ? 'auto' : '100%'};

  ${({ variant }) =>
    variant === PostCardVariant.Point &&
    css`
      @media screen and (max-width: 671px) {
        min-width: initial;
        min-height: initial;
        width: 100%;
        height: auto;
        max-width: 105px;
        max-height: 105px;
      }
    `}
`
