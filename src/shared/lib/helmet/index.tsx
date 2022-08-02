import { useTheme } from '@emotion/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { HelmetProps } from './types'

export const Helmet = ({ title, description, image }: HelmetProps) => {
  const { asPath: path } = useRouter()
  const canonicalUrl = process.env.NEXT_PUBLIC_HOST + path

  const theme = useTheme()

  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name='description' />

      <link href='/favicon.svg' rel='shortcut icon' />
      <meta content={theme.colors.background} name='theme-color' />

      {/* Twitter */}
      <meta content='summary' name='twitter:card' />
      <meta content={title} name='twitter:title' />
      <meta content={description} property='twitter:description' />
      <meta content={image} property='twitter:image' />
      <meta content='@razraby' property='twitter:site' />

      {/* Open Graph */}
      <meta content='Разрабы' property='og:site_name' />
      <meta content={title} property='og:title' />
      <meta content={description} property='og:description' />
      <meta content={image} property='og:image' />
      <meta content='400' property='og:image:width' />
      <meta content={canonicalUrl} property='og:url' />
    </Head>
  )
}

Helmet.defaultProps = {
  title: 'Разрабы',
  description: 'Медиа для разработчиков',
  previewUrl: '/public/images/logo/avatar.png',
}
