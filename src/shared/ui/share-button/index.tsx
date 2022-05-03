import { FC } from 'react'
import {
  StyledButton,
  StyledClickedShareURL,
  StyledShareTwitter,
  StyledShareURL,
} from './styled'
import { Props, ShareType } from './types'

const ShareComponent = {
  [ShareType.Url]: <StyledShareURL />,
  [ShareType.Twitter]: <StyledShareTwitter />,
}

export const ShareButton: FC<Props> = ({ social, clicked, ...restProps }) => (
  <StyledButton {...restProps}>
    {clicked ? <StyledClickedShareURL /> : ShareComponent[social]}
  </StyledButton>
)

export { ShareType }
export type { Props as ShareButtonProps }
