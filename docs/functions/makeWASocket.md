[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / makeWASocket

# Function: makeWASocket()

> **makeWASocket**(`config`): `object`

Defined in: [lib/Socket/index.d.ts:3](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Socket/index.d.ts#L3)

## Parameters

### config

[`UserFacingSocketConfig`](../type-aliases/UserFacingSocketConfig.md)

## Returns

`object`

### addChatLabel()

> **addChatLabel**: (`jid`, `labelId`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### labelId

`string`

#### Returns

`Promise`\<`void`\>

### addLabel()

> **addLabel**: (`jid`, `labels`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### labels

`LabelActionBody`

#### Returns

`Promise`\<`void`\>

### addMessageLabel()

> **addMessageLabel**: (`jid`, `messageId`, `labelId`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### messageId

`string`

##### labelId

`string`

#### Returns

`Promise`\<`void`\>

### addOrEditContact()

> **addOrEditContact**: (`jid`, `contact`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### contact

`ContactAction`

#### Returns

`Promise`\<`void`\>

### addOrEditQuickReply()

> **addOrEditQuickReply**: (`quickReply`) => `Promise`\<`void`\>

#### Parameters

##### quickReply

`any`

#### Returns

`Promise`\<`void`\>

### appPatch()

> **appPatch**: (`patchCreate`) => `Promise`\<`void`\>

#### Parameters

##### patchCreate

[`WAPatchCreate`](../type-aliases/WAPatchCreate.md)

#### Returns

`Promise`\<`void`\>

### assertSessions()

> **assertSessions**: (`jids`, `force`) => `Promise`\<`boolean`\>

#### Parameters

##### jids

`string`[]

##### force

`boolean`

#### Returns

`Promise`\<`boolean`\>

### authState

> **authState**: `object`

#### authState.creds

> **creds**: [`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md)

#### authState.keys

> **keys**: [`SignalKeyStoreWithTransaction`](../type-aliases/SignalKeyStoreWithTransaction.md)

### chatModify()

> **chatModify**: (`mod`, `jid`) => `Promise`\<`void`\>

#### Parameters

##### mod

[`ChatModification`](../type-aliases/ChatModification.md)

##### jid

`string`

#### Returns

`Promise`\<`void`\>

### cleanDirtyBits()

> **cleanDirtyBits**: (`type`, `fromTimestamp`?) => `Promise`\<`void`\>

#### Parameters

##### type

`"account_sync"` | `"groups"`

##### fromTimestamp?

`string` | `number`

#### Returns

`Promise`\<`void`\>

### clearMessage()

> **clearMessage**: (`jid`, `key`, `timeStamp`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### key

`any`

##### timeStamp

`any`

#### Returns

`Promise`\<`void`\>

### createCallLink()

> **createCallLink**: (`type`, `event`?, `timeoutMs`?) => `Promise`\<`void`\>

#### Parameters

##### type

`"audio"` | `"video"`

##### event?

`number`

##### timeoutMs?

`number`

#### Returns

`Promise`\<`void`\>

### createParticipantNodes()

> **createParticipantNodes**: (`jids`, `message`, `extraAttrs`?) => `Promise`\<\{ `nodes`: [`BinaryNode`](../type-aliases/BinaryNode.md)[]; `shouldIncludeDeviceIdentity`: `boolean`; \}\>

#### Parameters

##### jids

`string`[]

##### message

`any`

##### extraAttrs?

#### Returns

`Promise`\<\{ `nodes`: [`BinaryNode`](../type-aliases/BinaryNode.md)[]; `shouldIncludeDeviceIdentity`: `boolean`; \}\>

### end()

> **end**: (`error`) => `void`

#### Parameters

##### error

`undefined` | `Error`

#### Returns

`void`

### ev

> **ev**: [`BaileysEventEmitter`](../interfaces/BaileysEventEmitter.md) & `object`

#### Type declaration

##### buffer()

###### Returns

`void`

##### createBufferedFunction()

###### Type Parameters

• **A** *extends* `any`[]

• **T_1**

###### Parameters

###### work

(...`args`) => `Promise`\<`T_1`\>

###### Returns

`Function`

###### Parameters

###### args

...`A`

###### Returns

`Promise`\<`T_1`\>

##### flush()

###### Parameters

###### force?

`boolean`

###### Returns

`boolean`

##### isBuffering()

###### Returns

`boolean`

##### process()

###### Parameters

###### handler

(`events`) => `void` \| `Promise`\<`void`\>

###### Returns

`Function`

###### Returns

`void`

### executeUSyncQuery()

> **executeUSyncQuery**: (`usyncQuery`) => `Promise`\<`undefined` \| [`USyncQueryResult`](../type-aliases/USyncQueryResult.md)\>

#### Parameters

##### usyncQuery

[`USyncQuery`](../classes/USyncQuery.md)

#### Returns

`Promise`\<`undefined` \| [`USyncQueryResult`](../type-aliases/USyncQueryResult.md)\>

### fetchBlocklist()

> **fetchBlocklist**: () => `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

### fetchDisappearingDuration()

> **fetchDisappearingDuration**: (...`jids`) => `Promise`\<`undefined` \| [`USyncQueryResultList`](../type-aliases/USyncQueryResultList.md)[]\>

#### Parameters

##### jids

...`string`[]

#### Returns

`Promise`\<`undefined` \| [`USyncQueryResultList`](../type-aliases/USyncQueryResultList.md)[]\>

### fetchMessageHistory()

> **fetchMessageHistory**: (`count`, `oldestMsgKey`, `oldestMsgTimestamp`) => `Promise`\<`string`\>

#### Parameters

##### count

`number`

##### oldestMsgKey

`any`

##### oldestMsgTimestamp

`any`

#### Returns

`Promise`\<`string`\>

### fetchPrivacySettings()

> **fetchPrivacySettings**: (`force`?) => `Promise`\<\{\}\>

#### Parameters

##### force?

`boolean`

#### Returns

`Promise`\<\{\}\>

### fetchStatus()

> **fetchStatus**: (...`jids`) => `Promise`\<`undefined` \| [`USyncQueryResultList`](../type-aliases/USyncQueryResultList.md)[]\>

#### Parameters

##### jids

...`string`[]

#### Returns

`Promise`\<`undefined` \| [`USyncQueryResultList`](../type-aliases/USyncQueryResultList.md)[]\>

### generateMessageTag()

> **generateMessageTag**: () => `string`

#### Returns

`string`

### getBotListV2()

> **getBotListV2**: () => `Promise`\<`BotListInfo`[]\>

#### Returns

`Promise`\<`BotListInfo`[]\>

### getBusinessProfile()

> **getBusinessProfile**: (`jid`) => `Promise`\<`void` \| [`WABusinessProfile`](../type-aliases/WABusinessProfile.md)\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`void` \| [`WABusinessProfile`](../type-aliases/WABusinessProfile.md)\>

### getCatalog()

> **getCatalog**: (`__namedParameters`) => `Promise`\<\{ `nextPageCursor`: `undefined` \| `string`; `products`: [`Product`](../type-aliases/Product.md)[]; \}\>

#### Parameters

##### \_\_namedParameters

[`GetCatalogOptions`](../type-aliases/GetCatalogOptions.md)

#### Returns

`Promise`\<\{ `nextPageCursor`: `undefined` \| `string`; `products`: [`Product`](../type-aliases/Product.md)[]; \}\>

### getCollections()

> **getCollections**: (`jid`?, `limit`?) => `Promise`\<\{ `collections`: [`CatalogCollection`](../type-aliases/CatalogCollection.md)[]; \}\>

#### Parameters

##### jid?

`string`

##### limit?

`number`

#### Returns

`Promise`\<\{ `collections`: [`CatalogCollection`](../type-aliases/CatalogCollection.md)[]; \}\>

### getEphemeralGroup()

> **getEphemeralGroup**: (`jid`) => `Promise`\<`number`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`number`\>

### getLidUser()

> **getLidUser**: (`jid`) => `Promise`\<`undefined` \| `object`[]\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`undefined` \| `object`[]\>

### getOrderDetails()

> **getOrderDetails**: (`orderId`, `tokenBase64`) => `Promise`\<[`OrderDetails`](../type-aliases/OrderDetails.md)\>

#### Parameters

##### orderId

`string`

##### tokenBase64

`string`

#### Returns

`Promise`\<[`OrderDetails`](../type-aliases/OrderDetails.md)\>

### getPrivacyTokens()

> **getPrivacyTokens**: (`jids`) => `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>

#### Parameters

##### jids

`string`[]

#### Returns

`Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>

### getUSyncDevices()

> **getUSyncDevices**: (`jids`, `useCache`, `ignoreZeroDevices`) => `Promise`\<[`JidWithDevice`](../type-aliases/JidWithDevice.md)[]\>

#### Parameters

##### jids

`string`[]

##### useCache

`boolean`

##### ignoreZeroDevices

`boolean`

#### Returns

`Promise`\<[`JidWithDevice`](../type-aliases/JidWithDevice.md)[]\>

### groupAcceptInvite()

> **groupAcceptInvite**: (`code`) => `Promise`\<`undefined` \| `string`\>

#### Parameters

##### code

`string`

#### Returns

`Promise`\<`undefined` \| `string`\>

### groupAcceptInviteV4()

> **groupAcceptInviteV4**: (`key`, `inviteMessage`) => `Promise`\<`string`\>

#### Parameters

##### key

`any`

##### inviteMessage

`any`

#### Returns

`Promise`\<`string`\>

### groupCreate()

> **groupCreate**: (`subject`, `participants`) => `Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>

#### Parameters

##### subject

`string`

##### participants

`string`[]

#### Returns

`Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>

### groupFetchAllParticipating()

> **groupFetchAllParticipating**: () => `Promise`\<\{\}\>

#### Returns

`Promise`\<\{\}\>

### groupGetInviteInfo()

> **groupGetInviteInfo**: (`code`) => `Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>

#### Parameters

##### code

`string`

#### Returns

`Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>

### groupInviteCode()

> **groupInviteCode**: (`jid`) => `Promise`\<`undefined` \| `string`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`undefined` \| `string`\>

### groupJoinApprovalMode()

> **groupJoinApprovalMode**: (`jid`, `mode`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### mode

`"on"` | `"off"`

#### Returns

`Promise`\<`void`\>

### groupLeave()

> **groupLeave**: (`id`) => `Promise`\<`void`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

### groupMemberAddMode()

> **groupMemberAddMode**: (`jid`, `mode`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### mode

`"all_member_add"` | `"admin_add"`

#### Returns

`Promise`\<`void`\>

### groupMetadata()

> **groupMetadata**: (`jid`) => `Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>

### groupParticipantsUpdate()

> **groupParticipantsUpdate**: (`jid`, `participants`, `action`) => `Promise`\<`object`[]\>

#### Parameters

##### jid

`string`

##### participants

`string`[]

##### action

[`ParticipantAction`](../type-aliases/ParticipantAction.md)

#### Returns

`Promise`\<`object`[]\>

### groupQuery()

> **groupQuery**: (`jid`, `type`, `content`) => `Promise`\<`BinaryNode`\>

#### Parameters

##### jid

`string`

##### type

`string`

##### content

`BinaryNode`

#### Returns

`Promise`\<`BinaryNode`\>

### groupRequestParticipantsList()

> **groupRequestParticipantsList**: (`jid`) => `Promise`\<`object`[]\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`object`[]\>

### groupRequestParticipantsUpdate()

> **groupRequestParticipantsUpdate**: (`jid`, `participants`, `action`) => `Promise`\<`object`[]\>

#### Parameters

##### jid

`string`

##### participants

`string`[]

##### action

`"reject"` | `"approve"`

#### Returns

`Promise`\<`object`[]\>

### groupRevokeInvite()

> **groupRevokeInvite**: (`jid`) => `Promise`\<`undefined` \| `string`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`undefined` \| `string`\>

### groupRevokeInviteV4()

> **groupRevokeInviteV4**: (`groupJid`, `invitedJid`) => `Promise`\<`boolean`\>

#### Parameters

##### groupJid

`string`

##### invitedJid

`string`

#### Returns

`Promise`\<`boolean`\>

### groupSettingUpdate()

> **groupSettingUpdate**: (`jid`, `setting`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### setting

`"announcement"` | `"locked"` | `"not_announcement"` | `"unlocked"`

#### Returns

`Promise`\<`void`\>

### groupToggleEphemeral()

> **groupToggleEphemeral**: (`jid`, `ephemeralExpiration`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### ephemeralExpiration

`number`

#### Returns

`Promise`\<`void`\>

### groupUpdateDescription()

> **groupUpdateDescription**: (`jid`, `description`?) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### description?

`string`

#### Returns

`Promise`\<`void`\>

### groupUpdateSubject()

> **groupUpdateSubject**: (`jid`, `subject`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### subject

`string`

#### Returns

`Promise`\<`void`\>

### logger

> **logger**: `ILogger`

### logout()

> **logout**: (`msg`?) => `Promise`\<`void`\>

#### Parameters

##### msg?

`string`

#### Returns

`Promise`\<`void`\>

### newsletterAdminCount()

> **newsletterAdminCount**: (`jid`) => `Promise`\<`number`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`number`\>

### newsletterChangeOwner()

> **newsletterChangeOwner**: (`jid`, `userLid`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### userLid

`string`

#### Returns

`Promise`\<`void`\>

### newsletterCreate()

> **newsletterCreate**: (`name`, `description`?, `picture`?) => `Promise`\<[`NewsletterMetadata`](../type-aliases/NewsletterMetadata.md)\>

#### Parameters

##### name

`string`

##### description?

`string`

##### picture?

[`WAMediaUpload`](../type-aliases/WAMediaUpload.md)

#### Returns

`Promise`\<[`NewsletterMetadata`](../type-aliases/NewsletterMetadata.md)\>

### newsletterDelete()

> **newsletterDelete**: (`jid`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`void`\>

### newsletterDemote()

> **newsletterDemote**: (`jid`, `userLid`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### userLid

`string`

#### Returns

`Promise`\<`void`\>

### newsletterFetchAllParticipating()

> **newsletterFetchAllParticipating**: () => `Promise`\<\{\}\>

#### Returns

`Promise`\<\{\}\>

### newsletterFetchMessages()

> **newsletterFetchMessages**: (`type`, `key`, `count`, `after`?) => `Promise`\<[`NewsletterFetchedUpdate`](../type-aliases/NewsletterFetchedUpdate.md)[]\>

#### Parameters

##### type

`"invite"` | `"jid"`

##### key

`string`

##### count

`number`

##### after?

`number`

#### Returns

`Promise`\<[`NewsletterFetchedUpdate`](../type-aliases/NewsletterFetchedUpdate.md)[]\>

### newsletterFetchUpdates()

> **newsletterFetchUpdates**: (`jid`, `count`, `after`?, `since`?) => `Promise`\<[`NewsletterFetchedUpdate`](../type-aliases/NewsletterFetchedUpdate.md)[]\>

#### Parameters

##### jid

`string`

##### count

`number`

##### after?

`number`

##### since?

`number`

#### Returns

`Promise`\<[`NewsletterFetchedUpdate`](../type-aliases/NewsletterFetchedUpdate.md)[]\>

### newsletterFollow()

> **newsletterFollow**: (`jid`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`void`\>

### newsletterMetadata()

> **newsletterMetadata**: (`type`, `key`, `role`?) => `Promise`\<[`NewsletterMetadata`](../type-aliases/NewsletterMetadata.md)\>

#### Parameters

##### type

`"invite"` | `"jid"`

##### key

`string`

##### role?

[`NewsletterViewRole`](../type-aliases/NewsletterViewRole.md)

#### Returns

`Promise`\<[`NewsletterMetadata`](../type-aliases/NewsletterMetadata.md)\>

### newsletterMute()

> **newsletterMute**: (`jid`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`void`\>

### newsletterQuery()

> **newsletterQuery**: (`jid`, `type`, `content`) => `Promise`\<`BinaryNode`\>

#### Parameters

##### jid

`string`

##### type

`string`

##### content

`BinaryNode`

#### Returns

`Promise`\<`BinaryNode`\>

### newsletterReactionMode()

> **newsletterReactionMode**: (`jid`, `mode`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### mode

[`NewsletterReactionMode`](../type-aliases/NewsletterReactionMode.md)

#### Returns

`Promise`\<`void`\>

### newsletterReactMessage()

> **newsletterReactMessage**: (`jid`, `server_id`, `code`?) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### server\_id

`string`

##### code?

`string`

#### Returns

`Promise`\<`void`\>

### newsletterRemovePicture()

> **newsletterRemovePicture**: (`jid`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`void`\>

### newsletterUnfollow()

> **newsletterUnfollow**: (`jid`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`void`\>

### newsletterUnmute()

> **newsletterUnmute**: (`jid`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`void`\>

### newsletterUpdateDescription()

> **newsletterUpdateDescription**: (`jid`, `description`?) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### description?

`string`

#### Returns

`Promise`\<`void`\>

### newsletterUpdateName()

> **newsletterUpdateName**: (`jid`, `name`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### name

`string`

#### Returns

`Promise`\<`void`\>

### newsletterUpdatePicture()

> **newsletterUpdatePicture**: (`jid`, `content`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### content

[`WAMediaUpload`](../type-aliases/WAMediaUpload.md)

#### Returns

`Promise`\<`void`\>

### newsletterWMexQuery()

> **newsletterWMexQuery**: (`jid`?, `query_id`, `content`) => `Promise`\<`BinaryNode`\>

#### Parameters

##### jid?

`string`

##### query\_id?

`number`

##### content?

`BinaryNode`

#### Returns

`Promise`\<`BinaryNode`\>

### offerCall()

> **offerCall**: (`toJid`, `isVideo`?) => `Promise`\<\{ `id`: `any`; `to`: `string`; \}\>

#### Parameters

##### toJid

`string`

##### isVideo?

`boolean`

#### Returns

`Promise`\<\{ `id`: `any`; `to`: `string`; \}\>

### onUnexpectedError()

> **onUnexpectedError**: (`err`, `msg`) => `void`

#### Parameters

##### err

`Error` | `Boom`\<`any`\>

##### msg

`string`

#### Returns

`void`

### presenceSubscribe()

> **presenceSubscribe**: (`toJid`, `tcToken`?) => `Promise`\<`void`\>

#### Parameters

##### toJid

`string`

##### tcToken?

`Buffer`\<`ArrayBufferLike`\>

#### Returns

`Promise`\<`void`\>

### processingMutex

> **processingMutex**: `object`

#### processingMutex.mutex()

##### Type Parameters

• **T**

##### Parameters

###### code

() => `T` \| `Promise`\<`T`\>

##### Returns

`Promise`\<`T`\>

### productCreate()

> **productCreate**: (`create`) => `Promise`\<[`Product`](../type-aliases/Product.md)\>

#### Parameters

##### create

[`ProductCreate`](../type-aliases/ProductCreate.md)

#### Returns

`Promise`\<[`Product`](../type-aliases/Product.md)\>

### productDelete()

> **productDelete**: (`productIds`) => `Promise`\<\{ `deleted`: `number`; \}\>

#### Parameters

##### productIds

`string`[]

#### Returns

`Promise`\<\{ `deleted`: `number`; \}\>

### productUpdate()

> **productUpdate**: (`productId`, `update`) => `Promise`\<[`Product`](../type-aliases/Product.md)\>

#### Parameters

##### productId

`string`

##### update

[`ProductUpdate`](../type-aliases/ProductUpdate.md)

#### Returns

`Promise`\<[`Product`](../type-aliases/Product.md)\>

### profilePictureUrl()

> **profilePictureUrl**: (`jids`) => `Promise`\<`string`\>

#### Parameters

##### jids

`string`

#### Returns

`Promise`\<`string`\>

### query()

> **query**: (`node`, `timeoutMs`?) => `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>

#### Parameters

##### node

[`BinaryNode`](../type-aliases/BinaryNode.md)

##### timeoutMs?

`number`

#### Returns

`Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>

### readMessages()

> **readMessages**: (`keys`) => `Promise`\<`void`\>

#### Parameters

##### keys

`any`[]

#### Returns

`Promise`\<`void`\>

### refreshMediaConn()

> **refreshMediaConn**: (`forceGet`?) => `Promise`\<[`MediaConnInfo`](../type-aliases/MediaConnInfo.md)\>

#### Parameters

##### forceGet?

`boolean`

#### Returns

`Promise`\<[`MediaConnInfo`](../type-aliases/MediaConnInfo.md)\>

### rejectCall()

> **rejectCall**: (`callId`, `callFrom`) => `Promise`\<`void`\>

#### Parameters

##### callId

`string`

##### callFrom

`string`

#### Returns

`Promise`\<`void`\>

### relayMessage()

> **relayMessage**: (`jid`, `message`, `__namedParameters`) => `Promise`\<`string`\>

#### Parameters

##### jid

`string`

##### message

`any`

##### \_\_namedParameters

[`MessageRelayOptions`](../type-aliases/MessageRelayOptions.md)

#### Returns

`Promise`\<`string`\>

### removeChatLabel()

> **removeChatLabel**: (`jid`, `labelId`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### labelId

`string`

#### Returns

`Promise`\<`void`\>

### removeContact()

> **removeContact**: (`jid`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`void`\>

### removeCoverPhoto()

> **removeCoverPhoto**: (`id`) => `Promise`\<`any`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`any`\>

### removeMessageLabel()

> **removeMessageLabel**: (`jid`, `messageId`, `labelId`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### messageId

`string`

##### labelId

`string`

#### Returns

`Promise`\<`void`\>

### removeProfilePicture()

> **removeProfilePicture**: (`jid`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`void`\>

### removeQuickReply()

> **removeQuickReply**: (`timestamp`) => `Promise`\<`void`\>

#### Parameters

##### timestamp

`string`

#### Returns

`Promise`\<`void`\>

### requestPairingCode()

> **requestPairingCode**: (`phoneNumber`, `code`?) => `Promise`\<`string`\>

#### Parameters

##### phoneNumber

`string`

##### code?

`string`

#### Returns

`Promise`\<`string`\>

### requestPlaceholderResend()

> **requestPlaceholderResend**: (`messageKey`) => `Promise`\<`undefined` \| `string`\>

#### Parameters

##### messageKey

`any`

#### Returns

`Promise`\<`undefined` \| `string`\>

### resyncAppState()

> **resyncAppState**: (`collections`, `isInitialSync`) => `Promise`\<`void`\>

#### Parameters

##### collections

readonly (`"critical_block"` \| `"critical_unblock_low"` \| `"regular_high"` \| `"regular_low"` \| `"regular"`)[]

##### isInitialSync

`boolean`

#### Returns

`Promise`\<`void`\>

### sendMessage()

> **sendMessage**: (`jid`, `content`, `options`?) => `Promise`\<`any`\>

#### Parameters

##### jid

`string`

##### content

[`AnyMessageContent`](../type-aliases/AnyMessageContent.md)

##### options?

[`MiscMessageGenerationOptions`](../type-aliases/MiscMessageGenerationOptions.md)

#### Returns

`Promise`\<`any`\>

### sendMessageAck()

> **sendMessageAck**: (`__namedParameters`, `errorCode`?) => `Promise`\<`void`\>

#### Parameters

##### \_\_namedParameters

[`BinaryNode`](../type-aliases/BinaryNode.md)

##### errorCode?

`number`

#### Returns

`Promise`\<`void`\>

### sendNode()

> **sendNode**: (`frame`) => `Promise`\<`void`\>

#### Parameters

##### frame

[`BinaryNode`](../type-aliases/BinaryNode.md)

#### Returns

`Promise`\<`void`\>

### sendPeerDataOperationMessage()

> **sendPeerDataOperationMessage**: (`pdoMessage`) => `Promise`\<`string`\>

#### Parameters

##### pdoMessage

`any`

#### Returns

`Promise`\<`string`\>

### sendPresenceUpdate()

> **sendPresenceUpdate**: (`type`, `toJid`?) => `Promise`\<`void`\>

#### Parameters

##### type

[`WAPresence`](../type-aliases/WAPresence.md)

##### toJid?

`string`

#### Returns

`Promise`\<`void`\>

### sendRawMessage()

> **sendRawMessage**: (`data`) => `Promise`\<`void`\>

#### Parameters

##### data

`Buffer`\<`ArrayBufferLike`\> | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`Promise`\<`void`\>

### sendReceipt()

> **sendReceipt**: (`jid`, `participant`, `messageIds`, `type`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### participant

`undefined` | `string`

##### messageIds

`string`[]

##### type

[`MessageReceiptType`](../type-aliases/MessageReceiptType.md)

#### Returns

`Promise`\<`void`\>

### sendReceipts()

> **sendReceipts**: (`keys`, `type`) => `Promise`\<`void`\>

#### Parameters

##### keys

`any`[]

##### type

[`MessageReceiptType`](../type-aliases/MessageReceiptType.md)

#### Returns

`Promise`\<`void`\>

### sendRetryRequest()

> **sendRetryRequest**: (`node`, `forceIncludeKeys`?) => `Promise`\<`void`\>

#### Parameters

##### node

[`BinaryNode`](../type-aliases/BinaryNode.md)

##### forceIncludeKeys?

`boolean`

#### Returns

`Promise`\<`void`\>

### sendStatusMentions()

> **sendStatusMentions**: (`content`, `jid`, `Private`?) => `Promise`\<`string`\>

#### Parameters

##### content

`any`

##### jid

`string`

##### Private?

`boolean`

#### Returns

`Promise`\<`string`\>

### sendWAMBuffer()

> **sendWAMBuffer**: (`wamBuffer`) => `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>

#### Parameters

##### wamBuffer

`Buffer`

#### Returns

`Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>

### signalRepository

> **signalRepository**: [`SignalRepository`](../type-aliases/SignalRepository.md)

### star()

> **star**: (`jid`, `messages`, `star`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### messages

`object`[]

##### star

`boolean`

#### Returns

`Promise`\<`void`\>

### subscribeNewsletterUpdates()

> **subscribeNewsletterUpdates**: (`jid`) => `Promise`\<\{ `duration`: `string`; \}\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<\{ `duration`: `string`; \}\>

### type

> **type**: `"md"`

### updateBlockStatus()

> **updateBlockStatus**: (`jid`, `action`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### action

`"block"` | `"unblock"`

#### Returns

`Promise`\<`void`\>

### updateBussinesProfile()

> **updateBussinesProfile**: (`args`) => `Promise`\<`any`\>

#### Parameters

##### args

`any`

#### Returns

`Promise`\<`any`\>

### updateCallPrivacy()

> **updateCallPrivacy**: (`value`) => `Promise`\<`void`\>

#### Parameters

##### value

[`WAPrivacyCallValue`](../type-aliases/WAPrivacyCallValue.md)

#### Returns

`Promise`\<`void`\>

### updateCoverPhoto()

> **updateCoverPhoto**: (`photo`) => `Promise`\<`number`\>

#### Parameters

##### photo

[`WAMediaUpload`](../type-aliases/WAMediaUpload.md)

#### Returns

`Promise`\<`number`\>

### updateDefaultDisappearingMode()

> **updateDefaultDisappearingMode**: (`duration`) => `Promise`\<`void`\>

#### Parameters

##### duration

`number`

#### Returns

`Promise`\<`void`\>

### updateDisableLinkPreviewsPrivacy()

> **updateDisableLinkPreviewsPrivacy**: (`isPreviewsDisabled`) => `Promise`\<`void`\>

#### Parameters

##### isPreviewsDisabled

`boolean`

#### Returns

`Promise`\<`void`\>

### updateGroupsAddPrivacy()

> **updateGroupsAddPrivacy**: (`value`) => `Promise`\<`void`\>

#### Parameters

##### value

[`WAPrivacyGroupAddValue`](../type-aliases/WAPrivacyGroupAddValue.md)

#### Returns

`Promise`\<`void`\>

### updateLastSeenPrivacy()

> **updateLastSeenPrivacy**: (`value`) => `Promise`\<`void`\>

#### Parameters

##### value

[`WAPrivacyValue`](../type-aliases/WAPrivacyValue.md)

#### Returns

`Promise`\<`void`\>

### updateMediaMessage()

> **updateMediaMessage**: (`message`) => `Promise`\<`any`\>

#### Parameters

##### message

`any`

#### Returns

`Promise`\<`any`\>

### updateOnlinePrivacy()

> **updateOnlinePrivacy**: (`value`) => `Promise`\<`void`\>

#### Parameters

##### value

[`WAPrivacyOnlineValue`](../type-aliases/WAPrivacyOnlineValue.md)

#### Returns

`Promise`\<`void`\>

### updateProfileName()

> **updateProfileName**: (`name`) => `Promise`\<`void`\>

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`void`\>

### updateProfilePicture()

> **updateProfilePicture**: (`jid`, `content`) => `Promise`\<`void`\>

#### Parameters

##### jid

`string`

##### content

[`WAMediaUpload`](../type-aliases/WAMediaUpload.md)

#### Returns

`Promise`\<`void`\>

### updateProfilePicturePrivacy()

> **updateProfilePicturePrivacy**: (`value`) => `Promise`\<`void`\>

#### Parameters

##### value

[`WAPrivacyValue`](../type-aliases/WAPrivacyValue.md)

#### Returns

`Promise`\<`void`\>

### updateProfileStatus()

> **updateProfileStatus**: (`status`) => `Promise`\<`void`\>

#### Parameters

##### status

`string`

#### Returns

`Promise`\<`void`\>

### updateReadReceiptsPrivacy()

> **updateReadReceiptsPrivacy**: (`value`) => `Promise`\<`void`\>

#### Parameters

##### value

[`WAReadReceiptsValue`](../type-aliases/WAReadReceiptsValue.md)

#### Returns

`Promise`\<`void`\>

### updateStatusPrivacy()

> **updateStatusPrivacy**: (`value`) => `Promise`\<`void`\>

#### Parameters

##### value

[`WAPrivacyValue`](../type-aliases/WAPrivacyValue.md)

#### Returns

`Promise`\<`void`\>

### uploadPreKeys()

> **uploadPreKeys**: (`count`?) => `Promise`\<`void`\>

#### Parameters

##### count?

`number`

#### Returns

`Promise`\<`void`\>

### uploadPreKeysToServerIfRequired()

> **uploadPreKeysToServerIfRequired**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

### upsertMessage()

> **upsertMessage**: (`msg`, `type`) => `Promise`\<`void`\>

#### Parameters

##### msg

`any`

##### type

[`MessageUpsertType`](../type-aliases/MessageUpsertType.md)

#### Returns

`Promise`\<`void`\>

### user

> **user**: `undefined` \| [`Contact`](../interfaces/Contact.md)

### waitForConnectionUpdate()

> **waitForConnectionUpdate**: (`check`, `timeoutMs`?) => `Promise`\<`void`\>

#### Parameters

##### check

(`u`) => `undefined` \| `boolean`

##### timeoutMs?

`number`

#### Returns

`Promise`\<`void`\>

### waitForMessage()

> **waitForMessage**: \<`T_2`\>(`msgId`, `timeoutMs`?) => `Promise`\<`T_2`\>

#### Type Parameters

• **T_2**

#### Parameters

##### msgId

`string`

##### timeoutMs?

`number`

#### Returns

`Promise`\<`T_2`\>

### waitForSocketOpen()

> **waitForSocketOpen**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

### waUploadToServer

> **waUploadToServer**: [`WAMediaUploadFunction`](../type-aliases/WAMediaUploadFunction.md)

### ws

> **ws**: `WebSocketClient`
