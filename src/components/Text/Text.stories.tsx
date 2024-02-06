import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

export default {
  component: Text,
} satisfies Meta<typeof Text>

export const Default: StoryObj<typeof Text> = {
  args: {
    children: 'Text',
  },
}
