import styled from '@emotion/styled'
import { useState, VFC } from 'react'

import CopySvg from './copy.svg'

const CopyButtonWrapper = styled.button<{ disabled: boolean }>`
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: inherit;

  border: none;
  padding: 4px;
  font: inherit;
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
  outline: inherit;

  font-family: 'JetBrainsMono', serif;
  font-size: 14px;

  color: ${({ theme }) => theme.colors.text.secondary};
  svg {
    fill: ${({ theme }) => theme.colors.text.primary};
    width: 18px;
    height: 18px;

    :hover {
      fill: grey;
    }
  }
`

export const CopyButton: VFC<React.ComponentProps<'button'>> = (props) => {
  const [text, setText] = useState<string | null>()
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!props.onClick) return

    props.onClick(e)

    setText('Скопировано')

    setTimeout(() => {
      setText(null)
    }, 1000)
  }

  return (
    <CopyButtonWrapper {...props} disabled={Boolean(text)} onClick={onClick}>
      {text || <CopySvg />}
    </CopyButtonWrapper>
  )
}
