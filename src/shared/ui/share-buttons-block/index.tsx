import React from 'react'
import { ShareButton, ShareType } from 'shared/ui'

export const ShareBlock = () => (
  <>
    <a
      href='https://twitter.com/'
      rel='noreferrer'
      target='_blank'
      title='Twitter.com'
    >
      <ShareButton shareType={ShareType.Twitter} />
    </a>
    <ShareButton shareType={ShareType.Url} />
  </>
)
