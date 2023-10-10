import styled from '@emotion/styled'
import Link from 'next/link'
import { PostCard, PostType } from 'entities/posts'
import { PostsByFeed } from 'entities/posts'
import { FeedPost } from './base-component'

type FeedPost = PostsByFeed['postsByFeed']['items'][0]

const authorAdapter = (githubAuthor?: FeedPost['githubAuthor']) => {
  const DEFAULT_NAME = 'Неизвестный разраб'
  if (!githubAuthor) return DEFAULT_NAME

  return (
    githubAuthor.user?.profile?.publicName ?? githubAuthor?.name ?? DEFAULT_NAME
  )
}

export const MainFeedPost = (props: FeedPost) => (
  <Link href={`/post/${props.uid}`}>
    <FeedPost
      {...props}
      author={authorAdapter(props.githubAuthor)}
      createdAt={undefined}
    />
  </Link>
)

const desktopPreviewProps = {
  objectFit: 'cover',
  width: 100,
  height: 100,
} as const

export const AdditionalFeedPost = (props: FeedPost) => (
  <Link href={`/post/${props.uid}`}>
    <PostCard
      {...props}
      preview={props.previewUrl || ''}
      previewProps={desktopPreviewProps}
      type={PostType.Article}
    />
  </Link>
)

export type PromoFeedPost = Pick<
  FeedPost,
  'previewUrl' | 'tags' | 'uid' | 'title' | 'description'
> & {
  href: string
}

const StyledPromoFeedPostWrapper = styled.div`
  box-sizing: border-box;
  padding: 12px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  position: relative;

  .badge {
    color: ${({ theme }) => theme.colors.brand};
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &:before {
    content: 'Внешняя ссылка';
    position: absolute;
    right: 12px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    /* font-family: inherit; */
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const PromoFeedPost = ({
  title,
  description,
  previewUrl,
  tags,
}: PromoFeedPost) => (
  <StyledPromoFeedPostWrapper>
    <FeedPost
      description={description}
      previewUrl={previewUrl}
      tags={tags}
      title={title}
    />
  </StyledPromoFeedPostWrapper>
)
