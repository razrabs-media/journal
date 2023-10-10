import { ReactNode } from 'react'
import { Typography } from 'shared/ui'
import { ModalContent } from 'shared/ui'

export const SignInContent: ReactNode = (
  <ModalContent>
    <Typography uppercase size='xl' weight='medium'>
      Мы логиним через <br /> гитхаб
    </Typography>
    <Typography lineHeight='28px' size='lg'>
      После логина появится возможность комментировать материалы. А дальше мы
      придумаем, какие возможности появятся у залогированного читателя
    </Typography>
  </ModalContent>
)
