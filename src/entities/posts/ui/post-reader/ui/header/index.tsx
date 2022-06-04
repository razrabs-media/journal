import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import Link from 'next/link'
import { forwardRef, useMemo } from 'react'
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
          <PostImage
            alt={props.title}
            label={formattedDate}
            src={props.previewUrl}
          />
        </ImageWrapper>
        <PostTextWrapper>
          <Title uppercase as='h1'>
            {props.title}
          </Title>

          <Description color='secondary' size='medium'>
            {props.description}
          </Description>
        </PostTextWrapper>
      </FirstRow>

      <SecondRow>
        <TagsAndShare>
          <TagsBlock>
            {props.tags?.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </TagsBlock>

          <ShareBlock>
            <Link href='https://twitter.com/'>
              <a rel='noreferrer' target='_blank' title='Twitter.com'>
                <ShareButton shareType={ShareType.Twitter} />
              </a>
            </Link>
            <ShareButton shareType={ShareType.Url} />
          </ShareBlock>
        </TagsAndShare>
      </SecondRow>
    </StyledHeader>
  )
})

PostHeader.displayName = 'PostHeader'
