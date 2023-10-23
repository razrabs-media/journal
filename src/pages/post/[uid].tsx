import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import { OpenCommentsButton } from 'features/comments'
import { useContextComments } from 'entities/comments'
import {
  GetPost,
  GetPostQuery,
  GetPostVariables,
  PostCard,
  PostReader,
  PostRow,
  PostsByRecommendation,
  PostType,
} from 'entities/posts'
import { initializeApollo } from 'shared/api'
import { Helmet } from 'shared/lib'
import { Divider, Stack } from 'shared/ui'
import { Mobile, TabletAndAbove } from 'shared/ui/theme/responsive'
import { default as Typography } from 'shared/ui/typography/unstable_typography'
import { Grid } from 'shared/ui/unstable_grid'

export type Props = {
  post: GetPost['post']
  commentId: string | null
  recommendation: Array<GetPost['post']>
}

const Post: NextPage<Props> = ({ post, recommendation }) => {
  const { opened, openHandler, setPostUid } = useContextComments()

  const tagNames = post.tags?.map((tag) => tag.name)

  useEffect(() => {
    setPostUid(post.uid)
  }, [setPostUid, post.uid])

  return (
    <Stack spacing={10}>
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

      {recommendation && (
        <Stack spacing={{ xs: 2.5, sm: 4 }}>
          <Divider />

          <Typography
            uppercase
            color='primary'
            sx={{
              typography: { xs: 'h3', md: 'h2' },
            }}
          >
            А вот еще
          </Typography>
          <div>
            <Grid
              container
              columnSpacing={{ xs: 0, sm: 3 }}
              columns={{ xs: 1, sm: 2, lg: opened ? 2 : 4 }}
              direction={{ xs: 'column', sm: 'row' }}
              rowSpacing={{ xs: 2.5, sm: 4 }}
            >
              {recommendation.map((recommendationPost) => (
                <Grid key={recommendationPost.uid} xs={1}>
                  <Link href={`/post/${recommendationPost.uid}`}>
                    <TabletAndAbove>
                      <PostCard
                        {...recommendationPost}
                        noDisplayDate
                        preview={recommendationPost.previewUrl ?? ''}
                        type={PostType.Article}
                      />
                    </TabletAndAbove>
                    <Mobile>
                      <PostRow
                        {...recommendationPost}
                        small
                        preview={recommendationPost.previewUrl || ''}
                        type={PostType.Article}
                      />
                    </Mobile>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </Stack>
      )}
    </Stack>
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

  const postsByRecommendation = await apolloClient.query<any>({
    query: PostsByRecommendation,
    variables: { uid: post.uid, type: 'Post', count: 4 },
  })

  return {
    props: {
      post,
      commentId,
      recommendation: postsByRecommendation.data.recommendation,
    },
  }
}

export default Post
