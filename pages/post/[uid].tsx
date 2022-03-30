import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  GetPost,
  GetPostQuery,
  GetPostVariables,
  PostArticle,
  PostAside,
} from 'entities/posts'
import { client } from 'shared/api'
import { Layout } from 'shared/ui'

const Post: NextPage<GetPost> = ({ post }) => {
  const [shouldShowFloated, setShouldShowFloated] = useState(true)

  const router = useRouter()
  const currentPage = router.route
  const [imageHeight, setImageHeight] = useState(0)

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

        <link href='/favicon.ico' rel='icon' />
      </Head>

      <Layout
        aside={
          <PostAside
            previewUrl={post.previewUrl || undefined}
            publicationDate={post.createdAt}
            title={post.title}
            onImageHeightChange={(newHeight) => setImageHeight(newHeight)}
          />
        }
      >
        <PostArticle
          content={post.content}
          description={post.description || ''}
          headerMinHeight={imageHeight}
          title={post.title}
          setShouldShowFloated={setShouldShowFloated}
        />
      </Layout>
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
