'use client'
import { RichTextEditor } from '@texmeijin/meijin-ui'

type Props = {}

export const Editor = (props: Props) => {
  return (
    <RichTextEditor
      text={'こんにちは'}
      onChange={() => void 0}
      uploadImage={() => void 0 as any}
      isUploading={false}
      uploadImageError={null}
    ></RichTextEditor>
  )
}
