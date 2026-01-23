[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / getRawMediaUploadData

# Function: getRawMediaUploadData()

> **getRawMediaUploadData**(`media`, `mediaType`, `logger`?): `Promise`\<\{ `fileLength`: `number`; `filePath`: `string`; `fileSha256`: `Buffer`\<`ArrayBufferLike`\>; \}\>

Defined in: [lib/Utils/messages-media.d.ts:12](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/messages-media.d.ts#L12)

## Parameters

### media

[`WAMediaUpload`](../type-aliases/WAMediaUpload.md)

### mediaType

`"audio"` | `"video"` | `"document"` | `"gif"` | `"image"` | `"ppic"` | `"product"` | `"ptt"` | `"sticker"` | `"thumbnail-document"` | `"thumbnail-image"` | `"thumbnail-video"` | `"thumbnail-link"` | `"md-msg-hist"` | `"md-app-state"` | `"product-catalog-image"` | `"payment-bg-image"` | `"ptv"` | `"biz-cover-photo"`

### logger?

`ILogger`

## Returns

`Promise`\<\{ `fileLength`: `number`; `filePath`: `string`; `fileSha256`: `Buffer`\<`ArrayBufferLike`\>; \}\>
