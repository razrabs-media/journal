import { ComponentProps, FC } from 'react'
import { ShareTwitterIcon } from 'shared/ui/share-button/ui'

export const withShareTwitter = (Component: FC) => {
  const TwitterShareButton = (props: ComponentProps<'button'>) => (
    <Component {...props}>
      <ShareTwitterIcon />
    </Component>
  )

  TwitterShareButton.displayName = 'TwitterShareButton'

  return TwitterShareButton
}
