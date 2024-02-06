// default importしているとtsconfig等の設定によってはエラーになるため
import { ClassValue, clsx } from 'clsx'

/**
 * @description clsxのWrapper。tailwind-merge等を将来的に噛ました時に影響範囲が小さくなります
 * @param inputs
 */
export const cname = (...inputs: ClassValue[]) => clsx(...inputs)
