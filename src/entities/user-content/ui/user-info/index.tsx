import Typography from '@razrabs-ui/typography'
import { format, formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'
import { FC } from 'react'
import { Flex } from 'shared/ui'
import { Props } from './types'

const countFormatter = (titles: string[]) => {
  return (number: number): string => {
    const cases = [2, 0, 1, 1, 1, 2]

    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
      ]
  }
}

export const UserInfo: FC<Props> = ({ date, postsCount, commentsCount }) => {
  const formattedDate = format(new Date(date), 'dd MMMM yyyy', {
    locale: ru,
  })
  const duration = formatDistanceToNow(new Date(date), { locale: ru })
  const postsFormatter = countFormatter(['материал открыт', 'материала открыто', 'материалов открыто'])
  const commentsFormatter = countFormatter(['коммент написан', 'коммента написано', 'комментов написано'])

  return (
    <Flex direction='column' gap={8}>
      <Typography size='lg'>{postsCount} {postsFormatter(postsCount)}</Typography>
      <Typography size='lg'>{commentsCount} {commentsFormatter(commentsCount)}</Typography>

      <Flex gap={16}>
        <Typography size='lg'>С Разрабами с {formattedDate}</Typography>
        <Typography color='secondary' size='lg'>
          {duration}
        </Typography>
      </Flex>
    </Flex>
  )
}
