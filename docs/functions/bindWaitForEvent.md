[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / bindWaitForEvent

# Function: bindWaitForEvent()

> **bindWaitForEvent**\<`T`\>(`ev`, `event`): (`check`, `timeoutMs`?) => `Promise`\<`void`\>

Defined in: [lib/Utils/generics.d.ts:57](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/generics.d.ts#L57)

## Type Parameters

• **T** *extends* keyof [`BaileysEventMap`](../type-aliases/BaileysEventMap.md)

## Parameters

### ev

[`BaileysEventEmitter`](../interfaces/BaileysEventEmitter.md)

### event

`T`

## Returns

`Function`

### Parameters

#### check

(`u`) => `undefined` \| `boolean`

#### timeoutMs?

`number`

### Returns

`Promise`\<`void`\>
