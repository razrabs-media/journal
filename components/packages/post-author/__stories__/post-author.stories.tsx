import type {ComponentMeta, ComponentStory} from '@storybook/react'

import PostAuthor from '../src'

export default {
  title: '@razrabs-ui/Базовые компоненты/PostAuthor',
  component: PostAuthor,
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
} as ComponentMeta<typeof PostAuthor>

const Template: ComponentStory<typeof PostAuthor> = (args) => <PostAuthor {...args} />

export const Basic = Template.bind({})
