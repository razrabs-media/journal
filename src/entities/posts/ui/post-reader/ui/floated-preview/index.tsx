import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { VFC } from 'react'
import { ShareButton, ShareType, Tag, Typography } from 'shared/ui'
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

export const FloatedPreview: VFC<Props> = ({
  shouldDisplay,
  previewUrl,
  title,
  publicationDate,
  tags,
}) => {
  const formattedDate = format(publicationDate, 'dd MMMM, H:mm', {
    locale: ru,
  })

  return (
    <Layout>
      <StyledFloatedBlock shouldDisplay={shouldDisplay}>
        <Preview alt={title} src={previewUrl} />

        <Title uppercase size='medium'>
          {title}
        </Title>

        <DateAndShareRow>
          <PublicationDate transparent uppercase size='small'>
            {formattedDate}
          </PublicationDate>

          <ShareBlock>
            <ShareButton social={ShareType.Twitter} />
            <ShareButton social={ShareType.Url} />
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
