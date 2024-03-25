import { Meta, StoryObj } from '@storybook/react'
import { Button } from './index'

export default {
  component: Button,
} satisfies Meta<typeof Button>

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Default',
  },
}

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: 'Primary',
    color: 'primary',
  },
}

export const PrimaryLarge: StoryObj<typeof Button> = {
  args: {
    children: 'Primary Large',
    color: 'primary',
    size: 'lg',
  },
}

export const PrimaryOutlineSmall: StoryObj<typeof Button> = {
  args: {
    children: 'Primary Outline Small',
    color: 'primary',
    style: 'outline',
    size: 'sm',
  },
}

export const AccentOutlineLarge: StoryObj<typeof Button> = {
  args: {
    children: 'Accent Outline Large',
    color: 'accent',
    style: 'outline',
    size: 'lg',
  },
}
