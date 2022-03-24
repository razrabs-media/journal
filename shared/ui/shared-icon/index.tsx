import React from 'react'
import shareIcon from './Share-icon.svg'
import styled from '@emotion/styled'

const StyledShareIcon = styled(shareIcon)`
  width: 12px;
  height: 12px;
  cursor: pointer;
`
const handleShareButton = () => {
  if (navigator.share) {
    navigator
      .share({
        url: `${window.location.href}`,
      })
      .then(() => {
        console.log('Sharing successfull')
      })
      .catch(() => {
        console.log('Sharing failed')
      })
  } else {
    alert('Sorry! Your browser does not support Web Share API')
  }
}

const ShareIcon = () => <StyledShareIcon onClick={handleShareButton} />

export default ShareIcon
