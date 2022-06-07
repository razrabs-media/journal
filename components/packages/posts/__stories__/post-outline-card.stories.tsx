import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { PostOutlineCard } from '../src'

export default {
  title: '@razrabs-ui/Компоненты/PostOutlineCard',
  component: PostOutlineCard,
  args: {
    title:
      'Погружение в недра. Разбираем kernel exploitation, чтобы добраться до рута на виртуалке c Hack The Box',
    date: '26 апреля',

    chiefPost: true,

    small: false,
  },
  argTypes: {
    title: { control: 'text' },
    date: { control: 'text' },
    chiefPost: { control: 'boolean' },

    small: { control: 'boolean' },
  },
} as ComponentMeta<typeof PostOutlineCard>

const Template: ComponentStory<typeof PostOutlineCard> = (args) => (
  <PostOutlineCard {...args} />
)

export const Basic = Template.bind({})
