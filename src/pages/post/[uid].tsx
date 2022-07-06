import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { OpenCommentsButton } from 'features/comments'
import { commentAdapter, useComments } from 'entities/comments'
import {
  GetPost,
  GetPostQuery,
  GetPostVariables,
  PostReader,
} from 'entities/posts'
import { initializeApollo } from 'shared/api'
import { Helmet } from 'shared/lib'

type Props = {
  post: GetPost['post']
}

const Post: NextPage<Props> = ({ post }) => {
  const { openHandler, setPostUid, setComments } = useComments()

  useEffect(() => {
    setPostUid(post.uid)
  }, [setPostUid, post.uid])

  useEffect(() => {
    setComments(post.comments?.map((comment) => commentAdapter(comment)) ?? [])
  }, [post.comments, setComments])

  return (
    <>
      <Helmet
        description={post.description}
        image={post.previewUrl ?? undefined}
        title={post.title}
      />

      <PostReader
        {...post}
        commentsButton={
          <OpenCommentsButton onClick={openHandler}>
            Комменты {post.comments?.length}
          </OpenCommentsButton>
        }
        githubAuthor={post.githubAuthor ?? undefined}
        previewUrl={post.previewUrl ?? undefined}
        publicationDate={post.createdAt}
        tags={post.tags?.map((tag) => tag.name)}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  post: GetPost['post']
}> = async ({ query }) => {
  const { uid, commentId = null } = query

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetPost, GetPostVariables>({
    query: GetPostQuery,
    variables: { uid: uid?.toString() ?? '' },
    fetchPolicy: 'no-cache',
  })

  return {
    props: { post: data.post, commentId },
  }
}

export default Post
