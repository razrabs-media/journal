import styled from '@emotion/styled'
import type { FC, ReactElement } from 'react'

type StyledRowProps = {
  padding?: string | number
}

const StyledRow = styled.div<StyledRowProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ padding }) =>
    typeof padding === 'string' ? padding : `${padding}px`};
`

type RowProps = StyledRowProps & {
  left?: ReactElement
  center?: ReactElement
  right?: ReactElement
}

export const Row: FC<RowProps> = ({ left, center, right, ...restProps }) => (
  <StyledRow {...restProps}>
    {left}
    {center}
    {right}
  </StyledRow>
)

Row.defaultProps = {
  padding: 14,
}
