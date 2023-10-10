// eslint-disable-next-line camelcase
import { styled } from '@mui/system'
import Box from '@mui/system/Box'
import Stack from '@mui/system/Stack'
import Grid from '@mui/system/Unstable_Grid'
import { forwardRef } from 'react'
import { Badge as BadgeLegacy } from 'shared/ui'
import Image, { FallbackSquare } from 'shared/ui/image'
import { default as Typography } from 'shared/ui/typography/unstable_typography'

const isTypographyLegacyProp = (prop: PropertyKey) =>
  [
    'theme',
    'sx',
    'as',
    'uppercase',
    'disableHover',
    'color',
    'weight',
    'letterSpacing',
    'align',
  ].some((value) => prop === value)

const Badge = styled(BadgeLegacy, {
  shouldForwardProp: (prop) => !isTypographyLegacyProp(prop),
})({})

const Poster = styled(Image, {
  shouldForwardProp: (prop) =>
    prop !== 'theme' && prop !== 'sx' && prop !== 'as',
})({})

type Props = {
  title: string
  createdAt?: string
  tags?: Array<{ uid: string; name: string }> | null
  description?: string
  href?: string
  commentsCount?: number | string | null
  author?: string
  previewUrl?: string | null
}

const defaultPosterStyle = {
  width: { xs: '200px', lg: '250px' },
  height: { xs: '200px', lg: '250px' },
  maxWidth: { xs: '200px', lg: '250px' },
  objectFit: 'cover',
  display: 'block',
}

const captionStyle = { typography: { xs: 'caption2', md: 'caption1' } } as const

const Caption = (props: any) => (
  <Typography
    uppercase
    as='span'
    color='secondary'
    sx={captionStyle}
    {...props}
  />
)

type MainInfoProps = {
  title: string
  description?: string
}

const MainInfo = ({ title, description }: MainInfoProps) => (
  <Stack spacing={0.5}>
    <Typography
      uppercase
      as='h2'
      className='hoverable-link'
      color='primary'
      sx={{ typography: { xs: 'h5', md: 'h3' } }}
    >
      {title}
    </Typography>
    {description && (
      <Typography
        color='secondary'
        sx={{
          typography: { xs: 'body2', md: 'subtitle1' },
        }}
      >
        {description}
      </Typography>
    )}
  </Stack>
)

type TagListProps = {
  tags: Array<{ uid: string; name: string }>
}

const TagList = ({ tags }: TagListProps) => (
  <Grid container columnGap={0.5} direction='row' rowGap={0.5}>
    {tags.map((tag) => (
      <Grid key={tag.uid} xs='auto'>
        <Badge
          className='badge'
          color='secondary'
          sx={captionStyle}
          variant='outline'
        >
          {tag.name}
        </Badge>
      </Grid>
    ))}
  </Grid>
)
type MetaInfoProps = {
  commentsCount?: number | string | null
  createdAt?: string
  author?: string
}

const MetaInfo = ({ commentsCount, createdAt, author }: MetaInfoProps) => {
  const hasMeta = author || createdAt || commentsCount
  if (!hasMeta) return null

  return (
    <Stack
      alignItems='flex-end'
      direction='row'
      flexWrap='wrap'
      justifyContent='space-between'
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, md: 2 }}>
        {author && <Caption color='primary'>{author}</Caption>}
        {createdAt && <Caption letterSpacing={1}>{createdAt}</Caption>}
      </Stack>
      {commentsCount !== 'undefined' && (
        <Caption>Комменты: {commentsCount}</Caption>
      )}
    </Stack>
  )
}

const BaseComponent = (props: Props) => (
  <Grid container direction={{ xs: 'column', sm: 'row' }} spacing={3}>
    <Grid xs='auto'>
      <Poster
        priority
        alt={props.title}
        fallback={<FallbackSquare h='100%' w='100%' />}
        loadingSize='xs'
        src={props.previewUrl || ''}
        sx={defaultPosterStyle}
      />
    </Grid>
    <Grid xs>
      <Stack justifyContent='space-between' spacing={2} sx={{ height: '100%' }}>
        <MainInfo description={props.description} title={props.title} />
        <Stack spacing={1.5}>
          {props.tags && <TagList tags={props.tags} />}
          <MetaInfo
            author={props.author}
            commentsCount={props.commentsCount}
            createdAt={props.createdAt}
          />
        </Stack>
      </Stack>
    </Grid>
  </Grid>
)

export const FeedPost = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <Box className='hoverable' ref={ref}>
    <BaseComponent {...props} />
  </Box>
))

FeedPost.displayName = 'FeedPost'
