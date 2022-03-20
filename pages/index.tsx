import { getDataFromTree } from '@apollo/client/react/ssr'
import { PostCard, useGetLatestPosts } from 'entities/posts'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { withApollo } from 'shared/lib'
import { Footer, Grid, Layout } from 'shared/ui'
import { Header } from 'widgets/header'

export const METADATA_MOCK = {
  title: 'Test Title',
  description: 'Test description',
  previewUrl: 'https://upload.wikimedia.org/wikipedia/en/9/95/Test_image.jpg',
}

const HomePage: NextPage = () => {
  const router = useRouter()
  const currentPage = router.route

  const { data } = useGetLatestPosts()

  if (!data) {
    return null
  }

  return (
    <>
      <Head>
        <title>РАЗРАБЫ</title>
        <meta content='Lorem ipsum' name='description' />

        {/* Twitter */}
        <meta content='summary' name='twitter:card' />
        <meta content={METADATA_MOCK.title} name='twitter:title' />
        <meta
          content={METADATA_MOCK.description}
          property='twitter:description'
        />
        <meta content={METADATA_MOCK.previewUrl} property='twitter:image' />
        <meta content={currentPage} property='twitter:url' />

        {/* Open Graph */}
        <meta content={currentPage} property='og:url' />
        <meta content='Разрабы' property='og:site_name' />
        <meta content={METADATA_MOCK.previewUrl} property='og:image' />
        <meta content={METADATA_MOCK.title} property='og:title' />
        <meta content={METADATA_MOCK.description} property='og:description' />

        <link href='/favicon.ico' rel='icon' />
      </Head>

      <Layout footer={<Footer />}>
        <Grid>
          {data.posts.items.map((post) => (
            <PostCard key={post.uid} {...post} />
          ))}
        </Grid>
      </Layout>
    </>
  )
}

export default withApollo(HomePage, { getDataFromTree })
