import { StyledSpinner } from './styled'

export const Spinner = () => (
  <StyledSpinner viewBox='0 0 50 50'>
    <circle
      className='path'
      cx='25'
      cy='25'
      fill='none'
      r='20'
      strokeWidth='2'
    />
  </StyledSpinner>
)
