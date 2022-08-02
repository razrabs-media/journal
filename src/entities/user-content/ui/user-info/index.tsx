import Typography from '@razrabs-ui/typography'
import { format, formatDistanceToNow } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'
import { ru } from 'date-fns/locale'
import { FC } from 'react'
import { pluralize } from 'shared/lib'
import { Flex } from 'shared/ui'
import { Props } from './types'

export const UserInfo: FC<Props> = ({ date, postsCount, commentsCount }) => {
  const zonedDate = zonedTimeToUtc(date, 'Europe/Moscow')

  const formattedDate = format(zonedDate, 'dd MMMM yyyy', {
    locale: ru,
  })
  const duration = formatDistanceToNow(zonedDate, { locale: ru })

  const formattedPosts = pluralize(
    {
      zero: 'материалов открыто',
      one: 'материал открыт',
      two: 'материала открыто',
    },
    postsCount,
  )
  const formattedComments = pluralize(
    {
      zero: 'комментов написано',
      one: 'коммент написан',
      two: 'коммента написано',
    },
    commentsCount,
  )

  return (
    <Flex direction='column' gap={8}>
      <Typography size='lg'>
        {postsCount} {formattedPosts}
      </Typography>
      <Typography size='lg'>
        {commentsCount} {formattedComments}
      </Typography>

      <Flex gap={16}>
        <Typography size='lg'>С Разрабами с {formattedDate}</Typography>
        <Typography color='secondary' size='lg'>
          {duration}
        </Typography>
      </Flex>
    </Flex>
  )
}
