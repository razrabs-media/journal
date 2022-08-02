import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Clock from '../src'

export default {
  title: '@razrabs-ui/Базовые компоненты/Clock',
  component: Clock,
  args: {
    currentTime: '2022-08-02T09:00:00.000',
  },
  argTypes: {
    currentTime: { control: 'text' },
  },
} as ComponentMeta<typeof Clock>

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />

export const Basic = Template.bind({})
