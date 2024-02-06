import { expect, test } from 'vitest'

import { cname } from './cname'

test('cname should work', () => {
  expect(cname('a', 'b')).toBe('a b')
})
