import type { ComponentMeta, ComponentStory } from '@storybook/react'

import type { PostCardProps } from '../src'
import { PostCard, PostType } from '../src'

export default {
  title: '@razrabs-ui/Компоненты/PostCard',
  component: PostCard,
  args: {
    type: PostType.Article,

    title:
      'Погружение в недра. Разбираем kernel exploitation, чтобы добраться до рута на виртуалке c Hack The Box',
    preview: 'https://i.ibb.co/5KL0rqm/Rectangle1.jpg',
    date: '26 апреля',

    duration: '1:12:54',
    longRead: true,

    chiefPost: true,
  },
  argTypes: {
    type: {
      control: 'radio',
      options: [PostType.Article, PostType.Video, PostType.Tweet],
    },

    title: { control: 'text' },
    preview: { type: 'file', accept: ['.png', '.jpg'] },
    date: { control: 'text' },

    duration: { control: 'text', if: { arg: 'type', eq: PostType.Video } },
    longRead: {
      control: 'boolean',
      if: { arg: 'type', eq: PostType.Article },
    },

    chiefPost: { control: 'boolean' },
  },
} as ComponentMeta<typeof PostCard>

const OneWideColumnTemplate: ComponentStory<typeof PostCard> = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  duration,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  longRead,
  ...args
}: PostCardProps) => (
  <div style={{ width: 370 }}>
    <PostCard contentMeta={{ duration, longRead }} {...args} />
  </div>
)

const TwoColumnsTemplate: ComponentStory<typeof PostCard> = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  duration,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  longRead,
  ...args
}: PostCardProps) => (
  <div style={{ width: 764 }}>
    <PostCard contentMeta={{ duration, longRead }} {...args} />
  </div>
)

const GridTemplate: ComponentStory<typeof PostCard> = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  duration,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  longRead,
  ...args
}: PostCardProps) => (
  <div
    style={{ display: 'flex', flexDirection: 'row', gap: 24, flexWrap: 'wrap' }}
  >
    <div style={{ width: '25%' }}>
      <PostCard contentMeta={{ duration, longRead }} {...args} />
    </div>
    <div style={{ width: '50%' }}>
      <PostCard contentMeta={{ duration, longRead }} {...args} />
    </div>
    <div style={{ width: '25%' }}>
      <PostCard contentMeta={{ duration, longRead }} {...args} />
    </div>
  </div>
)

export const OneColumn = OneWideColumnTemplate.bind({})

export const TwoColumns = TwoColumnsTemplate.bind({})

export const Grid = GridTemplate.bind({})
