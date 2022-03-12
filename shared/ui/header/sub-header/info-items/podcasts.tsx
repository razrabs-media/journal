import Link from 'next/link'
import React, { FC } from 'react'
import { pluralize } from 'shared/lib/pluralize'
import { Typography } from 'shared/ui/typography'
import { PropsPodcasts } from './type'

export const Podcasts: FC<PropsPodcasts> = (props) => (
  <Link passHref href='/'>
    <Typography uppercase as='a' color='rare' letterSpacing='normal'>
      +{props.podcasts}
      {pluralize([' подкаст', ' подкаста', ' подкастов'], props.podcasts)}
    </Typography>
  </Link>
)
