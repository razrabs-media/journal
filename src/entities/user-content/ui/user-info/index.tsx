import Typography from '@razrabs-ui/typography'
import { format, formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'
import { FC } from 'react'
import { Flex } from 'shared/ui'
import { Props } from './types'
import { pluralize } from "shared/lib"

export const UserInfo: FC<Props> = ({ date, postsCount, commentsCount }) => {
  const formattedDate = format(new Date(date), 'dd MMMM yyyy', {
    locale: ru,
  })
  const duration = formatDistanceToNow(new Date(date), { locale: ru })
  const formattedPosts = pluralize({ zero: 'материал открыт', one: 'материала открыто', few: 'материалов открыто' }, postsCount)
  const formattedComments = pluralize({ zero: 'коммент написан', one: 'коммента написано', few: 'комментов написано' }, commentsCount)

  return (
    <Flex direction='column' gap={8}>
      <Typography size='lg'>{postsCount} {formattedPosts}</Typography>
      <Typography size='lg'>{commentsCount} {formattedComments}</Typography>

      <Flex gap={16}>
        <Typography size='lg'>С Разрабами с {formattedDate}</Typography>
        <Typography color='secondary' size='lg'>
          {duration}
        </Typography>
      </Flex>
    </Flex>
  )
}
