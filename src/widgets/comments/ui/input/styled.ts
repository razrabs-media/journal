import styled from '@emotion/styled'
import { ChangeEvent } from 'react'

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
  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.logo};
  font-family: 'Styrene B LC', sans-serif;
`

// TODO: very tricky способ. надо делать свой textarea
Input.defaultProps = {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = e

    if (!target.value.length) {
      target.style.padding = '9px 0'
    } else {
      target.style.padding = '0'
    }

    target.style.height = '40px'
    target.style.height = target.scrollHeight + 'px'
  },
}

export const StyledCommentInput = styled.div`
  left: 0;
  right: 0;
  padding: 20px 24px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  transition: background 50ms ease-in-out;

  // TODO: вынести в @razrabs-ui/theme
  &:focus-within {
    background: #38393d;
  }
`
