import {FC} from 'react'
import {Flex, ModalContent} from 'shared/ui'
import {Avatar} from './styles'
import {Props} from './types'
import {Name, UserInfo} from './ui'

export const User: FC<Props> = ({
  avatarUrl,
  login,
  name,
  registrationDate,
}) => (
  <ModalContent>
    <Flex direction='column' gap={48}>
      <Flex direction='column' gap={16}>
        <Avatar src={avatarUrl} />
        <Name login={login} name={name} />
      </Flex>

      <UserInfo date={registrationDate} />
    </Flex>
  </ModalContent>
)
