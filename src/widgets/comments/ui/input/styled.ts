import styled from '@emotion/styled'
import { IconButton } from 'shared/ui'

export const Input = styled.textarea`
  flex-grow: 1;

  outline: none;
  background: transparent;
  border: none;

  max-height: 300px;

  resize: none;

  line-height: 22px;
  font-size: 16px;
  height: 40px;

  padding: 9px 0;
  /* hide scrollbar
      for test:
        1. comment out line 26
        2. enter 255 'f' letters without spaces in textarea
     If you type a lot of "F" letters that fill the whole line,
     you will be surprised.
  */
  margin-right: 1px;
  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.logo};
  font-family: 'Styrene B LC', sans-serif;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledCommentInput = styled.div`
  left: 0;
  right: 0;
  padding: 20px 14px 20px 24px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;

  transition: background 50ms ease-in-out;

  // TODO: вынести в @razrabs-ui/theme
  &:focus-within {
    background: #38393d;
  }
`

export const StyledSendButton = styled(IconButton)`
  width: 40px;
  height: 40px;
  margin: 0;
  align-items: center;
  justify-content: center;

  &:hover {
    background: none;
  }
`
