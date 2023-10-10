import type { NextPage } from 'next'
import { Error, ErrorLink } from 'shared/ui'

const getData = (code?: number) => {
  let output
  switch (code) {
    case 404:
      output = {
        title: 'Страница не найдена.',
        linkText: 'Перейти на главную',
        linkUrl: '/',
      }
      break
    case 500:
    default:
      output = {
        title: 'Никто не знает, что случилось.',
        linkText: 'Обновить страницу',
        linkUrl: '',
      }
  }

  return output
}

const ErrorPage: NextPage<{ statusCode?: number }> = ({ statusCode }) => {
  const { title, linkUrl, linkText } = getData(statusCode)
  return (
    <Error>
      {!!statusCode && (
        <>
          <span>{title}</span>
          <ErrorLink href={linkUrl}>{linkText}</ErrorLink>
        </>
      )}
    </Error>
  )
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
