import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { VFC } from 'react'
import { ShareButton, ShareType } from 'shared/ui'
import { Tag } from 'shared/ui/tag'
import {
  Description,
  FirstRow,
  ImageWrapper,
  PostImage,
  PostTextWrapper,
  PublicationDate,
  SecondRow,
  ShareBlock,
  StyledHeader,
  TagsAndShare,
  TagsBlock,
  Title,
} from './styled'
import type { Props } from './types'

export const PostHeader: VFC<Props> = (props) => {
  console.log(props.tags)

  return (
    <StyledHeader>
      <FirstRow>
        <ImageWrapper>
          <PostImage alt={props.title} src={props.previewUrl} />

          <PublicationDate transparent uppercase size='small'>
            {format(props.publicationDate, 'dd MMMM, H:mm', {
              locale: ru,
            })}
          </PublicationDate>
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
}
