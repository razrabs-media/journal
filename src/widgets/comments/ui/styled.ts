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

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  grid-area: content;
  overflow-y: auto;
  position: relative;
  --webkit-overflow-scrolling: touch;
`

export const CommentsAction = styled(GridArea)`
  background-color: #38393d;
`

export const CommentsLogin = styled(ModalAction)`
  background: transparent;
`
