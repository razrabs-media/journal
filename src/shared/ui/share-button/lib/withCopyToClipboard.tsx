import { ComponentProps, FC, MouseEvent, useState } from 'react'
import { SharedIcon, ShareUrlIcon } from '../ui'

export const withShareUrl = (Component: FC<ComponentProps<'button'>>) => {
  const UrlShareButton = (props: ComponentProps<'button'>) => {
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
            <SharedIcon /> Скопировано
          </>
        ) : (
          <>
            <ShareUrlIcon /> Ссылка
          </>
        )}
      </Component>
    )
  }

  UrlShareButton.displayName = 'UrlShareButton'

  return UrlShareButton
}
