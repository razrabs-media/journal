import Typography from '@razrabs-ui/typography'
import { format, formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'
import { FC } from 'react'
import { Flex } from 'shared/ui'
import { Props } from './types'

export const UserInfo: FC<Props> = ({ date, postsCount, commentsCount }) => {
  const formattedDate = format(new Date(date), 'dd MMMM yyyy', {
    locale: ru,
  })
  const duration = formatDistanceToNow(new Date(date), { locale: ru })

  return (
    <Flex direction='column' gap={8}>
      <Typography size='lg'>{postsCount} материалов открыто</Typography>
      <Typography size='lg'>{commentsCount} комментов написано</Typography>

      <Flex gap={16}>
        <Typography size='lg'>С Разрабами с {formattedDate}</Typography>
        <Typography color='secondary' size='lg'>
          {duration}
        </Typography>
      </Flex>
    </Flex>
  )
}
