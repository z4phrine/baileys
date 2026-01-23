[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / USyncBotProfileProtocol

# Class: USyncBotProfileProtocol

Defined in: [lib/WAUSync/Protocols/USyncBotProfileProtocol.d.ts:23](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncBotProfileProtocol.d.ts#L23)

## Implements

- `USyncQueryProtocol`

## Constructors

### new USyncBotProfileProtocol()

> **new USyncBotProfileProtocol**(): [`USyncBotProfileProtocol`](USyncBotProfileProtocol.md)

#### Returns

[`USyncBotProfileProtocol`](USyncBotProfileProtocol.md)

## Properties

### name

> **name**: `string`

Defined in: [lib/WAUSync/Protocols/USyncBotProfileProtocol.d.ts:24](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncBotProfileProtocol.d.ts#L24)

The name of the protocol

#### Implementation of

`USyncQueryProtocol.name`

## Methods

### getQueryElement()

> **getQueryElement**(): [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [lib/WAUSync/Protocols/USyncBotProfileProtocol.d.ts:25](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncBotProfileProtocol.d.ts#L25)

Defines what goes inside the query part of a USyncQuery

#### Returns

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Implementation of

`USyncQueryProtocol.getQueryElement`

***

### getUserElement()

> **getUserElement**(`user`): [`BinaryNode`](../type-aliases/BinaryNode.md)

Defined in: [lib/WAUSync/Protocols/USyncBotProfileProtocol.d.ts:26](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncBotProfileProtocol.d.ts#L26)

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

> **parser**(`node`): `undefined` \| [`BotProfileInfo`](../type-aliases/BotProfileInfo.md)

Defined in: [lib/WAUSync/Protocols/USyncBotProfileProtocol.d.ts:27](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/WAUSync/Protocols/USyncBotProfileProtocol.d.ts#L27)

Parse the result of the query

#### Parameters

##### node

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Returns

`undefined` \| [`BotProfileInfo`](../type-aliases/BotProfileInfo.md)

Whatever the protocol is supposed to return

#### Implementation of

`USyncQueryProtocol.parser`
