[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / CacheStore

# Type Alias: CacheStore

> **CacheStore**: `object`

Defined in: [lib/Types/Socket.d.ts:15](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Socket.d.ts#L15)

## Type declaration

### del()

delete a key from the cache

#### Parameters

##### key

`string`

#### Returns

`number` \| `boolean` \| `void` \| `Promise`\<`void`\>

### flushAll()

flush all data

#### Returns

`void` \| `Promise`\<`void`\>

### get()

get a cached key and change the stats

#### Type Parameters

• **T**

#### Parameters

##### key

`string`

#### Returns

`undefined` \| `T` \| `Promise`\<`T`\>

### set()

set a key in the cache

#### Type Parameters

• **T**

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`number` \| `boolean` \| `void` \| `Promise`\<`void`\>
