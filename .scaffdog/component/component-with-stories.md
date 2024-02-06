---
name: 'component_コンポーネント（with Storybook）'
root: 'src/components'
output: '**/*'
ignore: []
questions:
  name: 'コンポーネント名を入力'
---

<!-- コンポーネント本体（ex. Hoge/Hoge.tsx） -->

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
import type { FC } from 'react';

type Props = {};

export const {{ inputs.name | pascal }}: FC<Props> = ({}) => {
  return <div>TODO: コンポーネント実装</div>
};
```

# `{{ inputs.name | pascal }}/index.ts`

```tsx
export * from './{{ inputs.name | pascal }}';
```

<!-- Storybook（ex. Hoge/Hoge.stories.tsx） -->

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: {{ inputs.name | pascal }},
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

type Story = StoryObj<typeof {{ inputs.name | pascal }}>;

export const Default: Story = {
  args: {},
};
```
