import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Image, { FallbackSquare } from '../src'

export default {
  title: '@razrabs-ui/Базовые компоненты/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    fallbackSrc: { control: 'text' },
    w: { control: 'text' },
    h: { control: 'text' },
    align: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'center'],
    },
    fit: {
      control: 'select',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    },
    // below are only included when advanced is true
    fallback: { control: 'object', if: { arg: 'advanced' } },
  },
  args: {
    src: 'https://i.ibb.co/5KL0rqm/Rectangle1.jpg',
    fallbackSrc: undefined,
    w: undefined,
    h: undefined,
  },
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => (
  <Image {...args} alt='Example image' fallback={<FallbackSquare />} />
)

export const Basic = Template.bind({})

export const WithSize = Template.bind({})
WithSize.args = {
  w: '300',
  h: '150',
  fit: 'contain',
  align: 'left',
}

export const WithFallback = Template.bind({})
WithFallback.args = {
  src: 'wrong-image.jpg',
}
