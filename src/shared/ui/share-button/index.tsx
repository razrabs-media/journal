import { FC, useMemo } from 'react'

import { withShareTwitter, withShareUrl } from './lib'
import { Props, ShareType } from './types'
import { StyledButton } from './ui'

const ShareButtonHOC = {
  [ShareType.Url]: withShareUrl,
  [ShareType.Twitter]: withShareTwitter,
}

export const ShareButton: FC<Props> = ({ shareType, ...restProps }) => {
  const Component = useMemo(() => {
    const HOC = ShareButtonHOC[shareType]

    return HOC ? HOC(StyledButton) : StyledButton
  }, [shareType])

  return <Component {...restProps} />
}

export { ShareType }
export type { Props as ShareButtonProps }
