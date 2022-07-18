import type {ComponentMeta, ComponentStory} from '@storybook/react'

import Clock from "../src";

export default {
  title: '@razrabs-ui/Базовые компоненты/Clock',
  component: Clock,
  args: {
  },
  argTypes: {
    currentTime: { control: 'text' },
  },
} as ComponentMeta<typeof Clock>

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />

export const Basic = Template.bind({})
