[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / USyncDisappearingModeProtocol

# Class: USyncDisappearingModeProtocol

Defined in: [lib/WAUSync/Protocols/USyncDisappearingModeProtocol.d.ts:9](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncDisappearingModeProtocol.d.ts#L9)

## Implements

- `USyncQueryProtocol`

## Constructors

### new USyncDisappearingModeProtocol()

> **new USyncDisappearingModeProtocol**(): [`USyncDisappearingModeProtocol`](USyncDisappearingModeProtocol.md)

#### Returns

[`USyncDisappearingModeProtocol`](USyncDisappearingModeProtocol.md)

## Properties

### name

> **name**: `string`

Defined in: [lib/WAUSync/Protocols/USyncDisappearingModeProtocol.d.ts:10](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncDisappearingModeProtocol.d.ts#L10)

The name of the protocol

#### Implementation of

`USyncQueryProtocol.name`

## Methods

### getQueryElement()

> **getQueryElement**(): [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [lib/WAUSync/Protocols/USyncDisappearingModeProtocol.d.ts:11](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncDisappearingModeProtocol.d.ts#L11)

Defines what goes inside the query part of a USyncQuery

#### Returns

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Implementation of

`USyncQueryProtocol.getQueryElement`

***

### getUserElement()

> **getUserElement**(): `null`

Defined in: [lib/WAUSync/Protocols/USyncDisappearingModeProtocol.d.ts:12](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncDisappearingModeProtocol.d.ts#L12)

Defines what goes inside the user part of a USyncQuery

#### Returns

`null`

#### Implementation of

`USyncQueryProtocol.getUserElement`

***

### parser()

> **parser**(`node`): `undefined` \| [`DisappearingModeData`](../type-aliases/DisappearingModeData.md)

Defined in: [lib/WAUSync/Protocols/USyncDisappearingModeProtocol.d.ts:13](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncDisappearingModeProtocol.d.ts#L13)

Parse the result of the query

#### Parameters

##### node

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Returns

`undefined` \| [`DisappearingModeData`](../type-aliases/DisappearingModeData.md)

Whatever the protocol is supposed to return

#### Implementation of

`USyncQueryProtocol.parser`
