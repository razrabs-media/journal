import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Badge from '../src'

export default {
  title: '@razrabs-ui/Базовые компоненты/Badge',
  component: Badge,
  args: {
    color: 'primary',
    wide: false,
    children: 'Ядро Linux',
  },
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'brand'] },
    wide: { control: 'boolean' },
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Basic = Template.bind({})
