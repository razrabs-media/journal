import Badge from '@razrabs-ui/badge'
import Image from '@razrabs-ui/image'
import PostAuthor from '@razrabs-ui/post-author'
import { FC, useMemo } from 'react'
import { parseDate } from 'shared/lib/parse-date'
import { ShareButton, ShareType } from 'shared/ui'
import { useDisplayAnimation } from '../../lib'
import {
  DateAndShareRow,
  Layout,
  Line,
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
  githubAuthor,
  title,
  publicationDate,
  tags,
}) => {
  const formattedDate = useMemo(
    () => parseDate(publicationDate),
    [publicationDate],
  )

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
        <Image
          align='center'
          alt={title}
          fit='cover'
          maxH={505}
          src={previewUrl}
          w='100%'
        />

        <Title uppercase size='lg'>
          {title}
        </Title>

        <PostAuthor>хихихих</PostAuthor>

        <DateAndShareRow>
          <PublicationDate uppercase color='secondary' size='sm'>
            {formattedDate}
          </PublicationDate>

          <ShareBlock>
            <ShareButton shareType={ShareType.Twitter} />
            <ShareButton shareType={ShareType.Url} />
          </ShareBlock>
        </DateAndShareRow>

        <Line />

        <TagsBlock>
          {tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </TagsBlock>
      </StyledFloatedBlock>
    </Layout>
  )
}
