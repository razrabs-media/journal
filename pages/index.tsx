import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Footer } from 'shared/ui/footer'
import { Header } from 'widgets/header'
import { Layout } from 'shared/ui/layout'
import { MARKDOWN_MOCK, MarkdownRenderer } from 'shared/ui/markdown-renderer'

type HomePageProps = {
  content: string
}

const HomePage: NextPage<HomePageProps> = ({ content }) => (
  <>
    <Head>
      <title>РАЗРАБЫ</title>
      <meta content='Lorem ipsum' name='description' />
      <link href='/favicon.ico' rel='icon' />
    </Head>

    <Layout footer={<Footer />} header={<Header />}>
      ✨✨✨✨
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </Layout>
  </>
)

export async function getServerSideProps() {
  return { props: { content: MARKDOWN_MOCK } }
}

export default HomePage
