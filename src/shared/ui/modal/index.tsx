import Typography from '@razrabs-ui/typography'
import {forwardRef} from 'react'
import {CrossIcon} from '..'
import {IconButton} from '../icon-button'
import {useDisableScroll} from './hooks'
import {Background, Body, Box, Header} from './styles'
import {Props} from './types'

export { Content as ModalContent } from './styles'

export const Modal = forwardRef<HTMLDivElement, Props>(
  ({ title, hide, action, content, onClose }, ref) => {
    useDisableScroll(hide)
    return (
      <Background hide={hide}>
        <Box ref={ref}>
          <Body>
            <Header>
              <Typography size='sm'>{title}</Typography>
              <IconButton onClick={onClose}>
                <CrossIcon />
              </IconButton>
            </Header>

            {content}
          </Body>

          {action}
        </Box>
      </Background>
    )
  },
)

Modal.displayName = 'Modal'
