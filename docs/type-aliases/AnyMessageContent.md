[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / AnyMessageContent

# Type Alias: AnyMessageContent

> **AnyMessageContent**: [`AnyRegularMessageContent`](AnyRegularMessageContent.md) \| \{ `force`: `boolean`; `forward`: [`WAMessage`](WAMessage.md); \} \| \{ `delete`: [`WAMessageKey`](WAMessageKey.md); \} \| \{ `disappearingMessagesInChat`: `boolean` \| `number`; \}

Defined in: [lib/Types/Message.d.ts:354](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Message.d.ts#L354)

## Type declaration

[`AnyRegularMessageContent`](AnyRegularMessageContent.md)

\{ `force`: `boolean`; `forward`: [`WAMessage`](WAMessage.md); \}

### force?

> `optional` **force**: `boolean`

### forward

> **forward**: [`WAMessage`](WAMessage.md)

\{ `delete`: [`WAMessageKey`](WAMessageKey.md); \}

### delete

> **delete**: [`WAMessageKey`](WAMessageKey.md)

Delete your message or anyone's message in a group (admin required)

\{ `disappearingMessagesInChat`: `boolean` \| `number`; \}

### disappearingMessagesInChat

> **disappearingMessagesInChat**: `boolean` \| `number`
