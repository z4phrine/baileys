[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / getMediaKeys

# Function: getMediaKeys()

> **getMediaKeys**(`buffer`, `mediaType`): [`MediaDecryptionKeyInfo`](../type-aliases/MediaDecryptionKeyInfo.md)

Defined in: [lib/Utils/messages-media.d.ts:19](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/messages-media.d.ts#L19)

generates all the keys required to encrypt/decrypt & sign a media message

## Parameters

### buffer

`undefined` | `null` | `string` | `Uint8Array`\<`ArrayBufferLike`\>

### mediaType

`"audio"` | `"video"` | `"document"` | `"gif"` | `"image"` | `"ppic"` | `"product"` | `"ptt"` | `"sticker"` | `"thumbnail-document"` | `"thumbnail-image"` | `"thumbnail-video"` | `"thumbnail-link"` | `"md-msg-hist"` | `"md-app-state"` | `"product-catalog-image"` | `"payment-bg-image"` | `"ptv"` | `"biz-cover-photo"`

## Returns

[`MediaDecryptionKeyInfo`](../type-aliases/MediaDecryptionKeyInfo.md)
