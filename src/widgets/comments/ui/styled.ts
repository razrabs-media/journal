import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'
import { GridArea, ModalAction } from 'shared/ui'

export const Header = styled.div`
  display: flex;
  grid-area: header;
  flex-direction: row;
  top: 0;
  justify-content: space-between;
  align-items: baseline;

  padding: 18px 22px 18px 24px;

  background: ${({ theme }) => theme.colors.backgroundSecondary};
`

export const CommentsAmount = styled(Typography)``
CommentsAmount.defaultProps = {
  size: 'sm',
  color: 'primary',
  weight: 'medium',
  uppercase: true,
  as: 'span',
  letterSpacing: 1,
}

export const CommentsContainer = styled(GridArea)`
  overflow-y: auto;
  grid-column: 1;
  grid-auto-flow: row dense;
  grid-auto-rows: min-content;
  grid-template-columns: 100%;
  position: relative;
`

export const CommentsAction = styled(GridArea)`
  background-color: #38393d;
`

export const CommentsLogin = styled(ModalAction)`
  background: transparent;
`
