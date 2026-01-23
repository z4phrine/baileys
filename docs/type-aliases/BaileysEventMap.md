[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / BaileysEventMap

# Type Alias: BaileysEventMap

> **BaileysEventMap**: `object`

Defined in: [lib/Types/Events.d.ts:14](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Events.d.ts#L14)

## Type declaration

#### blocklist.set

> **set**: `object`

#### blocklist.set.blocklist

> **blocklist**: `string`[]

#### blocklist.update

> **update**: `object`

#### blocklist.update.blocklist

> **blocklist**: `string`[]

#### blocklist.update.type

> **type**: `"add"` \| `"remove"`

### call

> **call**: [`WACallEvent`](WACallEvent.md)[]

Receive an update on a call, including when the call was received, rejected, accepted

#### chats.delete

> **delete**: `string`[]

delete chats with given ID

#### chats.update

> **update**: [`ChatUpdate`](ChatUpdate.md)[]

update the given chats

#### chats.upsert

> **upsert**: [`Chat`](Chat.md)[]

upsert chats

#### community-owner.update

> **update**: `object`

#### community-owner.update.author

> **author**: `string`

#### community-owner.update.id

> **id**: `string`

#### community-owner.update.new\_role

> **new\_role**: `"SUPERADMIN_MEMBER"`

#### community-owner.update.update\_time

> **update\_time**: `number`

#### community-owner.update.user

> **user**: `string`

#### connection.update

> **update**: `Partial`\<[`ConnectionState`](ConnectionState.md)\>

connection state has been updated -- WS closed, opened, connecting etc.

#### contacts.update

> **update**: `Partial`\<[`Contact`](../interfaces/Contact.md)\>[]

#### contacts.upsert

> **upsert**: [`Contact`](../interfaces/Contact.md)[]

#### creds.update

> **update**: `Partial`\<[`AuthenticationCreds`](AuthenticationCreds.md)\>

credentials updated -- some metadata, keys or something

#### group-participants.update

> **update**: `object`

apply an action to participants in a group

#### group-participants.update.action

> **action**: [`ParticipantAction`](ParticipantAction.md)

#### group-participants.update.author

> **author**: `string`

#### group-participants.update.id

> **id**: `string`

#### group-participants.update.participants

> **participants**: `string`[]

#### group.join-request

> **join-request**: `object`

#### group.join-request.action

> **action**: [`RequestJoinAction`](RequestJoinAction.md)

#### group.join-request.author

> **author**: `string`

#### group.join-request.id

> **id**: `string`

#### group.join-request.method

> **method**: [`RequestJoinMethod`](RequestJoinMethod.md)

#### group.join-request.participant

> **participant**: `string`

#### groups.update

> **update**: `Partial`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>[]

#### groups.upsert

> **upsert**: [`GroupMetadata`](../interfaces/GroupMetadata.md)[]

#### labels.association

> **association**: `object`

#### labels.association.association

> **association**: `LabelAssociation`

#### labels.association.type

> **type**: `"add"` \| `"remove"`

#### labels.edit

> **edit**: `Label`

#### lid-mapping.update

> **update**: `object`

#### lid-mapping.update.lid

> **lid**: `string`

#### lid-mapping.update.pn

> **pn**: `string`

#### limit-sharing.update

> **update**: `object`

#### limit-sharing.update.action

> **action**: `"on"` \| `"off"`

#### limit-sharing.update.author

> **author**: `string`

#### limit-sharing.update.id

> **id**: `string`

#### limit-sharing.update.trigger

> **trigger**: `proto.LimitSharing.TriggerType`

#### limit-sharing.update.update\_time

> **update\_time**: `number`

#### message-receipt.update

> **update**: [`MessageUserReceiptUpdate`](MessageUserReceiptUpdate.md)[]

#### messages.delete

> **delete**: \{ `keys`: [`WAMessageKey`](WAMessageKey.md)[]; \} \| \{ `all`: `true`; `jid`: `string`; \}

#### messages.media-update

> **media-update**: `object`[]

#### messages.reaction

> **reaction**: `object`[]

message was reacted to. If reaction was removed -- then "reaction.text" will be falsey

#### messages.update

> **update**: [`WAMessageUpdate`](WAMessageUpdate.md)[]

#### messages.upsert

> **upsert**: `object`

add/update the given messages. If they were received while the connection was online,
the update will have type: "notify"
if requestId is provided, then the messages was received from the phone due to it being unavailable

#### messages.upsert.messages

> **messages**: [`WAMessage`](WAMessage.md)[]

#### messages.upsert.requestId?

> `optional` **requestId**: `string`

#### messages.upsert.type

> **type**: [`MessageUpsertType`](MessageUpsertType.md)

#### messaging-history.set

> **set**: `object`

set chats (history sync), everything is reverse chronologically sorted

#### messaging-history.set.chats

> **chats**: [`Chat`](Chat.md)[]

#### messaging-history.set.contacts

> **contacts**: [`Contact`](../interfaces/Contact.md)[]

#### messaging-history.set.isLatest?

> `optional` **isLatest**: `boolean`

#### messaging-history.set.messages

> **messages**: [`WAMessage`](WAMessage.md)[]

#### messaging-history.set.peerDataRequestSessionId?

> `optional` **peerDataRequestSessionId**: `string` \| `null`

#### messaging-history.set.progress?

> `optional` **progress**: `number` \| `null`

#### messaging-history.set.syncType?

> `optional` **syncType**: `proto.HistorySync.HistorySyncType`

#### newsletter-participants.update

> **update**: `object`

#### newsletter-participants.update.action

> **action**: [`SubscriberAction`](SubscriberAction.md)

#### newsletter-participants.update.author

> **author**: `string`

#### newsletter-participants.update.id

> **id**: `string`

#### newsletter-participants.update.new\_role

> **new\_role**: [`NewsletterViewRole`](NewsletterViewRole.md)

#### newsletter-participants.update.user

> **user**: `string`

#### newsletter-settings.update

> **update**: `object`

#### newsletter-settings.update.id

> **id**: `string`

#### newsletter-settings.update.update

> **update**: [`NewsletterSettingsUpdate`](NewsletterSettingsUpdate.md)

#### newsletter.reaction

> **reaction**: `object`

#### newsletter.reaction.id

> **id**: `string`

#### newsletter.reaction.newsletter\_server\_id

> **newsletter\_server\_id**: `string`

#### newsletter.reaction.reaction

> **reaction**: `object`

#### newsletter.reaction.reaction.code?

> `optional` **code**: `string`

#### newsletter.reaction.reaction.count?

> `optional` **count**: `number`

#### newsletter.reaction.reaction.removed?

> `optional` **removed**: `boolean`

#### newsletter.view

> **view**: `object`

#### newsletter.view.count

> **count**: `number`

#### newsletter.view.id

> **id**: `string`

#### newsletter.view.newsletter\_server\_id

> **newsletter\_server\_id**: `string`

#### presence.update

> **update**: `object`

presence of contact in a chat updated

#### presence.update.id

> **id**: `string`

#### presence.update.presences

> **presences**: `object`

##### Index Signature

\[`participant`: `string`\]: [`PresenceData`](../interfaces/PresenceData.md)
