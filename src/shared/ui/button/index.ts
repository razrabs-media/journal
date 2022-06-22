import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'

export const Button = styled(Typography)`
  cursor: pointer;
  padding: 6px 8px;
`

export const FillButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.brand};
`
