import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useState } from 'react'
import { forwardRef, useMemo } from 'react'
import { ShareButton, ShareType, Typography } from 'shared/ui'
import { Tag } from 'shared/ui/tag'
import {
  Description,
  FirstRow,
  ImageWrapper,
  PostImage,
  PostTextWrapper,
  SecondRow,
  ShareBlock,
  StyledCurrentDateBlock,
  StyledHeader,
  TagsAndShare,
  TagsBlock,
  Title,
} from './styled'
import type { Props } from './types'

// Для FloatedPreview нас интересует ссылка на FirstRow, а не на Header
export const PostHeader = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [minutes, setMinutes] = useState<number>(0)

  const formattedDate = useMemo(
    () =>
      format(props.publicationDate, 'dd MMMM, H:mm', {
        locale: ru,
      }),
    [props.publicationDate],
  )

  setInterval(() => {
    setMinutes(new Date().getMinutes())
  }, 60000)

  const currentDate = useMemo(
    () =>
      format(Date.now(), 'dd MMMM, H:mm', {
        locale: ru,
      }),
    [minutes],
  )

  return (
    <StyledHeader>
      <StyledCurrentDateBlock>
        <img alt='Текущая дата' src='/images/svg/ellipse.svg' />
        <Typography uppercase size='small'>
          {currentDate}
        </Typography>
      </StyledCurrentDateBlock>

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
            <ShareButton social={ShareType.Twitter} />
            <ShareButton social={ShareType.Url} />
          </ShareBlock>
        </TagsAndShare>
      </SecondRow>
    </StyledHeader>
  )
})

PostHeader.displayName = 'PostHeader'
