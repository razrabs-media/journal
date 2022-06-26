import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  padding: 18px 22px 18px 24px;
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
  flex-direction: column;
`
