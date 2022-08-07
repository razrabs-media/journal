import { useTheme } from '@emotion/react'
import getConfig from 'next/config'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { HelmetProps } from './types'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

export const Helmet = ({
  title,
  description,
  image,
  keywords,
}: HelmetProps) => {
  const { asPath: path } = useRouter()
  const isServerSide = typeof window === 'undefined'
  const host = (isServerSide ? serverRuntimeConfig : publicRuntimeConfig).HOST
  const canonicalUrl = host + path
  const brandedTitle = path.length > 1 ? `${title} / Разрабы` : title

  const theme = useTheme()

  return (
    <Head>
      <meta charSet='utf-8' />
      <title>{brandedTitle}</title>

      {/* Basic */}
      <link href={canonicalUrl} rel='canonical' />
      <link
        href='/sitemap.xml'
        rel='sitemap'
        title='Sitemap'
        type='application/xml'
      />
      <meta content={brandedTitle} name='title' />
      <meta content={description} name='description' />
      <meta content={keywords} name='keywords' />

      {/* Icons */}
      <link href='/favicon.svg' rel='shortcut icon' />
      <link
        href='/images/logo/apple-touch-icon.png'
        rel='apple-touch-icon'
        sizes='180x180'
      />
      <link
        href='/images/logo/favicon-32x32.png'
        rel='icon'
        sizes='32x32'
        type='image/png'
      />
      <link
        href='/images/logo/favicon-194x194.png'
        rel='icon'
        sizes='194x194'
        type='image/png'
      />
      <link
        href='/images/logo/android-chrome-192x192.png'
        rel='icon'
        sizes='192x192'
        type='image/png'
      />
      <link
        href='/images/logo/favicon-16x16.png'
        rel='icon'
        sizes='16x16'
        type='image/png'
      />
      <link
        color={theme.colors.background}
        href='/images/logo/safari-pinned-tab.svg'
        rel='mask-icon'
      />

      {/* Twitter */}
      <meta content='summary' name='twitter:card' />
      <meta content={brandedTitle} name='twitter:title' />
      <meta content={description} property='twitter:description' />
      <meta content={image} property='twitter:image' />
      <meta content='@razraby' property='twitter:site' />

      {/* Open Graph */}
      <meta content='Разрабы' property='og:site_name' />
      <meta content='ru-RU' property='og:locale' />
      <meta content={brandedTitle} property='og:title' />
      <meta content={description} property='og:description' />
      <meta content={image} property='og:image' />
      <meta content='400' property='og:image:width' />
      <meta content={canonicalUrl} property='og:url' />

      {/* Dublin Core */}
      <meta content='ru-RU' name='DC.language' />
      <meta content={host} name='DC.publisher.url' />
      <meta content={canonicalUrl} name='DC.identifier' />
      <meta content={brandedTitle} name='DC.title' />
      <meta content={description} name='DC.description' />
      <meta content={keywords} name='DC.subject' />
      <meta content='text' name='DC.type' />
      <meta content='text/html' name='DC.format' />

      {/* Web App */}
      <meta content='Разрабы' name='apple-mobile-web-app-title' />
      <meta content='Разрабы' name='application-name' />
      <meta content={theme.colors.background} name='theme-color' />
      <meta content={theme.colors.background} name='msapplication-TileColor' />
      <link href='/images/logo/site.webmanifest' rel='manifest' />
    </Head>
  )
}

Helmet.defaultProps = {
  title: 'Разрабы',
  description: 'Медиа для разработчиков',
  image: '/public/images/logo/avatar.png',
  keywords:
    'разрабы, медиа, для разработчиков, для программистов, разработка, программирование',
}
