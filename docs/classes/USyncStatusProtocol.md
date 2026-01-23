[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / USyncStatusProtocol

# Class: USyncStatusProtocol

Defined in: [lib/WAUSync/Protocols/USyncStatusProtocol.d.ts:9](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncStatusProtocol.d.ts#L9)

## Implements

- `USyncQueryProtocol`

## Constructors

### new USyncStatusProtocol()

> **new USyncStatusProtocol**(): [`USyncStatusProtocol`](USyncStatusProtocol.md)

#### Returns

[`USyncStatusProtocol`](USyncStatusProtocol.md)

## Properties

### name

> **name**: `string`

Defined in: [lib/WAUSync/Protocols/USyncStatusProtocol.d.ts:10](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncStatusProtocol.d.ts#L10)

The name of the protocol

#### Implementation of

`USyncQueryProtocol.name`

## Methods

### getQueryElement()

> **getQueryElement**(): [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [lib/WAUSync/Protocols/USyncStatusProtocol.d.ts:11](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncStatusProtocol.d.ts#L11)

Defines what goes inside the query part of a USyncQuery

#### Returns

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Implementation of

`USyncQueryProtocol.getQueryElement`

***

### getUserElement()

> **getUserElement**(): `null`

Defined in: [lib/WAUSync/Protocols/USyncStatusProtocol.d.ts:12](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncStatusProtocol.d.ts#L12)

Defines what goes inside the user part of a USyncQuery

#### Returns

`null`

#### Implementation of

`USyncQueryProtocol.getUserElement`

***

### parser()

> **parser**(`node`): `undefined` \| [`StatusData`](../type-aliases/StatusData.md)

Defined in: [lib/WAUSync/Protocols/USyncStatusProtocol.d.ts:13](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncStatusProtocol.d.ts#L13)

Parse the result of the query

#### Parameters

##### node

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Returns

`undefined` \| [`StatusData`](../type-aliases/StatusData.md)

Whatever the protocol is supposed to return

#### Implementation of

`USyncQueryProtocol.parser`
