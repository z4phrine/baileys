[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / decodeMessageNode

# Function: decodeMessageNode()

> **decodeMessageNode**(`stanza`, `meId`, `meLid`): `object`

Defined in: [lib/Utils/decode-wa-message.d.ts:42](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/decode-wa-message.d.ts#L42)

Decode the received node as a message.

## Parameters

### stanza

[`BinaryNode`](../type-aliases/BinaryNode.md)

### meId

`string`

### meLid

`string`

## Returns

`object`

### author

> **author**: `string`

### fullMessage

> **fullMessage**: `IWebMessageInfo`

### sender

> **sender**: `string`

## Note

this will only parse the message, not decrypt it
