import styled from '@emotion/styled'
import { ComponentProps, FC } from 'react'
import ShareImageURL from './share-icon.svg'
import ShareImageTwitter from './twitter-icon.svg'

const StyledShareURL = styled(ShareImageURL)`
  width: 12px;
  height: 12px;
`
//svg has different sizes by layout
const StyledShareTwitter = styled(ShareImageTwitter)`
  width: 23px;
  height: 12px;
`

const ShareComponent = {
  url: <StyledShareURL />,
  twitter: <StyledShareTwitter />,
}

const StyledButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  background: transparent;
  cursor: pointer;
  border: none;
`

type ShareButtonProps = {
  social: 'url' | 'twitter'
} & ComponentProps<'button'>

export const ShareButton: FC<ShareButtonProps> = ({ social, ...restProps }) => (
  <StyledButton {...restProps}>{ShareComponent[social]}</StyledButton>
)
