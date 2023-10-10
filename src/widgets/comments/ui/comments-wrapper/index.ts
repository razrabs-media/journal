import styled from '@emotion/styled'
import { MediaScreen } from 'shared/ui/theme/responsive'
import { commentsWidgetBackgroundByTheme } from '../styled'
import { Props } from './types'

export const CommentsWrapper = styled.div<Props>`
  display: grid;
  will-change: display;
  grid-template:
    'header' auto
    'content' 1fr
    'action' auto /
    100%;

  width: 100%;

  background: ${({ theme }) => commentsWidgetBackgroundByTheme[theme.name]};

  ${MediaScreen.desktopAndAbove} {
    border-left: 1px solid ${({ theme }) => theme.colors.contrastPrimary};
  }
`
