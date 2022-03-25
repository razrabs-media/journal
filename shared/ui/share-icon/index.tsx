import React from 'react'
import ShareIconImage from './share-icon.svg'
import styled from '@emotion/styled'

const StyledShareIcon = styled(ShareIconImage)`
  width: 12px;
  height: 12px;
  cursor: pointer;
`

type ShareIconProps = {
  handleShareButton: () => void
}

const ShareIcon: React.VFC<ShareIconProps> = ({ handleShareButton }) => (
  <StyledShareIcon onClick={handleShareButton} />
)

export default ShareIcon
