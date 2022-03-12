import Link from 'next/link'
import React, { FC } from 'react'
import { pluralize } from 'shared/lib/pluralize'
import { Typography } from 'shared/ui/typography'
import { PropsNews } from './type'

export const News: FC<PropsNews> = (props) => (
  <Link passHref href='/'>
    <Typography uppercase as='a' color='rare' letterSpacing='normal'>
      +{props.news}
      {pluralize([' новость', ' новости', ' новостей'], props.news)}
    </Typography>
  </Link>
)
