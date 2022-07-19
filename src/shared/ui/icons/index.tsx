import { FC } from 'react'
import AwayIcon from '../../../../public/images/svg/away.svg'
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
    {type === 'away' && <AwayIcon {...props} />}
  </>
)

export { CrossIcon, OutIcon, RightIcon, SendIcon }
