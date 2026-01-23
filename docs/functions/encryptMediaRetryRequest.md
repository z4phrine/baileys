[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / encryptMediaRetryRequest

# Function: encryptMediaRetryRequest()

> **encryptMediaRetryRequest**(`key`, `mediaKey`, `meId`): [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [lib/Utils/messages-media.d.ts:117](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/messages-media.d.ts#L117)

Generate a binary node that will request the phone to re-upload the media & return the newly uploaded URL

## Parameters

### key

`IMessageKey`

### mediaKey

`Buffer`\<`ArrayBufferLike`\> | `Uint8Array`\<`ArrayBufferLike`\>

### meId

`string`

## Returns

[`BinaryNode`](../type-aliases/BinaryNode.md)
