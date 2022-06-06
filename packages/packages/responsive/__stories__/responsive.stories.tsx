import Typography from '@razrabs-ui/typography'

import { Desktop, Mobile, Tablet, TabletAndAbove, TabletAndBelow } from '../src'

export default {
  title: '@razrabs-ui/Утилиты/Responsive',
}

const colorStyles = (color: string) => ({
  padding: 20,
  backgroundColor: color,
})

export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <Desktop>
      <Typography style={colorStyles('red')}>
        Видно только на компьютре
      </Typography>
    </Desktop>

    <TabletAndAbove>
      <Typography style={colorStyles('purple')}>
        Видно на планшете и компьютере
      </Typography>
    </TabletAndAbove>

    <Tablet>
      <Typography style={colorStyles('blue')}>
        Видно только на планшете
      </Typography>
    </Tablet>

    <TabletAndBelow>
      <Typography style={colorStyles('turquoise')}>
        Видно на планшете и мобильном
      </Typography>
    </TabletAndBelow>

    <Mobile>
      <Typography style={colorStyles('green')}>
        Видно только на мобильном
      </Typography>
    </Mobile>
  </div>
)
