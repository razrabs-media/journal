import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import Link from 'next/link'
import { FC } from 'react'
import { ShareButton, ShareType, Tag } from 'shared/ui'
import { useDisplayAnimation } from '../../lib'
import {
  DateAndShareRow,
  Layout,
  Line,
  Preview,
  PublicationDate,
  ShareBlock,
  StyledFloatedBlock,
  TagsBlock,
  Title,
} from './styled'
import type { Props } from './types'

export const FloatedPreview: FC<Props> = ({
  shouldDisplay,
  transitionTime,
  previewUrl,
  title,
  publicationDate,
  tags,
}) => {
  const formattedDate = format(publicationDate, 'dd MMMM, H:mm', {
    locale: ru,
  })

  const { display, fadeIn, fadeOut } = useDisplayAnimation(
    shouldDisplay,
    transitionTime,
  )

  return (
    <Layout>
      <StyledFloatedBlock
        fadeIn={fadeIn}
        fadeOut={fadeOut}
        shouldDisplay={display}
        transitionTime={transitionTime}
      >
        <Preview alt={title} src={previewUrl} />

        <Title uppercase size='medium'>
          {title}
        </Title>

        <DateAndShareRow>
          <PublicationDate transparent uppercase size='small'>
            {formattedDate}
          </PublicationDate>

          <ShareBlock>
            <Link href='https://twitter.com/'>
              <a rel='noreferrer' target='_blank' title='Twitter.com'>
                <ShareButton shareType={ShareType.Twitter} />
              </a>
            </Link>
            <ShareButton shareType={ShareType.Url} />
          </ShareBlock>
        </DateAndShareRow>

        <Line />

        <TagsBlock>
          {tags?.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </TagsBlock>
      </StyledFloatedBlock>
    </Layout>
  )
}
