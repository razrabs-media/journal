import { getDataFromTree } from '@apollo/client/react/ssr'
import { PostArticle, PostAside, useGetPost } from 'entities/posts'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { withApollo } from 'shared/lib'
import { Layout } from 'shared/ui'
import { Header } from 'widgets/header'

const HomePage: NextPage = () => {
  const router = useRouter()
  const currentPage = router.route
  const { uid } = router.query

  const { data } = useGetPost({ variables: { uid } })

  const [imageHeight, setImageHeight] = useState(0)

  if (!data) {
    return null
  }

  return (
    <>
      <Head>
        <title>{data.post.title}</title>
        <meta content={data.post.description || ''} name='description' />

        {/* Twitter */}
        <meta content='summary' name='twitter:card' />
        <meta content={data.post.title} name='twitter:title' />
        <meta
          content={data.post.description || ''}
          property='twitter:description'
        />
        <meta content={data.post.previewUrl || ''} property='twitter:image' />
        <meta content={currentPage} property='twitter:url' />

        {/* Open Graph */}
        <meta content={currentPage} property='og:url' />
        <meta content='Разрабы' property='og:site_name' />
        <meta content={data.post.title} property='og:title' />
        <meta content={data.post.description || ''} property='og:description' />
        <meta content={data.post.previewUrl || ''} property='og:image' />

        <link href='/favicon.ico' rel='icon' />
      </Head>

      <Layout
        aside={
          <PostAside
            previewUrl={data.post.previewUrl || undefined}
            publicationDate={data.post.publicationDate}
            title={data.post.title}
            onImageHeightChange={(newHeight) => setImageHeight(newHeight)}
          />
        }
        header={<Header />}
      >
        <PostArticle
          content={data.post.content}
          description={data.post.description || ''}
          headerMinHeight={imageHeight}
          title={data.post.title}
        />
      </Layout>
    </>
  )
}

export default withApollo(HomePage, { getDataFromTree })
