import { FC, PropsWithChildren } from 'react'

/**
 * こちらのTextコンポーネントだけ使って、RichTextEditorがTree ShakingでBundleに含まれなければ成功
 * @param children
 * @constructor
 */

export const Text: FC<PropsWithChildren> = ({ children }) => <span>{children}</span>
