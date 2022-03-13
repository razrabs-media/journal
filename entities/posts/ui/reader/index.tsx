import styled from '@emotion/styled'
import { useState, VFC } from 'react'

// TODO: Подумать, стоит ли вынести читалку на уровень "Страница + кастомный Layout"
// TODO: 24px (10px) стоит перенести в тему как 'spacing' т.к много где используется

const ReaderLayout = styled.div<{ transition: number }>`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 24px;
`

const ImageColumn = styled.aside``

type Post = {
  uid: string
  title: string
  description: string
  previewUrl: string
  content: string
  publicationDate: number
}

type PostReaderProps = {
  post: Post
}

export const PostReader: VFC<PostReaderProps> = () => {
  const [transition, setTransition] = useState(0)

  return (
    <ReaderLayout transition={transition}>
      <ImageColumn />
    </ReaderLayout>
  )
}

// 1552 (500 + 25 + 1027)
