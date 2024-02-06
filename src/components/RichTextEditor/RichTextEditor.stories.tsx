import { RichTextEditor } from './RichTextEditor'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: RichTextEditor,
} satisfies Meta<typeof RichTextEditor>

type Story = StoryObj<typeof RichTextEditor>

export const SampleText: Story = {
  args: {
    text: '<h2 class="mej-text-2xl"><strong>筋トレのデメリット</strong></h2><p><span style="font-size: 12px">全ての物事はトレードオフなので、勿論デメリットが存在します。</span></p><ol class="mej-list-decimal mej-ml-4"><li><p>オフィスが暑すぎて砂漠</p></li><li><p>怪我をするリスク</p></li><li><p>服が入らなくなる</p><p></p><img src="https://placehold.jp/150x150.png"></li></ol><p></p><h3 class="mej-text-xl"><strong>オフィスが暑すぎて砂漠</strong></h3><p><span style="font-size: 12px">転職活動の際に、理由を聞かれたらおそらく真剣にこう答えると思います。</span></p><ul class="mej-list-disc mej-ml-4"><li><p><strong>オフィスが暑すぎて砂漠</strong></p></li><li><p><strong>快適な室温のオフィスで働きたい</strong></p></li></ul>',
    uploadImage: async () => {
      return {
        imageUrl: 'https://placehold.jp/150x150.png',
      }
    },
  },
}

export const Paragraph: Story = {
  args: {
    text: '「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」',
  },
}

export const ListItem: Story = {
  args: {
    text: '<p>「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」</p><ul><li>「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」</li><li>はい、知っていますよ</li></ul>',
  },
}

export const OListItem: Story = {
  args: {
    text: '<p>「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」</p><ol><li>「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」</li><li>はい、知っていますよ</li></ol>',
  },
}
