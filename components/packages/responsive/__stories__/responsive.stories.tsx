import Typography from '@razrabs-ui/typography'

import {
  LargeDesktopAndAbove,
  LargeDesktop,
  LargeDesktopAndBelow,
  DesktopAndAbove,
  Desktop,
  DesktopAndBelow,
  Mobile,
  Tablet,
  TabletAndAbove,
  TabletAndBelow,
} from '../src'

export default {
  title: '@razrabs-ui/Утилиты/Responsive',
}

const colorStyles = (color: string) => ({
  padding: 20,
  backgroundColor: color,
})

export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <LargeDesktopAndAbove>
      <Typography style={colorStyles('red')}>
        LargeDesktopAndAbove. Видно только более, чем большом мониторе
        (ultrawide мониторы, например)
      </Typography>
    </LargeDesktopAndAbove>

    <LargeDesktop>
      <Typography style={colorStyles('orange')}>
        LargeDesktop. Видно только на большом мониторе
      </Typography>
    </LargeDesktop>

    <LargeDesktopAndBelow>
      <Typography style={colorStyles('yellow')}>
        LargeDesktopAndBelow. Видно на мобильном, планшете, обычном мониторе и
        большом мониторе
      </Typography>
    </LargeDesktopAndBelow>

    <DesktopAndAbove>
      <Typography style={colorStyles('green')}>
        DesktopAndAbove. Видно на обычном мониторе и большом мониторе
      </Typography>
    </DesktopAndAbove>

    <Desktop>
      <Typography style={colorStyles('deepskyblue')}>
        Desktop. Видно только на обычном мониторе
      </Typography>
    </Desktop>

    <DesktopAndBelow>
      <Typography style={colorStyles('blue')}>
        DesktopAndBelow. Видно на мобильном, планшете, обычном мониторе
      </Typography>
    </DesktopAndBelow>

    <TabletAndAbove>
      <Typography style={colorStyles('purple')}>
        TabletAndAbove. Видно на планшете, обычном мониторе и большом мониторе
      </Typography>
    </TabletAndAbove>

    <Tablet>
      <Typography style={colorStyles('maroon')}>
        Tablet. Видно только на планшете
      </Typography>
    </Tablet>

    <TabletAndBelow>
      <Typography style={colorStyles('aqua')}>
        TabletAndBelow. Видно на планшете и мобильном
      </Typography>
    </TabletAndBelow>

    <Mobile>
      <Typography style={colorStyles('fuchsia')}>
        Mobile. Видно только на мобильном
      </Typography>
    </Mobile>
  </div>
)
