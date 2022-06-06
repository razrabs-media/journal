import { PostCardProps, PostType } from '@razrabs-ui/posts'
import { format, formatDistanceStrict, isBefore, subDays } from 'date-fns'
import { ru } from 'date-fns/locale'
import { FC } from 'react'
import { PostData } from '../ui/post-card/types'

function getStringDate(date: number): string {
  // Если больше, чем 7 дней назад - показываем полную дату

  const isFullDate = isBefore(date, subDays(new Date(), 7))

  return isFullDate
    ? format(date, 'd MMMM, H:mm', {
        locale: ru,
      })
    : formatDistanceStrict(date, new Date(), {
        locale: ru,
        addSuffix: true,
      })
}

export function withPropsAdapter(Component: FC<PostCardProps>): FC<PostData> {
  const Wrapper = (props: PostData) => {
    const adoptedProps: PostCardProps = {
      type: PostType.Article,
      title: props.title,
      preview: props.previewUrl,
      date: getStringDate(props.publicationDate),
      chiefPost: props.chiefPost,
    }

    return <Component {...adoptedProps} />
  }

  Wrapper.displayName = 'PostCardPropsAdapter'

  return Wrapper
}
