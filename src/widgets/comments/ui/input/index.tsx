import Image from '@razrabs-ui/image'
import { Input, StyledCommentInput } from './styled'

export const CommentInput = () => (
  <StyledCommentInput>
    <Image
      alt='Юзер'
      fit='fill'
      h={40}
      src='https://i.ibb.co/5KL0rqm/Rectangle1.jpg'
      w={40}
    />

    <Input placeholder='Написать...' />
  </StyledCommentInput>
)
