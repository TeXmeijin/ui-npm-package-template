'use client'
import { RichTextEditor } from '@texmeijin/ui-library-example'

export const Editor = () => {
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
