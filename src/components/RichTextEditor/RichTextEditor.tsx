import { mergeAttributes } from '@tiptap/core'
import { Bold } from '@tiptap/extension-bold'
import { BulletList } from '@tiptap/extension-bullet-list'
import { CharacterCount } from '@tiptap/extension-character-count'
import { Color } from '@tiptap/extension-color'
import { Document } from '@tiptap/extension-document'
import { Heading } from '@tiptap/extension-heading'
import { Image } from '@tiptap/extension-image'
import { Italic } from '@tiptap/extension-italic'
import { ListItem } from '@tiptap/extension-list-item'
import { OrderedList } from '@tiptap/extension-ordered-list'
import { Paragraph } from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { TextStyle } from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import { FontSize } from 'tiptap-extension-font-size'

import RichEditorToolbar from './RichEditorToolbar'

import type { FC } from 'react'

type Props = {
  text: string
  alt?: string
  onChange: (text: string) => void
  uploadImage: (params: { body: { image: File } }) => Promise<{ imageUrl: string }>
  isUploading: boolean
  uploadImageError: any
  limit?: number
}

/**
 * WYSIWYGエディタ
 * 画像アップロード機能を備えている
 * 現バージョンでは必須パラメータとして画像アップロード機能を受け取ります
 * @param text
 * @param onChange
 * @param alt
 * @param uploadImageError
 * @param isUploading
 * @param uploadImage
 * @param limit
 * @constructor
 */
export const RichTextEditor: FC<Props> = ({
  text,
  onChange,
  alt,
  uploadImageError,
  isUploading,
  uploadImage,
  limit = 10000,
}) => {
  const editor = useEditor({
    /**
     * todo
     * https://tiptap.dev/api/extensions/character-count
     */
    extensions: [
      OrderedList.configure({
        HTMLAttributes: {
          class: 'mej-list-decimal mej-ml-4',
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'mej-list-disc mej-ml-4',
        },
      }),
      ListItem,
      Bold,
      Italic,
      Document,
      // https://github.com/ueberdosis/tiptap/issues/1514
      Heading.extend({
        levels: [2, 3],
        renderHTML({ node, HTMLAttributes }) {
          const level = node.attrs.level
          const classes: { [index: number]: string } = {
            2: 'mej-text-2xl',
            3: 'mej-text-xl',
          }
          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]}`,
            }),
            0,
          ]
        },
      }).configure({ levels: [2, 3] }),
      Paragraph,
      Text,
      Color,
      TextStyle,
      FontSize,
      Image,
      CharacterCount.configure({
        limit,
      }),
    ],
    content: text,
    editorProps: {
      attributes: {
        class: 'mej-p-4',
        role: alt ?? '',
      },
    },
    onUpdate: ({ editor: instance }) => {
      onChange(instance.getHTML())
      console.log(instance.getHTML())
    },
  })

  return (
    <>
      <div className={'mej-rounded-md mej-border mej-border-gray mej-overflow-hidden'}>
        <RichEditorToolbar
          editor={editor}
          uploadImageError={uploadImageError}
          isUploading={isUploading}
          uploadImage={uploadImage}
        />
        <EditorContent className={'mej-leading-8'} editor={editor} />
      </div>
      {editor && (
        <p className={'mej-mt-2 mej-text-right mej-text-sm'}>
          {editor.storage.characterCount.characters()}/{Number(limit).toLocaleString()}
        </p>
      )}
    </>
  )
}
