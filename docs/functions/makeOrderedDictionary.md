[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / makeOrderedDictionary

# Function: makeOrderedDictionary()

> **makeOrderedDictionary**\<`T`\>(`idGetter`): `object`

Defined in: [lib/Store/make-ordered-dictionary.d.ts:1](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/make-ordered-dictionary.d.ts#L1)

## Type Parameters

• **T**

## Parameters

### idGetter

(`item`) => `string`

## Returns

`object`

### array

> **array**: `T`[]

### clear()

> **clear**: () => `void`

#### Returns

`void`

### filter()

> **filter**: (`contain`) => `void`

#### Parameters

##### contain

(`item`) => `boolean`

#### Returns

`void`

### fromJSON()

> **fromJSON**: (`newItems`) => `void`

#### Parameters

##### newItems

`T`[]

#### Returns

`void`

### get()

> **get**: (`id`) => `undefined` \| `T`

#### Parameters

##### id

`string`

#### Returns

`undefined` \| `T`

### remove()

> **remove**: (`item`) => `boolean`

#### Parameters

##### item

`T`

#### Returns

`boolean`

### toJSON()

> **toJSON**: () => `T`[]

#### Returns

`T`[]

### update()

> **update**: (`item`) => `boolean`

#### Parameters

##### item

`T`

#### Returns

`boolean`

### updateAssign()

> **updateAssign**: (`id`, `update`) => `boolean`

#### Parameters

##### id

`string`

##### update

`Partial`\<`T`\>

#### Returns

`boolean`

### upsert()

> **upsert**: (`item`, `mode`) => `void`

#### Parameters

##### item

`T`

##### mode

`"append"` | `"prepend"`

#### Returns

`void`
