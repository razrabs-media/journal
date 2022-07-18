import { FC } from 'react'
import CrossIcon from '../../../../public/images/svg/cross.svg'
import OutIcon from '../../../../public/images/svg/out.svg'
import RightIcon from '../../../../public/images/svg/right.svg'
import SendIcon from '../../../../public/images/svg/send.svg'
import { Props } from './types'

export const Icon: FC<Props> = ({ type, ...props }) => (
  <>
    {type === 'cross' && <CrossIcon />}
    {type === 'out' && <OutIcon />}
    {type === 'right' && <RightIcon />}
    {type === 'send' && <SendIcon {...props} />}
  </>
)

export { CrossIcon, OutIcon, RightIcon, SendIcon }
