import styled from '@emotion/styled'
import { IconButton, SendIcon } from 'shared/ui'

export const Input = styled.textarea`
  display: block;
  flex-grow: 1;
  align-items: center;

  outline: none;
  background: transparent;
  border: none;

  overflow: hidden;

  height: 40px;
  max-height: 300px;

  padding: 9px 0;

  line-height: 22px;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;

  color: #f7f8fc;
  font-family: 'Styrene B LC', sans-serif;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledCommentInput = styled.div`
  left: 0;
  right: 0;
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;

  transition: background 50ms ease-in-out;

  // TODO: вынести в @razrabs-ui/theme
  &:focus-within {
    background: #38393d;
  }

  @media screen and (min-width: ${({ theme }) =>
      `${parseInt(theme.breakpoints.md) - 1}px`}) {
    padding: 20px 24px 20px 24px;
  }
`

export const StyledSendIcon = styled(SendIcon)`
  fill: currentColor;
`

export const StyledSendButton = styled(IconButton)<{ hide?: boolean }>`
  width: 40px;
  height: 40px;
  margin: 0;
  align-items: center;
  color: ${({ theme }) => theme.colors.brand};
  justify-content: center;
  transition: 0.2s all cubic-bezier(0.55, 0.06, 0.7, 0.21);
  opacity: ${({ hide }) => (hide ? '0' : '1')};

  &:hover {
    background: none;
  }

  &:active {
    color: #b481d4;
  }
`
