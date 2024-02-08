## 概要

UIライブラリが正しく配信されているかのテスト用

## Tree Shaking

```sh
Route (app)                              Size     First Load JS
┌ ○ /                                    5.12 kB        89.3 kB
├ ○ /_not-found                          885 B          85.1 kB
└ ○ /with-editor                         82.9 kB         167 kB
+ First Load JS shared by all            84.2 kB
  ├ chunks/69-1f4f900eec97fdb6.js        28.9 kB
  ├ chunks/fd9d1056-3129612e49b779e6.js  53.4 kB
  └ other shared chunks (total)          1.86 kB
```

