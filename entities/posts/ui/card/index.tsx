import styled from '@emotion/styled'
import Link from 'next/link'
import { VFC } from 'react'
import { Image } from 'shared/ui'

const Title = styled.h2`
  font-size: 24px;
  line-height: 120%;

  margin: 10px 0;

  text-transform: uppercase;
  font-feature-settings: 'salt' on;

  color: ${({ theme }) => theme.colors.text.primary};
`

const StyledCard = styled.div`
  position: relative;
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  &:hover {
    ${Title} {
      text-decoration: underline;
    }
  }
`

const PublicationDate = styled.span`
  font-size: 12px;
  line-height: 100%;

  letter-spacing: 1px;
  text-transform: uppercase;
  font-feature-settings: 'salt' on;

  color: ${({ theme }) => theme.colors.text.secondary};
`

const StyledLink = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

// todo сократить, когда бэк допилят
const PostWrapper = styled.div<{
  h: number
  w: number
  y: number
  x: number
}>`
  grid-column: ${({ x }) => x + 1};
  grid-column-start: ${({ x }) => x + 1};
  grid-column-end: ${({ x, w }) => x + 1 + w};

  grid-row: ${({ y }) => y + 1};
  grid-row-start: ${({ y }) => y + 1};
  grid-row-end: ${({ y, h }) => y + 1 + h};
`

type PostCardProps = {
  post: {
    uid: string
    previewUrl?: string | null
    title?: string
    publicationDate?: number
  }
  position: {
    x: number
    y: number
  }
  component: {
    uid: string
    name: string
    configuration: {
      h: number
      w: number
    }
  }
}

const PostCard: VFC<PostCardProps> = ({ post, position, component }) => {
  const { title, uid, previewUrl } = post
  const { configuration } = component

  return (
    <PostWrapper {...configuration} {...position}>
      <Link passHref href={`/post/${uid}`}>
        <StyledCard>
          <Image alt={title} src={post?.previewUrl} />

          <Title>{title}</Title>

          {/*        {publicationDate && (
          <PublicationDate>
            {formatDistance(new Date(), new Date(publicationDate))}
          </PublicationDate>
        )}*/}

          <StyledLink />
        </StyledCard>
      </Link>
    </PostWrapper>
  )
}

export { PostCard }
