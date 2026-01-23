[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / USyncDeviceProtocol

# Class: USyncDeviceProtocol

Defined in: [lib/WAUSync/Protocols/USyncDeviceProtocol.d.ts:21](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncDeviceProtocol.d.ts#L21)

## Implements

- `USyncQueryProtocol`

## Constructors

### new USyncDeviceProtocol()

> **new USyncDeviceProtocol**(): [`USyncDeviceProtocol`](USyncDeviceProtocol.md)

#### Returns

[`USyncDeviceProtocol`](USyncDeviceProtocol.md)

## Properties

### name

> **name**: `string`

Defined in: [lib/WAUSync/Protocols/USyncDeviceProtocol.d.ts:22](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncDeviceProtocol.d.ts#L22)

The name of the protocol

#### Implementation of

`USyncQueryProtocol.name`

## Methods

### getQueryElement()

> **getQueryElement**(): [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [lib/WAUSync/Protocols/USyncDeviceProtocol.d.ts:23](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncDeviceProtocol.d.ts#L23)

Defines what goes inside the query part of a USyncQuery

#### Returns

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Implementation of

`USyncQueryProtocol.getQueryElement`

***

### getUserElement()

> **getUserElement**(): `null` \| [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [lib/WAUSync/Protocols/USyncDeviceProtocol.d.ts:24](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncDeviceProtocol.d.ts#L24)

Defines what goes inside the user part of a USyncQuery

#### Returns

`null` \| [`BinaryNode`](../type-aliases/BinaryNode.md)

#### Implementation of

`USyncQueryProtocol.getUserElement`

***

### parser()

> **parser**(`node`): [`ParsedDeviceInfo`](../type-aliases/ParsedDeviceInfo.md)

Defined in: [lib/WAUSync/Protocols/USyncDeviceProtocol.d.ts:25](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncDeviceProtocol.d.ts#L25)

Parse the result of the query

#### Parameters

##### node

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Returns

[`ParsedDeviceInfo`](../type-aliases/ParsedDeviceInfo.md)

Whatever the protocol is supposed to return

#### Implementation of

`USyncQueryProtocol.parser`
