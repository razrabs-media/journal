import React from 'react'
import ShareIconImage from './share-icon.svg'
import styled from '@emotion/styled'

const StyledShareIcon = styled(ShareIconImage)`
  width: 12px;
  height: 12px;
  cursor: pointer;
`

type handleShareButtonType = {
  handleShareButton: () => void
}

const ShareIcon: React.FC<handleShareButtonType> = ({
  handleShareButton,
}): JSX.Element => <StyledShareIcon onClick={handleShareButton} />

export default ShareIcon
