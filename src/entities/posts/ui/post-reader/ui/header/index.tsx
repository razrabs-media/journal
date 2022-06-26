import Badge from '@razrabs-ui/badge'
import Image from '@razrabs-ui/image'
import PostAuthor from '@razrabs-ui/post-author'
import { forwardRef } from 'react'
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

// Для FloatedPreview нас интересует ссылка на FirstRow, а не на Header
export const PostHeader = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StyledHeader>
    <FirstRow ref={ref}>
      <ImageWrapper>
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
        <Title uppercase as='h1' weight='medium'>
          {props.title}
        </Title>

        <Description color='secondary' size='xl'>
          {props.description}
        </Description>
      </PostTextWrapper>
    </FirstRow>

    <SecondRow>
      <TagsAndShare>
        <TagsBlock>
          {props.tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </TagsBlock>

        <ShareBlock>
          {props.commentsButton}

          <ShareButton shareType={ShareType.Twitter} />
          <ShareButton shareType={ShareType.Url} />
        </ShareBlock>
      </TagsAndShare>
    </SecondRow>
  </StyledHeader>
))

PostHeader.displayName = 'PostHeader'
