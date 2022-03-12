import Link from 'next/link'
import React, { FC } from 'react'
import { pluralize } from 'shared/lib/pluralize'
import { Typography } from 'shared/ui/typography'
import { PropsTwits } from './type'

export const Twits: FC<PropsTwits> = (props) => (
    <Link passHref href='/'>
        <Typography uppercase as='a' color='rare' letterSpacing='normal'>
            +{props.twits}
            {pluralize([' твит', ' твита', ' твитов'], props.twits)}
        </Typography>
    </Link>
)
