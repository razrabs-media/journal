import Badge from '@razrabs-ui/badge'
import Image from '@razrabs-ui/image'
import PostAuthor from '@razrabs-ui/post-author'
import { FC, useEffect, useState } from 'react'
import { DateAgo, ShareButton, ShareType } from 'shared/ui'
import {
  DateAndShareBlock,
  DefaultShareButton,
  ImageDescription,
  ImageWrapper,
  ShareBlock,
  StyledAside,
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
    if (typeof window === undefined) {
      return
    }

    setHref(window.location.href)
  }, [])

  return (
    <StyledAside isShowDataAside={props.isShowDataAside} open={props.open}>
      <ImageWrapper>
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

          {!!props.tags?.length && (
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
          )}
        </>
      ) : (
        <>
          <PostAuthor url={props.githubAuthor?.usernameUrl}>
            {props.githubAuthor?.name}
          </PostAuthor>

          <DateAgo date={props.publicationDate} letterSpacing={1} size='sm' />
        </>
      )}
    </StyledAside>
  )
}

Aside.displayName = 'Aside'
