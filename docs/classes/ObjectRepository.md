[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / ObjectRepository

# Class: ObjectRepository\<T\>

Defined in: [lib/Store/object-repository.d.ts:1](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/object-repository.d.ts#L1)

## Type Parameters

• **T** *extends* `object`

## Constructors

### new ObjectRepository()

> **new ObjectRepository**\<`T`\>(`entities`?): [`ObjectRepository`](ObjectRepository.md)\<`T`\>

Defined in: [lib/Store/object-repository.d.ts:3](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/object-repository.d.ts#L3)

#### Parameters

##### entities?

`Record`\<`string`, `T`\>

#### Returns

[`ObjectRepository`](ObjectRepository.md)\<`T`\>

## Properties

### entityMap

> `readonly` **entityMap**: `Map`\<`string`, `T`\>

Defined in: [lib/Store/object-repository.d.ts:2](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/object-repository.d.ts#L2)

## Methods

### count()

> **count**(): `number`

Defined in: [lib/Store/object-repository.d.ts:8](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/object-repository.d.ts#L8)

#### Returns

`number`

***

### deleteById()

> **deleteById**(`id`): `boolean`

Defined in: [lib/Store/object-repository.d.ts:7](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/object-repository.d.ts#L7)

#### Parameters

##### id

`string`

#### Returns

`boolean`

***

### findAll()

> **findAll**(): `T`[]

Defined in: [lib/Store/object-repository.d.ts:5](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/object-repository.d.ts#L5)

#### Returns

`T`[]

***

### findById()

> **findById**(`id`): `undefined` \| `T`

Defined in: [lib/Store/object-repository.d.ts:4](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/object-repository.d.ts#L4)

#### Parameters

##### id

`string`

#### Returns

`undefined` \| `T`

***

### toJSON()

> **toJSON**(): `T`[]

Defined in: [lib/Store/object-repository.d.ts:9](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/object-repository.d.ts#L9)

#### Returns

`T`[]

***

### upsertById()

> **upsertById**(`id`, `entity`): `Map`\<`string`, `T`\>

Defined in: [lib/Store/object-repository.d.ts:6](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/object-repository.d.ts#L6)

#### Parameters

##### id

`string`

##### entity

`T`

#### Returns

`Map`\<`string`, `T`\>
