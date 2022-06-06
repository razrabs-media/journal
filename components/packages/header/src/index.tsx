import { Container } from './container'
import { Divider } from './divider'
import { Logo } from './logo'
import { Menu } from './menu'
import { Preferences } from './preferences'
import { Row } from './row'

const Header = () => (
  <Container as='header'>
    <Row center={<Logo />} left={<Menu />} right={<Preferences />} />

    <Divider />

    <Row />
  </Container>
)

export default Header

export * from './logo'
