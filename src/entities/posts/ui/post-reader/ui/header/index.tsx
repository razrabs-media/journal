import { FC, useEffect, useState } from 'react'
import { Badge, Button, DateAgo, Divider, Image } from 'shared/ui'
import PostAuthor from '../post-author'
import {
  ImageWrapper,
  InfoWrapper,
  PostTextWrapper,
  ShareBlock,
  StyledHeader,
  TagsAndShare,
  TagsBlock,
  Title,
} from './styled'
import type { Props } from './types'

export const PostHeader: FC<Props> = (props) => {
  const [href, setHref] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    setHref(window.location.href)
  }, [])

  const onDefaultShareClick = () => {
    const shareData = {
      url: href,
    }

    navigator.share && navigator.share(shareData)
  }

  return (
    <StyledHeader>
      <TagsAndShare>
        <TagsBlock
          itemScope
          itemProp='about'
          itemType='https://schema.org/Thing'
        >
          {props.tags?.map((tag) => (
            <Badge key={tag} itemProp='name' margin='2px 4px 0 0'>
              {tag}
            </Badge>
          ))}
        </TagsBlock>
      </TagsAndShare>
      <Title as='h1' itemProp='headline name' weight='medium'>
        {props.title}
      </Title>
      <PostTextWrapper>
        <InfoWrapper>
          <PostAuthor as='span' url={props.githubAuthor?.usernameUrl}>
            {props.githubAuthor?.name}
          </PostAuthor>
          <span>∙</span>
          <DateAgo date={props.publicationDate} letterSpacing={1} size='sm' />
        </InfoWrapper>
        <ImageWrapper>
          {props.previewUrl ? (
            <Image
              key={props.uid}
              priority
              align='center'
              alt={props.title}
              fit='cover'
              itemProp='image'
              loadingSize='sm'
              maxH={505}
              src={props.previewUrl}
              width='100%'
            />
          ) : (
            <Divider />
          )}
        </ImageWrapper>

        <ShareBlock>
          {props.commentsButton}

          <Button onClick={onDefaultShareClick}>Поделиться</Button>
        </ShareBlock>
      </PostTextWrapper>
    </StyledHeader>
  )
}

PostHeader.displayName = 'PostHeader'
