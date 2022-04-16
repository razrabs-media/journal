import { VFC } from 'react'
import { StyledButton, StyledShareTwitter, StyledShareURL } from './styled'
import { Props, ShareType } from './types'

const ShareComponent = {
  [ShareType.Url]: <StyledShareURL />,
  [ShareType.Twitter]: <StyledShareTwitter />,
}

export const ShareButton: VFC<Props> = ({ social, ...restProps }) => (
  <StyledButton {...restProps}>{ShareComponent[social]}</StyledButton>
)

export { ShareType }
export type { Props as ShareButtonProps }
