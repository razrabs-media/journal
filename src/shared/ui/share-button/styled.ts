import styled from '@emotion/styled'
import ShareImageURL from './icons/share-icon.svg'
import ShareImageTwitter from './icons/twitter-icon.svg'

export const StyledShareURL = styled(ShareImageURL)`
  width: 12px;
  height: 12px;
`
//svg has different sizes by layout
export const StyledShareTwitter = styled(ShareImageTwitter)`
  width: 23px;
  height: 12px;
`

export const StyledButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  background: transparent;
  cursor: pointer;
  border: none;
`
