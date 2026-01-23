[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / encryptedStream

# Function: encryptedStream()

> **encryptedStream**(`media`, `mediaType`, `__namedParameters`?): `Promise`\<\{ `bodyPath`: `undefined` \| `string`; `didSaveToTmpPath`: `boolean`; `encWriteStream`: `Readable`; `fileEncSha256`: `Buffer`; `fileLength`: `number`; `fileSha256`: `Buffer`; `mac`: `Buffer`; `mediaKey`: `Buffer`; \}\>

Defined in: [lib/Utils/messages-media.d.ts:84](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/messages-media.d.ts#L84)

## Parameters

### media

[`WAMediaUpload`](../type-aliases/WAMediaUpload.md)

### mediaType

`"audio"` | `"video"` | `"document"` | `"gif"` | `"image"` | `"ppic"` | `"product"` | `"ptt"` | `"sticker"` | `"thumbnail-document"` | `"thumbnail-image"` | `"thumbnail-video"` | `"thumbnail-link"` | `"md-msg-hist"` | `"md-app-state"` | `"product-catalog-image"` | `"payment-bg-image"` | `"ptv"` | `"biz-cover-photo"`

### \_\_namedParameters?

`EncryptedStreamOptions`

## Returns

`Promise`\<\{ `bodyPath`: `undefined` \| `string`; `didSaveToTmpPath`: `boolean`; `encWriteStream`: `Readable`; `fileEncSha256`: `Buffer`; `fileLength`: `number`; `fileSha256`: `Buffer`; `mac`: `Buffer`; `mediaKey`: `Buffer`; \}\>
