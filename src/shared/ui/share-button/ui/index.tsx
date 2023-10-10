import styled from '@emotion/styled'

import ShareTwitterIcon from './icons/share-twitter-icon.svg'
import ShareUrlIcon from './icons/share-url-icon.svg'
import SharedIcon from './icons/shared-icon.svg'

export const StyledButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  border: none;
  cursor: pointer;
  background: none;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  font-family:
    Styrene B LC,
    sans-serif;
  font-feature-settings: 'salt' on;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 100%;
  text-transform: uppercase;

  & svg {
    margin-right: 4px;
  }
`

export { SharedIcon, ShareTwitterIcon, ShareUrlIcon }
