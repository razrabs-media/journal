import React, { FC } from 'react'
import Link from 'next/link'
import { Typography } from 'shared/ui/typography'
import { Props } from './type'

export const LinkItem: FC<Props> = ({ link, href = '/' }) => (
  <Link passHref href={href}>
    <Typography uppercase as='a' color='main' colorVariant='primary'>
      {link}
    </Typography>
  </Link>
)
