import styled from '@emotion/styled'
import Badge from '@razrabs-ui/badge'
import { useIsTabletAndBelow } from '@razrabs-ui/responsive'
import Typography from '@razrabs-ui/typography'
import { forwardRef, useEffect, useState } from 'react'
import { ShareButton, ShareType } from 'shared/ui'
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

// Для FloatedPreview нас интересует ссылка на FirstRow, а не на Header
export const PostHeader = forwardRef<HTMLDivElement, Props>((props) => {
  const isTabletAndBelow = useIsTabletAndBelow()
  const [href, setHref] = useState('')

  useEffect(() => {
    if (typeof window === undefined) {
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
    <StyledHeader ref={props.headerVisibilityRef}>
      <PostTextWrapper>
        <Title uppercase as='h1' itemProp='headline name' weight='medium'>
          {props.title}
        </Title>
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
          {props.commentsButton}

          {isTabletAndBelow ? (
            <DefaultShareButton onClick={onDefaultShareClick}>
              Поделиться
            </DefaultShareButton>
          ) : (
            <>
              <ShareButton
                as='a'
                href={`https://twitter.com/intent/tweet?url=${href}`}
                shareType={ShareType.Twitter}
              />
              <ShareButton shareType={ShareType.Url} />
            </>
          )}
        </ShareBlock>
      </TagsAndShare>
    </StyledHeader>
  )
})

PostHeader.displayName = 'PostHeader'
