[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / downloadMediaMessage

# Function: downloadMediaMessage()

> **downloadMediaMessage**\<`Type`\>(`message`, `type`, `options`, `ctx`?): `Promise`\<`Type` *extends* `"buffer"` ? `Buffer`\<`ArrayBufferLike`\> : `Transform`\>

Defined in: [lib/Utils/messages.d.ts:94](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/messages.d.ts#L94)

Downloads the given message. Throws an error if it's not a media message

## Type Parameters

• **Type** *extends* `"stream"` \| `"buffer"`

## Parameters

### message

`IWebMessageInfo`

### type

`Type`

### options

[`MediaDownloadOptions`](../type-aliases/MediaDownloadOptions.md)

### ctx?

`DownloadMediaMessageContext`

## Returns

`Promise`\<`Type` *extends* `"buffer"` ? `Buffer`\<`ArrayBufferLike`\> : `Transform`\>
