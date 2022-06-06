import Badge from '@razrabs-ui/badge'
import Image from '@razrabs-ui/image'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { forwardRef, useMemo } from 'react'
import { DateAgo, ShareButton, ShareType } from 'shared/ui'
import {
  Description,
  FirstRow,
  ImageWrapper,
  PostTextWrapper,
  SecondRow,
  ShareBlock,
  StyledHeader,
  TagsAndShare,
  TagsBlock,
  Title,
} from './styled'
import type { Props } from './types'

// Для FloatedPreview нас интересует ссылка на FirstRow, а не на Header
export const PostHeader = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const formattedDate = useMemo(
    () =>
      format(props.publicationDate, 'dd MMMM, H:mm', {
        locale: ru,
      }),
    [props.publicationDate],
  )

  return (
    <StyledHeader>
      <FirstRow ref={ref}>
        <ImageWrapper>
          <Image
            align='center'
            alt={props.title}
            fit='cover'
            maxH={505}
            src={props.previewUrl}
            width='100%'
          />
          <DateAgo date={props.publicationDate} size='sm' />
        </ImageWrapper>

        <PostTextWrapper>
          <Title uppercase as='h1'>
            {props.title}
          </Title>

          <Description color='secondary' size='xl'>
            {props.description}
          </Description>
        </PostTextWrapper>
      </FirstRow>

      <SecondRow>
        <TagsAndShare>
          <TagsBlock>
            {props.tags?.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </TagsBlock>

          <ShareBlock>
            <ShareButton shareType={ShareType.Twitter} />
            <ShareButton shareType={ShareType.Url} />
          </ShareBlock>
        </TagsAndShare>
      </SecondRow>
    </StyledHeader>
  )
})

PostHeader.displayName = 'PostHeader'
