import React, { FC } from 'react'
import { LinkItem } from '../links/LinkItem'
import { SocialLinkList } from '../links/SocialLinkList'
import { NavHeaderStyle } from '../styles/NavHeaderStyle'

export const NavHeader: FC = () => (
    <NavHeaderStyle>
        <LinkItem link='новости' />
        <LinkItem link='подкасты' />
        <SocialLinkList />
    </NavHeaderStyle>
)
