[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / BufferedEventData

# Type Alias: BufferedEventData

> **BufferedEventData**: `object`

Defined in: [lib/Types/Events.d.ts:154](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Events.d.ts#L154)

## Type declaration

### chatDeletes

> **chatDeletes**: `Set`\<`string`\>

### chatUpdates

> **chatUpdates**: `object`

#### Index Signature

\[`jid`: `string`\]: `any`

### chatUpserts

> **chatUpserts**: `object`

#### Index Signature

\[`jid`: `string`\]: `any`

### contactUpdates

> **contactUpdates**: `object`

#### Index Signature

\[`jid`: `string`\]: `Partial`\<[`Contact`](../interfaces/Contact.md)\>

### contactUpserts

> **contactUpserts**: `object`

#### Index Signature

\[`jid`: `string`\]: [`Contact`](../interfaces/Contact.md)

### groupUpdates

> **groupUpdates**: `object`

#### Index Signature

\[`jid`: `string`\]: `Partial`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>

### historySets

> **historySets**: `object`

#### historySets.chats

> **chats**: `object`

##### Index Signature

\[`jid`: `string`\]: `any`

#### historySets.contacts

> **contacts**: `object`

##### Index Signature

\[`jid`: `string`\]: [`Contact`](../interfaces/Contact.md)

#### historySets.empty

> **empty**: `boolean`

#### historySets.isLatest

> **isLatest**: `boolean`

#### historySets.messages

> **messages**: `object`

##### Index Signature

\[`uqId`: `string`\]: `IWebMessageInfo`

#### historySets.peerDataRequestSessionId?

> `optional` **peerDataRequestSessionId**: `string`

#### historySets.progress?

> `optional` **progress**: `number` \| `null`

#### historySets.syncType?

> `optional` **syncType**: `proto.HistorySync.HistorySyncType`

### messageDeletes

> **messageDeletes**: `object`

#### Index Signature

\[`key`: `string`\]: `any`

### messageReactions

> **messageReactions**: `object`

#### Index Signature

\[`key`: `string`\]: `object`

### messageReceipts

> **messageReceipts**: `object`

#### Index Signature

\[`key`: `string`\]: `object`

### messageUpdates

> **messageUpdates**: `object`

#### Index Signature

\[`key`: `string`\]: [`WAMessageUpdate`](WAMessageUpdate.md)

### messageUpserts

> **messageUpserts**: `object`

#### Index Signature

\[`key`: `string`\]: `object`
