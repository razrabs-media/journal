import styled from '@emotion/styled'
import Badge from '@razrabs-ui/badge'
import Image from '@razrabs-ui/image'
import PostAuthor from '@razrabs-ui/post-author'
import Typography from '@razrabs-ui/typography'
import { forwardRef, useEffect, useState } from 'react'
import { DateAgo, ShareButton, ShareType } from 'shared/ui'
import {
  ImageDescription,
  ImageWrapper,
  ShareBlock,
  StyledHeader,
  TagsAndDateBlock,
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

export const Aside = forwardRef<HTMLDivElement, Props>((props) => {
  const [href, setHref] = useState('')

  useEffect(() => {
    if (typeof window === undefined) {
      return
    }

    setHref(window.location.href)
  }, [])

  return (
    <StyledHeader isShowDataAside={props.isShowDataAside}>
      <ImageWrapper open={props.open}>
        <Image
          align='center'
          alt={props.title}
          fit='cover'
          itemProp='image'
          maxH={505}
          src={props.previewUrl}
          width='100%'
        />

        <ImageDescription>
          {props.isShowDataAside && (
            <Title uppercase as='h3' itemProp='headline name' weight='medium'>
              {props.title}
            </Title>
          )}
        </ImageDescription>
      </ImageWrapper>

      {props.isShowDataAside ? (
        <>
          <TagsAndDateBlock>
            <DateAgo date={props.publicationDate} letterSpacing={1} size='sm' />

            <ShareBlock>
              <ShareButton
                as='a'
                href={`https://twitter.com/intent/tweet?url=${href}`}
                shareType={ShareType.Twitter}
              />
              <ShareButton isShorten shareType={ShareType.Url} />
            </ShareBlock>
          </TagsAndDateBlock>

          <TagsBlock
            itemScope
            itemProp='about'
            itemType='https://schema.org/Thing'
          >
            {props.tags?.map((tag) => (
              <Badge key={tag} itemProp='name'>
                {tag}
              </Badge>
            ))}
          </TagsBlock>
        </>
      ) : (
        <>
          <PostAuthor url={props.githubAuthor?.usernameUrl}>
            {props.githubAuthor?.name}
          </PostAuthor>

          <DateAgo date={props.publicationDate} letterSpacing={1} size='sm' />
        </>
      )}
    </StyledHeader>
  )
})

Aside.displayName = 'Aside'
