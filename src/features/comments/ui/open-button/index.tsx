import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'

export const OpenCommentsButton = styled(Typography)`
  cursor: pointer;
  background: none;
  border: none;
`
OpenCommentsButton.defaultProps = {
  as: 'button',
  size: 'sm',
  color: 'secondary',
  uppercase: true,
  letterSpacing: 1,
}
