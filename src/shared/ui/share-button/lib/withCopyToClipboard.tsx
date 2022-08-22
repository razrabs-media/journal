import { FC, MouseEvent, useState } from 'react'
import { SharedIcon, ShareUrlIcon } from '../ui'
import { ButtonProps } from './types'

export const withShareUrl = (Component: FC<ButtonProps>) => {
  const UrlShareButton = (props: ButtonProps) => {
    const [shared, setShared] = useState(false)

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setShared(true)
        setTimeout(() => setShared(false), 2000)
      })

      if (props.onClick) {
        props.onClick(e)
      }
    }

    return (
      <Component onClick={onClick} {...props}>
        {shared ? (
          <>
            <SharedIcon /> {!props.isShorten && 'Скопировано'}
          </>
        ) : (
          <>
            <ShareUrlIcon /> {!props.isShorten && 'Ссылка'}
          </>
        )}
      </Component>
    )
  }

  UrlShareButton.displayName = 'UrlShareButton'

  return UrlShareButton
}
