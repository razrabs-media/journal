import {FC} from 'react'
import CrossIcon from '../../../../public/images/svg/cross.svg'
import OutIcon from '../../../../public/images/svg/out.svg'
import RightIcon from '../../../../public/images/svg/right.svg'
import {Props} from './types'

export const Icon: FC<Props> = ({ type }) => (
  <>
    {type === 'cross' && <CrossIcon />}
    {type === 'out' && <OutIcon />}
    {type === 'right' && <RightIcon />}
  </>
)

export { CrossIcon, OutIcon, RightIcon }
