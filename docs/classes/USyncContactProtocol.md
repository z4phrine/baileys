[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / USyncContactProtocol

# Class: USyncContactProtocol

Defined in: [lib/WAUSync/Protocols/USyncContactProtocol.d.ts:5](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncContactProtocol.d.ts#L5)

## Implements

- `USyncQueryProtocol`

## Constructors

### new USyncContactProtocol()

> **new USyncContactProtocol**(): [`USyncContactProtocol`](USyncContactProtocol.md)

#### Returns

[`USyncContactProtocol`](USyncContactProtocol.md)

## Properties

### name

> **name**: `string`

Defined in: [lib/WAUSync/Protocols/USyncContactProtocol.d.ts:6](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncContactProtocol.d.ts#L6)

The name of the protocol

#### Implementation of

`USyncQueryProtocol.name`

## Methods

### getQueryElement()

> **getQueryElement**(): [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [lib/WAUSync/Protocols/USyncContactProtocol.d.ts:7](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncContactProtocol.d.ts#L7)

Defines what goes inside the query part of a USyncQuery

#### Returns

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Implementation of

`USyncQueryProtocol.getQueryElement`

***

### getUserElement()

> **getUserElement**(`user`): [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [lib/WAUSync/Protocols/USyncContactProtocol.d.ts:8](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncContactProtocol.d.ts#L8)

Defines what goes inside the user part of a USyncQuery

#### Parameters

##### user

[`USyncUser`](USyncUser.md)

#### Returns

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Implementation of

`USyncQueryProtocol.getUserElement`

***

### parser()

> **parser**(`node`): `boolean`

Defined in: [lib/WAUSync/Protocols/USyncContactProtocol.d.ts:9](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncContactProtocol.d.ts#L9)

Parse the result of the query

#### Parameters

##### node

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Returns

`boolean`

Whatever the protocol is supposed to return

#### Implementation of

`USyncQueryProtocol.parser`
