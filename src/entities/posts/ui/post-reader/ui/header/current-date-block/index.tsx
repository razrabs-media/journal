import React, { VFC } from 'react'
import { Typography } from 'shared/ui'
import { useCurrentDate } from '../../../../../../../shared/ui/hooks/useCurrentDate'
import { StyledCurrentDateBlock } from './styled'

export const CurrentDateBlock: VFC = () => {
  const { currentDate } = useCurrentDate()
  return (
    <StyledCurrentDateBlock>
      <svg
        fill='none'
        height='11'
        viewBox='0 0 11 11'
        width='11'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='5.5' cy='5.5' fill='#C799E3' r='5.5' />
      </svg>

      <Typography uppercase size='small'>
        {currentDate}
      </Typography>
    </StyledCurrentDateBlock>
  )
}
