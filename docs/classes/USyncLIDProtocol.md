[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / USyncLIDProtocol

# Class: USyncLIDProtocol

Defined in: [lib/WAUSync/Protocols/USyncLIDProtocol.d.ts:5](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncLIDProtocol.d.ts#L5)

## Implements

- `USyncQueryProtocol`

## Constructors

### new USyncLIDProtocol()

> **new USyncLIDProtocol**(): [`USyncLIDProtocol`](USyncLIDProtocol.md)

#### Returns

[`USyncLIDProtocol`](USyncLIDProtocol.md)

## Properties

### name

> **name**: `string`

Defined in: [lib/WAUSync/Protocols/USyncLIDProtocol.d.ts:6](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncLIDProtocol.d.ts#L6)

The name of the protocol

#### Implementation of

`USyncQueryProtocol.name`

## Methods

### getQueryElement()

> **getQueryElement**(): [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [lib/WAUSync/Protocols/USyncLIDProtocol.d.ts:7](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncLIDProtocol.d.ts#L7)

Defines what goes inside the query part of a USyncQuery

#### Returns

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Implementation of

`USyncQueryProtocol.getQueryElement`

***

### getUserElement()

> **getUserElement**(`user`): `null` \| [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [lib/WAUSync/Protocols/USyncLIDProtocol.d.ts:8](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncLIDProtocol.d.ts#L8)

Defines what goes inside the user part of a USyncQuery

#### Parameters

##### user

[`USyncUser`](USyncUser.md)

#### Returns

`null` \| [`BinaryNode`](../type-aliases/BinaryNode.md)

#### Implementation of

`USyncQueryProtocol.getUserElement`

***

### parser()

> **parser**(`node`): `null` \| `string`

Defined in: [lib/WAUSync/Protocols/USyncLIDProtocol.d.ts:9](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncLIDProtocol.d.ts#L9)

Parse the result of the query

#### Parameters

##### node

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Returns

`null` \| `string`

Whatever the protocol is supposed to return

#### Implementation of

`USyncQueryProtocol.parser`
