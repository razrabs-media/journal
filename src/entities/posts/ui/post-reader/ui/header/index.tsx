import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { forwardRef } from 'react'
import { ShareButton, ShareType } from 'shared/ui'
import { Tag } from 'shared/ui/tag'
import {
  Description,
  FirstRow,
  ImageWrapper,
  PostImage,
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
  const formattedDate = format(props.publicationDate, 'dd MMMM, H:mm', {
    locale: ru,
  })

  return (
    <StyledHeader>
      <FirstRow ref={ref}>
        <ImageWrapper>
          <PostImage
            alt={props.title}
            label={formattedDate}
            src={props.previewUrl}
          />
        </ImageWrapper>
        <PostTextWrapper>
          <Title>{props.title}</Title>

          <Description color='secondary' size='medium'>
            {props.description}
          </Description>
        </PostTextWrapper>
      </FirstRow>

      <SecondRow>
        <div />

        <TagsAndShare>
          <TagsBlock>
            {props.tags?.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </TagsBlock>

          <ShareBlock>
            <ShareButton social={ShareType.Twitter} />
            <ShareButton social={ShareType.Url} />
          </ShareBlock>
        </TagsAndShare>
      </SecondRow>
    </StyledHeader>
  )
})

PostHeader.displayName = 'PostHeader'
