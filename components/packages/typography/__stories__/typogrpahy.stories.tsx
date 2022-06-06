import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Typography from '../src'

export default {
  title: '@razrabs-ui/Базовые компоненты/Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    color: {
      control: 'select',
      options: [
        'logo',
        'primary',
        'contrastPrimary',
        'secondary',
        'contrastSecondary',
        'brand',
        'background',
      ],
    },
    align: { control: 'select', options: ['left', 'center', 'right'] },
    weight: { control: 'select', options: ['normal', 'medium', 'bold'] },
    uppercase: { control: 'boolean' },
  },
  args: {
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю.',
  },
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
)

export const Basic = Template.bind({})
