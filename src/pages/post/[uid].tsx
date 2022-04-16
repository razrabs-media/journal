import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  GetPost,
  GetPostQuery,
  GetPostVariables,
  PostReader,
} from 'entities/posts'
import { client } from 'shared/api'

const Post: NextPage<GetPost> = ({ post }) => {
  const router = useRouter()
  const currentPage = router.route

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta content={post.description || ''} name='description' />

        {/* Twitter */}
        <meta content='summary' name='twitter:card' />
        <meta content={post.title} name='twitter:title' />
        <meta content={post.description || ''} property='twitter:description' />
        <meta content={post.previewUrl || ''} property='twitter:image' />
        <meta content={currentPage} property='twitter:url' />

        {/* Open Graph */}
        <meta content={currentPage} property='og:url' />
        <meta content='Разрабы' property='og:site_name' />
        <meta content={post.title} property='og:title' />
        <meta content={post.description || ''} property='og:description' />
        <meta content={post.previewUrl || ''} property='og:image' />

        <link href='/public/favicon.ico' rel='icon' />
      </Head>

      <PostReader
        {...post}
        previewUrl={post.previewUrl || undefined}
        publicationDate={post.createdAt}
        tags={post.tags?.map((tag) => tag.name)}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  post: GetPost['post']
}> = async ({ query }) => {
  const { data } = await client.query<GetPost, GetPostVariables>({
    query: GetPostQuery,
    variables: { uid: query.uid?.toString() ?? '' },
  })

  return {
    props: { post: data.post },
  }
}

export default Post
