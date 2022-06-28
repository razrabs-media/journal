import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Comment from '../src'

export default {
  title: '@razrabs-ui/Компоненты/Comment',
  component: Comment,
  argTypes: {
    avatar: {control: 'text'},
    author: {control: 'text'},
    time: {control: 'text'},
    replyContent: {control: 'text'},
    content: {control: 'text'},
  },
  args: {
    avatar: 'https://i.ibb.co/5KL0rqm/Rectangle1.jpg',
    author: 'РОГОЗИН',
    time: '5 ч',
    replyContent: 'Вот ничего не понял. Кажется, это скопировано с хакер.ру. Но картинка красивая',
    content: 'Судя по аватарке, ты педик',
  },
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args) => (
  <div style={{width: 477}}>
    <Comment {...args} />
  </div>
)

export const Basic = Template.bind({})
