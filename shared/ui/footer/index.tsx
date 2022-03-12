import { FC } from 'react'
import { Copyleft, FooterLogo, WrapperFooter } from './styles'
import { Typography } from 'shared/ui/typography'

export const Footer: FC = () => (
  <WrapperFooter>
    <Copyleft>
      <Typography uppercase>in code we trust since 2021</Typography>
    </Copyleft>

    <FooterLogo>разрабы</FooterLogo>
  </WrapperFooter>
)
