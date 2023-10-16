import { FC, useEffect, useState } from 'react'
import { Badge, Image } from 'shared/ui'
import { DateAgo, ShareButton, ShareType } from 'shared/ui'
import PostAuthor from '../post-author'
import {
  DateAndShareBlock,
  DefaultShareButton,
  ImageDescription,
  ImageWrapper,
  ShareBlock,
  StyledHeader,
  TagsBlock,
  Title,
} from './styled'
import type { Props } from './types'

DefaultShareButton.defaultProps = {
  as: 'button',
  size: 'sm',
  color: 'secondary',
  uppercase: true,
  letterSpacing: 1,
}

export const Aside: FC<Props> = (props) => {
  const [href, setHref] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    setHref(window.location.href)
  }, [])

  return (
    <StyledHeader isShowDataAside={props.isShowDataAside}>
      <ImageWrapper open={props.open}>
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
          <DateAndShareBlock>
            <DateAgo date={props.publicationDate} letterSpacing={1} size='sm' />

            <ShareBlock>
              <ShareButton
                as='a'
                href={`https://twitter.com/intent/tweet?url=${href}`}
                shareType={ShareType.Twitter}
              />
              <ShareButton isShorten shareType={ShareType.Url} />
            </ShareBlock>
          </DateAndShareBlock>

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
}

Aside.displayName = 'Aside'
