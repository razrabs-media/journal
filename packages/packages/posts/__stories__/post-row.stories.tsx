import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { PostRow } from '../src'
import type { PostRowProps } from '../src/row/types'
import { PostType } from '../src/types'

export default {
  title: '@razrabs-ui/Компоненты/PostRow',
  component: PostRow,
  args: {
    small: false,

    type: PostType.Article,

    title:
      'Погружение в недра. Разбираем kernel exploitation, чтобы добраться до рута на виртуалке c Hack The Box',
    preview: 'https://i.ibb.co/5KL0rqm/Rectangle1.jpg',
    date: '26 апреля',
    tags: [],

    duration: '1:12:54',
    longRead: true,

    chiefPost: true,
  },
  argTypes: {
    small: { control: 'boolean' },

    type: {
      control: 'radio',
      options: [PostType.Article, PostType.Video, PostType.Tweet],
    },

    title: { control: 'text' },
    preview: { type: 'file', accept: ['.png', '.jpg'] },
    date: { control: 'text' },
    tags: { control: 'array' },

    duration: { control: 'text', if: { arg: 'type', eq: PostType.Video } },
    longRead: {
      control: 'boolean',
      if: { arg: 'type', eq: PostType.Article },
    },

    chiefPost: { control: 'boolean' },
  },
} as ComponentMeta<typeof PostRow>

const Template: ComponentStory<typeof PostRow> = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  duration,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  longRead,
  ...args
}: PostRowProps) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <PostRow contentMeta={{ duration, longRead }} {...args} />
)

export const Basic = Template.bind({})

export const Video = Template.bind({})
