import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Footer } from 'shared/ui/footer'
import { Header } from 'widgets/header'
import { Layout } from 'shared/ui/layout'
import { MARKDOWN_MOCK, MarkdownRenderer } from 'shared/ui/markdown-renderer'
import { METADATA_MOCK, MetadataType } from './__mock__'

type HomePageProps = {
  content: string
  metadata: MetadataType
}

const MOCK_URL = 'https://raz-media-web-dev.herokuapp.com/'

const HomePage: NextPage<HomePageProps> = ({ content, metadata }) => (
  <>
    <Head>
      <title>РАЗРАБЫ</title>
      <meta content='Lorem ipsum' name='description' />

      {/* Twitter */}
      <meta key='twcard' content='summary' name='twitter:card' />

      <meta key='twtitle' content={metadata.title} name='twitter:title' />
      <meta
        key='twdescription'
        content={metadata.description}
        property='twitter:description'
      />
      <meta
        key='twimage'
        content={metadata.previewUrl}
        property='twitter:image'
      />
      <meta key='twurl' content={MOCK_URL} property='twitter:url' />

      {/* Open Graph */}
      <meta key='ogurl' content={MOCK_URL} property='og:url' />
      <meta key='ogsitename' content='Разрабы' property='og:site_name' />
      <meta key='ogimage' content={metadata.previewUrl} property='og:image' />
      <meta key='ogtitle' content={metadata.title} property='og:title' />
      <meta
        key='ogdesc'
        content={metadata.description}
        property='og:description'
      />

      <link href='/favicon.ico' rel='icon' />
    </Head>
    <Layout footer={<Footer />} header={<Header />}>
      ✨✨✨✨
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </Layout>
  </>
)

export async function getServerSideProps() {
  return { props: { content: MARKDOWN_MOCK, metadata: METADATA_MOCK } }
}

export default HomePage
