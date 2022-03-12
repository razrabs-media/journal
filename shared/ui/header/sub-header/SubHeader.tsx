import React, { FC } from 'react'
import { InfoItems } from './styles/InfoItems'
import { AfterHeader } from './styles/AfterHeader'
import { News, Podcasts, Time, Twits } from './info-items'
import { MockObjectInfo } from './mockObjectInfo'

export const SubHeader: FC = () => (
    <AfterHeader>
        <Time />
        <InfoItems>
            <News news={MockObjectInfo.news} />
            <Podcasts podcasts={MockObjectInfo.podcasts} />
            <Twits twits={MockObjectInfo.twits} />
        </InfoItems>
    </AfterHeader>
)
