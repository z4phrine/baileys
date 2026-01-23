[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / MessageContentGenerationOptions

# Type Alias: MessageContentGenerationOptions

> **MessageContentGenerationOptions**: [`MediaGenerationOptions`](MediaGenerationOptions.md) & `object`

Defined in: [lib/Types/Message.d.ts:446](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Message.d.ts#L446)

## Type declaration

### getCallLink()?

> `optional` **getCallLink**: (`type`, `event`?) => `Promise`\<`string` \| `undefined`\>

#### Parameters

##### type

`"audio"` | `"video"`

##### event?

`number`

#### Returns

`Promise`\<`string` \| `undefined`\>

### getProfilePicUrl()?

> `optional` **getProfilePicUrl**: (`jid`) => `Promise`\<`string` \| `undefined`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

### getUrlInfo()?

> `optional` **getUrlInfo**: (`text`) => `Promise`\<[`WAUrlInfo`](../interfaces/WAUrlInfo.md) \| `undefined`\>

#### Parameters

##### text

`string`

#### Returns

`Promise`\<[`WAUrlInfo`](../interfaces/WAUrlInfo.md) \| `undefined`\>
