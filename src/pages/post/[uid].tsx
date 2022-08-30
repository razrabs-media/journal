import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { OpenCommentsButton } from 'features/comments'
import { useContextComments } from 'entities/comments'
import {
  GetPost,
  GetPostQuery,
  GetPostVariables,
  PostReader,
} from 'entities/posts'
import { initializeApollo } from 'shared/api'
import { Helmet } from 'shared/lib'

export type Props = {
  post: GetPost['post']
  commentId: string | null
}

const Post: NextPage<Props> = ({ post }) => {
  const { openHandler, setPostUid } = useContextComments()

  const tagNames = post.tags?.map((tag) => tag.name)

  useEffect(() => {
    setPostUid(post.uid)
  }, [setPostUid, post.uid])

  return (
    <article itemScope itemType='https://schema.org/Article'>
      <Helmet
        description={post.description}
        image={post.previewUrl ?? undefined}
        keywords={tagNames?.join(',')}
        title={post.title}
      >
        <meta
          content={post.githubAuthor?.name || 'Сообщество'}
          property='og:article:author:username'
        />
        <meta content={post.createdAt} property='og:article:published_time' />
      </Helmet>

      <PostReader
        {...post}
        commentsButton={
          <OpenCommentsButton onClick={openHandler}>
            {'Комменты: '}
            <span itemProp='commentCount'>{post.comments?.length ?? 0}</span>
          </OpenCommentsButton>
        }
        githubAuthor={post.githubAuthor ?? undefined}
        previewUrl={post.previewUrl ?? undefined}
        publicationDate={post.createdAt}
        tags={tagNames}
      />
    </article>
  )
}

export const getServerSideProps: GetServerSideProps<{
  post: GetPost['post']
}> = async ({ query }) => {
  const { uid, commentId = null } = query

  const apolloClient = initializeApollo()

  const {
    data: { post },
  } = await apolloClient.query<GetPost, GetPostVariables>({
    query: GetPostQuery,
    variables: { uid: uid?.toString() ?? '' },
  })

  return {
    props: { post, commentId },
  }
}

export default Post
