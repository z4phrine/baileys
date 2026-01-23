[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / readAndEmitEventStream

# Function: readAndEmitEventStream()

> **readAndEmitEventStream**(`filename`, `delayIntervalMs`?): `object`

Defined in: [lib/Utils/baileys-event-stream.d.ts:15](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/baileys-event-stream.d.ts#L15)

Read event file and emit events from there

## Parameters

### filename

`string`

filename containing event data

### delayIntervalMs?

`number`

delay between each event emit

## Returns

`object`

### ev

> **ev**: [`BaileysEventEmitter`](../interfaces/BaileysEventEmitter.md)

### task

> **task**: `Promise`\<`void`\>
