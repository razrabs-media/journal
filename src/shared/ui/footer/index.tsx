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
          <a href='#'>о нас</a>
          <a href='#'>условия</a>
          <a href='#'>лицензия</a>
          <a href='#'>связаться</a>
        </StyledNav>
        <StyledShareNav>
          <StyledText>еще и тут:</StyledText>
          <a href='#'>github</a>
          <a href='#'>yt</a>
          <a href='#'>tg</a>
          <a href='#'>tw</a>
        </StyledShareNav>
      </StyledMenuBlock>
    </StyledFootMenu>
    <Logo>Разрабы</Logo>
  </StyledFooter>
)
