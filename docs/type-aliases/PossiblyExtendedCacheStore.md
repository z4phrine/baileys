[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / PossiblyExtendedCacheStore

# Type Alias: PossiblyExtendedCacheStore

> **PossiblyExtendedCacheStore**: [`CacheStore`](CacheStore.md) & `object`

Defined in: [lib/Types/Socket.d.ts:26](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Socket.d.ts#L26)

## Type declaration

### mdel()?

> `optional` **mdel**: (`keys`) => `void` \| `Promise`\<`void`\> \| `number` \| `boolean`

#### Parameters

##### keys

`string`[]

#### Returns

`void` \| `Promise`\<`void`\> \| `number` \| `boolean`

### mget()?

> `optional` **mget**: \<`T`\>(`keys`) => `Promise`\<`Record`\<`string`, `T` \| `undefined`\>\>

#### Type Parameters

• **T**

#### Parameters

##### keys

`string`[]

#### Returns

`Promise`\<`Record`\<`string`, `T` \| `undefined`\>\>

### mset()?

> `optional` **mset**: \<`T`\>(`entries`) => `Promise`\<`void`\> \| `void` \| `number` \| `boolean`

#### Type Parameters

• **T**

#### Parameters

##### entries

`object`[]

#### Returns

`Promise`\<`void`\> \| `void` \| `number` \| `boolean`
