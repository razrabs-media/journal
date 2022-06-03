import Link from 'next/link'
import { FC } from 'react'
import {
  Copyright,
  Logo,
  StyledFooter,
  StyledFootMenu,
  StyledMenuBlock,
  StyledNav,
  StyledShareNav,
  StyledText,
} from './styled'

export const Footer: FC = () => (
  <StyledFooter>
    <StyledFootMenu>
      <Copyright>In code we trust since 2021</Copyright>
      <StyledMenuBlock>
        <StyledNav>
          <Link href='#'>о нас</Link>
          <Link href='#'>условия</Link>
          <Link href='#'>лицензия</Link>
          <Link href='#'>связаться</Link>
        </StyledNav>
        <StyledShareNav>
          <StyledText>еще и тут:</StyledText>
          <Link href='#'>github</Link>
          <Link href='#'>yt</Link>
          <Link href='#'>tg</Link>
          <Link href='#'>tw</Link>
        </StyledShareNav>
      </StyledMenuBlock>
    </StyledFootMenu>
    <Logo>Разрабы</Logo>
  </StyledFooter>
)
