import styled from '@emotion/styled'
import Badge from '@razrabs-ui/badge'
import Image from '@razrabs-ui/image'
import PostAuthor from '@razrabs-ui/post-author'
import { useIsTabletAndBelow } from '@razrabs-ui/responsive'
import Typography from '@razrabs-ui/typography'
import { forwardRef, useEffect, useState } from 'react'
import { DateAgo, ShareButton, ShareType } from 'shared/ui'
import {
  Description,
  FirstRow,
  ImageDescription,
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
export const PostHeader = forwardRef<HTMLDivElement, Props>((props, ref) => {
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
    <StyledHeader>
      <FirstRow open={props.open} ref={ref}>
        <ImageWrapper open={props.open}>
          <Image
            align='center'
            alt={props.title}
            fit='cover'
            maxH={505}
            src={props.previewUrl}
            width='100%'
          />

          <ImageDescription>
            <PostAuthor url={props.githubAuthor?.usernameUrl}>
              {props.githubAuthor?.name}
            </PostAuthor>

            <DateAgo date={props.publicationDate} letterSpacing={1} size='sm' />
          </ImageDescription>
        </ImageWrapper>

        <PostTextWrapper>
          <Title uppercase as='h1' itemProp='headline' weight='medium'>
            {props.title}
          </Title>

          <Description color='secondary' itemProp='description' size='xl'>
            {props.description}
          </Description>
        </PostTextWrapper>
      </FirstRow>

      <SecondRow open={props.open}>
        <TagsAndShare>
          <TagsBlock>
            {props.tags?.map((tag) => (
              <Badge key={tag} margin='2px 4px 0 0'>
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
      </SecondRow>
    </StyledHeader>
  )
})

PostHeader.displayName = 'PostHeader'
