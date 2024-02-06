import { useRef } from 'react'
import { LuHeading2, LuHeading3 } from 'react-icons/lu'
import {
  MdFormatBold,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdOutlineTextDecrease,
  MdOutlineTextIncrease,
} from 'react-icons/md'

import type { Editor } from '@tiptap/react'

const handlers = {
  toggleH2: (editor: Editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
  toggleH3: (editor: Editor) => editor.chain().focus().toggleHeading({ level: 3 }).run(),
  changeTextSizeToSmall: (editor: Editor) => editor.chain().focus().setFontSize('12px').run(),
  changeTextSizeToNormal: (editor: Editor) => editor.chain().focus().setFontSize('16px').run(),
  toggleBold: (editor: Editor) => editor.chain().focus().toggleBold().run(),
  toggleItalic: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
  toggleNumericList: (editor: Editor) => editor.chain().focus().toggleOrderedList().run(),
  toggleBulletList: (editor: Editor) => editor.chain().focus().toggleBulletList().run(),
  onChangeColor: (editor: Editor, color: string) => editor.chain().focus().setColor(color).run(),
  uploadImage: (editor: Editor, url: string) => editor.chain().focus().setImage({ src: url }).run(),
}

type Props = {
  editor: Editor | null
  uploadImage: (params: { body: { image: File } }) => Promise<{ imageUrl: string }>
  isUploading: boolean
  uploadImageError: any
}
const RichEditorToolbar = ({ editor, uploadImage, isUploading, uploadImageError }: Props) => {
  const fileRef = useRef<HTMLInputElement>(null)

  if (!editor) {
    return null
  }

  return (
    <div
      className={
        'mej-flex mej-flex-wrap mej-gap-2 mej-border-b mej-border-gray mej-bg-primary mej-px-4 mej-py-2 mej-text-2xl'
      }
    >
      <button
        type={'button'}
        onClick={() => handlers.toggleH2(editor)}
        className={!editor.isActive('heading', { level: 2 }) ? 'mej-opacity-60' : ''}
      >
        <LuHeading2 />
      </button>
      <button
        type={'button'}
        onClick={() => handlers.toggleH3(editor)}
        className={!editor.isActive('heading', { level: 3 }) ? 'mej-opacity-60' : ''}
      >
        <LuHeading3 />
      </button>
      <button
        type={'button'}
        onClick={() => handlers.toggleBold(editor)}
        className={!editor.isActive('bold') ? 'mej-opacity-60' : ''}
      >
        <MdFormatBold />
      </button>
      <button
        type={'button'}
        onClick={() => handlers.changeTextSizeToSmall(editor)}
        className={'mej-opacity-60'}
      >
        <MdOutlineTextDecrease />
      </button>
      <button
        type={'button'}
        onClick={() => handlers.changeTextSizeToNormal(editor)}
        className={'mej-opacity-60'}
      >
        <MdOutlineTextIncrease />
      </button>
      <button
        type={'button'}
        onClick={() => handlers.toggleBulletList(editor)}
        className={!editor.isActive('bulletList') ? 'mej-opacity-60' : ''}
      >
        <MdFormatListBulleted />
      </button>
      <button
        type={'button'}
        onClick={() => handlers.toggleNumericList(editor)}
        className={!editor.isActive('orderedList') ? 'mej-opacity-60' : ''}
      >
        <MdFormatListNumbered />
      </button>
      {/* 画像アップロードボタンとinput type=fileタグ */}
      <label htmlFor="image-upload">
        <button
          className={
            'mej-text-sm mej-font-bold mej-px-2 mej-py-1 mej-rounded mej-bg-white mej-border mej-border-gray'
          }
          type={'button'}
          onClick={() => {
            fileRef.current?.click()
          }}
        >
          {isUploading ? <span>Loading</span> : <span>画像アップロード</span>}
        </button>
      </label>
      {uploadImageError && (
        <span className={'mej-text-sm mej-text-red-500'}>{uploadImageError.message}</span>
      )}
      <input
        name={'image-upload'}
        id={'image-upload'}
        ref={fileRef}
        type={'file'}
        hidden
        accept={'image/*'}
        onChange={(e) => {
          if (!e.target.files) {
            return
          }
          uploadImage({
            body: {
              image: e.target.files[0]!,
            },
          })
            .then((res) => handlers.uploadImage(editor, res.imageUrl))
            .catch(() => undefined)
        }}
      />
    </div>
  )
}

export default RichEditorToolbar
