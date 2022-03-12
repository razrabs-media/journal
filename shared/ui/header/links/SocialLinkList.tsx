import React, { useState, VFC } from 'react'
import { Social } from '../styles/Social'
import { SocialLinksStyle } from '../styles/SocialLinksStyle'
import { SocialList } from '../styles/SocialList'
import { LinkItem } from './LinkItem'
import { useTheme } from '@emotion/react'
import { Typography } from 'shared/ui/typography'

export const SocialLinkList: VFC = () => {
    const [isDisplay, setDisplay] = useState(false)
    const changeDisplay = () => {
        setDisplay((prevDisplay) => !prevDisplay)
    }
    const sociaList: string[] = ['Facebook', 'VK', 'Instagramm']
    const theme = useTheme()
    return (
        <Social onClick={changeDisplay}>
            <Typography uppercase as='p' color='main' colorVariant='primary'>
                соцсети ▼
            </Typography>
            <SocialLinksStyle
                color={theme.colors.background}
                contextMenu={isDisplay ? 'block' : 'none'}
            >
                <SocialList>
                    {sociaList.map((el) => (
                        <LinkItem key={el} link={el} />
                    ))}
                </SocialList>
            </SocialLinksStyle>
        </Social>
    )
}
