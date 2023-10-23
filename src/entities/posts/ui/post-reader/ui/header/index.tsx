import styled from '@emotion/styled'
import { FC, useEffect, useState } from 'react'
import { Badge, DateAgo, Image, Typography } from 'shared/ui'
import { useIsTabletAndBelow } from 'shared/ui/theme/responsive'
import PostAuthor from '../post-author'
import {
  Description,
  PostTextWrapper,
  ShareBlock,
  StyledHeader,
  TagsAndShare,
  TagsBlock,
  Title,
} from './styled'
import type { Props } from './types'

export const DefaultShareButton = styled(Typography)`
  cursor: pointer;
  background: none;
  border: none;
`
DefaultShareButton.defaultProps = {
  as: 'button',
  size: 'sm',
  color: 'secondary',
  uppercase: true,
  letterSpacing: 1,
}

export const PostHeader: FC<Props> = (props) => {
  const isTabletAndBelow = useIsTabletAndBelow()
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
      <PostTextWrapper>
        <Title uppercase as='h1' itemProp='headline name' weight='medium'>
          {props.title}
        </Title>
        <div>
          <PostAuthor url={props.githubAuthor?.usernameUrl}>
            {props.githubAuthor?.name}
          </PostAuthor>

          <DateAgo date={props.publicationDate} letterSpacing={1} size='sm' />
        </div>

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

        <Description color='secondary' itemProp='description' size='xl'>
          {props.description}
        </Description>
      </PostTextWrapper>

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

        <ShareBlock>
          {isTabletAndBelow && props.commentsButton}

          <DefaultShareButton onClick={onDefaultShareClick}>
            Поделиться
          </DefaultShareButton>
        </ShareBlock>
      </TagsAndShare>
    </StyledHeader>
  )
}

PostHeader.displayName = 'PostHeader'
