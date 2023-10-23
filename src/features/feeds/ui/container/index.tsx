import { Stack } from '@mui/system'
import Link from 'next/link'
import { Fragment } from 'react'
import { Divider, Typography } from 'shared/ui'
import { default as UnstableTypography } from 'shared/ui/typography/unstable_typography'

type IncutProps = {
  beforeElementIndex: number
  render: () => JSX.Element
  divider?: boolean
  behavior?: 'stubborn' | 'exact'
}

type FeedItem = {
  [x: string]: any
  uid: string
}

export type FeedContainerProps = {
  title?: string
  items: FeedItem[]
  spacingBetweenItems?: number
  renderItem: (item: any) => JSX.Element
  incut?: IncutProps
}

export const Recommendation = (props: {
  posts: Array<{ title: string; uid: string }>
}) => (
  <>
    <Typography
      uppercase
      color='brand'
      size='sm'
      style={{ marginBottom: '-8px' }}
    >
      Может быть интересно
    </Typography>
    <Stack spacing={1.5}>
      {props.posts.map((post) => (
        <UnstableTypography
          key={post.uid}
          uppercase
          as={Link}
          href={`/post/${post.uid}`}
          sx={{ typography: { xs: 'h5', md: 'h3' } }}
        >
          {post.title}
        </UnstableTypography>
      ))}
    </Stack>
  </>
)

export const FeedContainer = ({
  title,
  items,
  spacingBetweenItems = 4,
  incut,
  renderItem,
}: FeedContainerProps) => {
  const isIncutIndex = (index: number) => incut?.beforeElementIndex === index
  const shouldRenderIncutOverflow =
    incut &&
    incut?.behavior !== 'exact' &&
    incut.beforeElementIndex > items.length - 1

  const renderIncut = (currentIndex: number = items.length) => (
    <>
      {incut?.divider && currentIndex !== 0 && <Divider />}
      {incut!.render()}
      {incut?.divider && currentIndex < items.length && <Divider />}
    </>
  )

  return (
    <Stack spacing={3}>
      {title && (
        <Typography uppercase color='brand' size='sm'>
          {title}
        </Typography>
      )}

      <Stack spacing={spacingBetweenItems}>
        {items.map((item, index) => (
          <Fragment
            key={isIncutIndex(index) ? `incut-before-${item.uid}` : item.uid}
          >
            {isIncutIndex(index) && renderIncut(index)}
            {renderItem(item)}
          </Fragment>
        ))}
        {shouldRenderIncutOverflow && renderIncut()}
      </Stack>
    </Stack>
  )
}
