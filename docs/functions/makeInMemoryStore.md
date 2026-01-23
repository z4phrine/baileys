[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / makeInMemoryStore

# Function: makeInMemoryStore()

> **makeInMemoryStore**(`config`): `object`

Defined in: [lib/Store/make-in-memory-store.d.ts:29](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/make-in-memory-store.d.ts#L29)

## Parameters

### config

[`BaileysInMemoryStoreConfig`](../type-aliases/BaileysInMemoryStoreConfig.md)

## Returns

`object`

### bind()

> **bind**: (`ev`) => `void`

#### Parameters

##### ev

[`BaileysEventEmitter`](../interfaces/BaileysEventEmitter.md)

#### Returns

`void`

### chats

> **chats**: `KeyedDB`\<`any`, `string`\>

### contacts

> **contacts**: `object`

#### Index Signature

\[`_`: `string`\]: [`Contact`](../interfaces/Contact.md)

### fetchGroupMetadata()

> **fetchGroupMetadata**: (`jid`, `suki`) => `Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>

#### Parameters

##### jid

`string`

##### suki

`undefined` | \{ `addChatLabel`: (`jid`, `labelId`) => `Promise`\<`void`\>; `addLabel`: (`jid`, `labels`) => `Promise`\<`void`\>; `addMessageLabel`: (`jid`, `messageId`, `labelId`) => `Promise`\<`void`\>; `addOrEditContact`: (`jid`, `contact`) => `Promise`\<`void`\>; `addOrEditQuickReply`: (`quickReply`) => `Promise`\<`void`\>; `appPatch`: (`patchCreate`) => `Promise`\<`void`\>; `assertSessions`: (`jids`, `force`) => `Promise`\<`boolean`\>; `authState`: \{ `creds`: [`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md); `keys`: [`SignalKeyStoreWithTransaction`](../type-aliases/SignalKeyStoreWithTransaction.md); \}; `chatModify`: (`mod`, `jid`) => `Promise`\<`void`\>; `cleanDirtyBits`: (`type`, `fromTimestamp`?) => `Promise`\<`void`\>; `clearMessage`: (`jid`, `key`, `timeStamp`) => `Promise`\<`void`\>; `createCallLink`: (`type`, `event`?, `timeoutMs`?) => `Promise`\<`void`\>; `createParticipantNodes`: (`jids`, `message`, `extraAttrs`?) => `Promise`\<\{ `nodes`: [`BinaryNode`](../type-aliases/BinaryNode.md)[]; `shouldIncludeDeviceIdentity`: `boolean`; \}\>; `end`: (`error`) => `void`; `ev`: [`BaileysEventEmitter`](../interfaces/BaileysEventEmitter.md) & `object`; `executeUSyncQuery`: (`usyncQuery`) => `Promise`\<`undefined` \| [`USyncQueryResult`](../type-aliases/USyncQueryResult.md)\>; `fetchBlocklist`: () => `Promise`\<`string`[]\>; `fetchDisappearingDuration`: (...`jids`) => `Promise`\<`undefined` \| [`USyncQueryResultList`](../type-aliases/USyncQueryResultList.md)[]\>; `fetchMessageHistory`: (`count`, `oldestMsgKey`, `oldestMsgTimestamp`) => `Promise`\<`string`\>; `fetchPrivacySettings`: (`force`?) => `Promise`\<\{\}\>; `fetchStatus`: (...`jids`) => `Promise`\<`undefined` \| [`USyncQueryResultList`](../type-aliases/USyncQueryResultList.md)[]\>; `generateMessageTag`: () => `string`; `getBotListV2`: () => `Promise`\<`BotListInfo`[]\>; `getBusinessProfile`: (`jid`) => `Promise`\<`void` \| [`WABusinessProfile`](../type-aliases/WABusinessProfile.md)\>; `getCatalog`: (`__namedParameters`) => `Promise`\<\{ `nextPageCursor`: `undefined` \| `string`; `products`: [`Product`](../type-aliases/Product.md)[]; \}\>; `getCollections`: (`jid`?, `limit`?) => `Promise`\<\{ `collections`: [`CatalogCollection`](../type-aliases/CatalogCollection.md)[]; \}\>; `getEphemeralGroup`: (`jid`) => `Promise`\<`number`\>; `getLidUser`: (`jid`) => `Promise`\<`undefined` \| `object`[]\>; `getOrderDetails`: (`orderId`, `tokenBase64`) => `Promise`\<[`OrderDetails`](../type-aliases/OrderDetails.md)\>; `getPrivacyTokens`: (`jids`) => `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>; `getUSyncDevices`: (`jids`, `useCache`, `ignoreZeroDevices`) => `Promise`\<[`JidWithDevice`](../type-aliases/JidWithDevice.md)[]\>; `groupAcceptInvite`: (`code`) => `Promise`\<`undefined` \| `string`\>; `groupAcceptInviteV4`: (`key`, `inviteMessage`) => `Promise`\<`string`\>; `groupCreate`: (`subject`, `participants`) => `Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>; `groupFetchAllParticipating`: () => `Promise`\<\{\}\>; `groupGetInviteInfo`: (`code`) => `Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>; `groupInviteCode`: (`jid`) => `Promise`\<`undefined` \| `string`\>; `groupJoinApprovalMode`: (`jid`, `mode`) => `Promise`\<`void`\>; `groupLeave`: (`id`) => `Promise`\<`void`\>; `groupMemberAddMode`: (`jid`, `mode`) => `Promise`\<`void`\>; `groupMetadata`: (`jid`) => `Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>; `groupParticipantsUpdate`: (`jid`, `participants`, `action`) => `Promise`\<`object`[]\>; `groupQuery`: (`jid`, `type`, `content`) => `Promise`\<`BinaryNode`\>; `groupRequestParticipantsList`: (`jid`) => `Promise`\<`object`[]\>; `groupRequestParticipantsUpdate`: (`jid`, `participants`, `action`) => `Promise`\<`object`[]\>; `groupRevokeInvite`: (`jid`) => `Promise`\<`undefined` \| `string`\>; `groupRevokeInviteV4`: (`groupJid`, `invitedJid`) => `Promise`\<`boolean`\>; `groupSettingUpdate`: (`jid`, `setting`) => `Promise`\<`void`\>; `groupToggleEphemeral`: (`jid`, `ephemeralExpiration`) => `Promise`\<`void`\>; `groupUpdateDescription`: (`jid`, `description`?) => `Promise`\<`void`\>; `groupUpdateSubject`: (`jid`, `subject`) => `Promise`\<`void`\>; `logger`: `ILogger`; `logout`: (`msg`?) => `Promise`\<`void`\>; `newsletterAdminCount`: (`jid`) => `Promise`\<`number`\>; `newsletterChangeOwner`: (`jid`, `userLid`) => `Promise`\<`void`\>; `newsletterCreate`: (`name`, `description`?, `picture`?) => `Promise`\<[`NewsletterMetadata`](../type-aliases/NewsletterMetadata.md)\>; `newsletterDelete`: (`jid`) => `Promise`\<`void`\>; `newsletterDemote`: (`jid`, `userLid`) => `Promise`\<`void`\>; `newsletterFetchAllParticipating`: () => `Promise`\<\{\}\>; `newsletterFetchMessages`: (`type`, `key`, `count`, `after`?) => `Promise`\<[`NewsletterFetchedUpdate`](../type-aliases/NewsletterFetchedUpdate.md)[]\>; `newsletterFetchUpdates`: (`jid`, `count`, `after`?, `since`?) => `Promise`\<[`NewsletterFetchedUpdate`](../type-aliases/NewsletterFetchedUpdate.md)[]\>; `newsletterFollow`: (`jid`) => `Promise`\<`void`\>; `newsletterMetadata`: (`type`, `key`, `role`?) => `Promise`\<[`NewsletterMetadata`](../type-aliases/NewsletterMetadata.md)\>; `newsletterMute`: (`jid`) => `Promise`\<`void`\>; `newsletterQuery`: (`jid`, `type`, `content`) => `Promise`\<`BinaryNode`\>; `newsletterReactionMode`: (`jid`, `mode`) => `Promise`\<`void`\>; `newsletterReactMessage`: (`jid`, `server_id`, `code`?) => `Promise`\<`void`\>; `newsletterRemovePicture`: (`jid`) => `Promise`\<`void`\>; `newsletterUnfollow`: (`jid`) => `Promise`\<`void`\>; `newsletterUnmute`: (`jid`) => `Promise`\<`void`\>; `newsletterUpdateDescription`: (`jid`, `description`?) => `Promise`\<`void`\>; `newsletterUpdateName`: (`jid`, `name`) => `Promise`\<`void`\>; `newsletterUpdatePicture`: (`jid`, `content`) => `Promise`\<`void`\>; `newsletterWMexQuery`: (`jid`?, `query_id`, `content`) => `Promise`\<`BinaryNode`\>; `offerCall`: (`toJid`, `isVideo`?) => `Promise`\<\{ `id`: `any`; `to`: `string`; \}\>; `onUnexpectedError`: (`err`, `msg`) => `void`; `presenceSubscribe`: (`toJid`, `tcToken`?) => `Promise`\<`void`\>; `processingMutex`: \{ `mutex`: `Promise`\<`T`\>; \}; `productCreate`: (`create`) => `Promise`\<[`Product`](../type-aliases/Product.md)\>; `productDelete`: (`productIds`) => `Promise`\<\{ `deleted`: `number`; \}\>; `productUpdate`: (`productId`, `update`) => `Promise`\<[`Product`](../type-aliases/Product.md)\>; `profilePictureUrl`: (`jids`) => `Promise`\<`string`\>; `query`: (`node`, `timeoutMs`?) => `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>; `readMessages`: (`keys`) => `Promise`\<`void`\>; `refreshMediaConn`: (`forceGet`?) => `Promise`\<[`MediaConnInfo`](../type-aliases/MediaConnInfo.md)\>; `rejectCall`: (`callId`, `callFrom`) => `Promise`\<`void`\>; `relayMessage`: (`jid`, `message`, `__namedParameters`) => `Promise`\<`string`\>; `removeChatLabel`: (`jid`, `labelId`) => `Promise`\<`void`\>; `removeContact`: (`jid`) => `Promise`\<`void`\>; `removeCoverPhoto`: (`id`) => `Promise`\<`any`\>; `removeMessageLabel`: (`jid`, `messageId`, `labelId`) => `Promise`\<`void`\>; `removeProfilePicture`: (`jid`) => `Promise`\<`void`\>; `removeQuickReply`: (`timestamp`) => `Promise`\<`void`\>; `requestPairingCode`: (`phoneNumber`, `code`?) => `Promise`\<`string`\>; `requestPlaceholderResend`: (`messageKey`) => `Promise`\<`undefined` \| `string`\>; `resyncAppState`: (`collections`, `isInitialSync`) => `Promise`\<`void`\>; `sendMessage`: (`jid`, `content`, `options`?) => `Promise`\<`any`\>; `sendMessageAck`: (`__namedParameters`, `errorCode`?) => `Promise`\<`void`\>; `sendNode`: (`frame`) => `Promise`\<`void`\>; `sendPeerDataOperationMessage`: (`pdoMessage`) => `Promise`\<`string`\>; `sendPresenceUpdate`: (`type`, `toJid`?) => `Promise`\<`void`\>; `sendRawMessage`: (`data`) => `Promise`\<`void`\>; `sendReceipt`: (`jid`, `participant`, `messageIds`, `type`) => `Promise`\<`void`\>; `sendReceipts`: (`keys`, `type`) => `Promise`\<`void`\>; `sendRetryRequest`: (`node`, `forceIncludeKeys`?) => `Promise`\<`void`\>; `sendStatusMentions`: (`content`, `jid`, `Private`?) => `Promise`\<`string`\>; `sendWAMBuffer`: (`wamBuffer`) => `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>; `signalRepository`: [`SignalRepository`](../type-aliases/SignalRepository.md); `star`: (`jid`, `messages`, `star`) => `Promise`\<`void`\>; `subscribeNewsletterUpdates`: (`jid`) => `Promise`\<\{ `duration`: `string`; \}\>; `type`: `"md"`; `updateBlockStatus`: (`jid`, `action`) => `Promise`\<`void`\>; `updateBussinesProfile`: (`args`) => `Promise`\<`any`\>; `updateCallPrivacy`: (`value`) => `Promise`\<`void`\>; `updateCoverPhoto`: (`photo`) => `Promise`\<`number`\>; `updateDefaultDisappearingMode`: (`duration`) => `Promise`\<`void`\>; `updateDisableLinkPreviewsPrivacy`: (`isPreviewsDisabled`) => `Promise`\<`void`\>; `updateGroupsAddPrivacy`: (`value`) => `Promise`\<`void`\>; `updateLastSeenPrivacy`: (`value`) => `Promise`\<`void`\>; `updateMediaMessage`: (`message`) => `Promise`\<`any`\>; `updateOnlinePrivacy`: (`value`) => `Promise`\<`void`\>; `updateProfileName`: (`name`) => `Promise`\<`void`\>; `updateProfilePicture`: (`jid`, `content`) => `Promise`\<`void`\>; `updateProfilePicturePrivacy`: (`value`) => `Promise`\<`void`\>; `updateProfileStatus`: (`status`) => `Promise`\<`void`\>; `updateReadReceiptsPrivacy`: (`value`) => `Promise`\<`void`\>; `updateStatusPrivacy`: (`value`) => `Promise`\<`void`\>; `uploadPreKeys`: (`count`?) => `Promise`\<`void`\>; `uploadPreKeysToServerIfRequired`: () => `Promise`\<`void`\>; `upsertMessage`: (`msg`, `type`) => `Promise`\<`void`\>; `user`: `undefined` \| [`Contact`](../interfaces/Contact.md); `waitForConnectionUpdate`: (`check`, `timeoutMs`?) => `Promise`\<`void`\>; `waitForMessage`: \<`T_2`\>(`msgId`, `timeoutMs`?) => `Promise`\<`T_2`\>; `waitForSocketOpen`: () => `Promise`\<`void`\>; `waUploadToServer`: [`WAMediaUploadFunction`](../type-aliases/WAMediaUploadFunction.md); `ws`: `WebSocketClient`; \}

#### Returns

`Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>

### fetchImageUrl()

> **fetchImageUrl**: (`jid`, `suki`) => `Promise`\<`undefined` \| `null` \| `string`\>

#### Parameters

##### jid

`string`

##### suki

`undefined` | \{ `addChatLabel`: (`jid`, `labelId`) => `Promise`\<`void`\>; `addLabel`: (`jid`, `labels`) => `Promise`\<`void`\>; `addMessageLabel`: (`jid`, `messageId`, `labelId`) => `Promise`\<`void`\>; `addOrEditContact`: (`jid`, `contact`) => `Promise`\<`void`\>; `addOrEditQuickReply`: (`quickReply`) => `Promise`\<`void`\>; `appPatch`: (`patchCreate`) => `Promise`\<`void`\>; `assertSessions`: (`jids`, `force`) => `Promise`\<`boolean`\>; `authState`: \{ `creds`: [`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md); `keys`: [`SignalKeyStoreWithTransaction`](../type-aliases/SignalKeyStoreWithTransaction.md); \}; `chatModify`: (`mod`, `jid`) => `Promise`\<`void`\>; `cleanDirtyBits`: (`type`, `fromTimestamp`?) => `Promise`\<`void`\>; `clearMessage`: (`jid`, `key`, `timeStamp`) => `Promise`\<`void`\>; `createCallLink`: (`type`, `event`?, `timeoutMs`?) => `Promise`\<`void`\>; `createParticipantNodes`: (`jids`, `message`, `extraAttrs`?) => `Promise`\<\{ `nodes`: [`BinaryNode`](../type-aliases/BinaryNode.md)[]; `shouldIncludeDeviceIdentity`: `boolean`; \}\>; `end`: (`error`) => `void`; `ev`: [`BaileysEventEmitter`](../interfaces/BaileysEventEmitter.md) & `object`; `executeUSyncQuery`: (`usyncQuery`) => `Promise`\<`undefined` \| [`USyncQueryResult`](../type-aliases/USyncQueryResult.md)\>; `fetchBlocklist`: () => `Promise`\<`string`[]\>; `fetchDisappearingDuration`: (...`jids`) => `Promise`\<`undefined` \| [`USyncQueryResultList`](../type-aliases/USyncQueryResultList.md)[]\>; `fetchMessageHistory`: (`count`, `oldestMsgKey`, `oldestMsgTimestamp`) => `Promise`\<`string`\>; `fetchPrivacySettings`: (`force`?) => `Promise`\<\{\}\>; `fetchStatus`: (...`jids`) => `Promise`\<`undefined` \| [`USyncQueryResultList`](../type-aliases/USyncQueryResultList.md)[]\>; `generateMessageTag`: () => `string`; `getBotListV2`: () => `Promise`\<`BotListInfo`[]\>; `getBusinessProfile`: (`jid`) => `Promise`\<`void` \| [`WABusinessProfile`](../type-aliases/WABusinessProfile.md)\>; `getCatalog`: (`__namedParameters`) => `Promise`\<\{ `nextPageCursor`: `undefined` \| `string`; `products`: [`Product`](../type-aliases/Product.md)[]; \}\>; `getCollections`: (`jid`?, `limit`?) => `Promise`\<\{ `collections`: [`CatalogCollection`](../type-aliases/CatalogCollection.md)[]; \}\>; `getEphemeralGroup`: (`jid`) => `Promise`\<`number`\>; `getLidUser`: (`jid`) => `Promise`\<`undefined` \| `object`[]\>; `getOrderDetails`: (`orderId`, `tokenBase64`) => `Promise`\<[`OrderDetails`](../type-aliases/OrderDetails.md)\>; `getPrivacyTokens`: (`jids`) => `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>; `getUSyncDevices`: (`jids`, `useCache`, `ignoreZeroDevices`) => `Promise`\<[`JidWithDevice`](../type-aliases/JidWithDevice.md)[]\>; `groupAcceptInvite`: (`code`) => `Promise`\<`undefined` \| `string`\>; `groupAcceptInviteV4`: (`key`, `inviteMessage`) => `Promise`\<`string`\>; `groupCreate`: (`subject`, `participants`) => `Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>; `groupFetchAllParticipating`: () => `Promise`\<\{\}\>; `groupGetInviteInfo`: (`code`) => `Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>; `groupInviteCode`: (`jid`) => `Promise`\<`undefined` \| `string`\>; `groupJoinApprovalMode`: (`jid`, `mode`) => `Promise`\<`void`\>; `groupLeave`: (`id`) => `Promise`\<`void`\>; `groupMemberAddMode`: (`jid`, `mode`) => `Promise`\<`void`\>; `groupMetadata`: (`jid`) => `Promise`\<[`GroupMetadata`](../interfaces/GroupMetadata.md)\>; `groupParticipantsUpdate`: (`jid`, `participants`, `action`) => `Promise`\<`object`[]\>; `groupQuery`: (`jid`, `type`, `content`) => `Promise`\<`BinaryNode`\>; `groupRequestParticipantsList`: (`jid`) => `Promise`\<`object`[]\>; `groupRequestParticipantsUpdate`: (`jid`, `participants`, `action`) => `Promise`\<`object`[]\>; `groupRevokeInvite`: (`jid`) => `Promise`\<`undefined` \| `string`\>; `groupRevokeInviteV4`: (`groupJid`, `invitedJid`) => `Promise`\<`boolean`\>; `groupSettingUpdate`: (`jid`, `setting`) => `Promise`\<`void`\>; `groupToggleEphemeral`: (`jid`, `ephemeralExpiration`) => `Promise`\<`void`\>; `groupUpdateDescription`: (`jid`, `description`?) => `Promise`\<`void`\>; `groupUpdateSubject`: (`jid`, `subject`) => `Promise`\<`void`\>; `logger`: `ILogger`; `logout`: (`msg`?) => `Promise`\<`void`\>; `newsletterAdminCount`: (`jid`) => `Promise`\<`number`\>; `newsletterChangeOwner`: (`jid`, `userLid`) => `Promise`\<`void`\>; `newsletterCreate`: (`name`, `description`?, `picture`?) => `Promise`\<[`NewsletterMetadata`](../type-aliases/NewsletterMetadata.md)\>; `newsletterDelete`: (`jid`) => `Promise`\<`void`\>; `newsletterDemote`: (`jid`, `userLid`) => `Promise`\<`void`\>; `newsletterFetchAllParticipating`: () => `Promise`\<\{\}\>; `newsletterFetchMessages`: (`type`, `key`, `count`, `after`?) => `Promise`\<[`NewsletterFetchedUpdate`](../type-aliases/NewsletterFetchedUpdate.md)[]\>; `newsletterFetchUpdates`: (`jid`, `count`, `after`?, `since`?) => `Promise`\<[`NewsletterFetchedUpdate`](../type-aliases/NewsletterFetchedUpdate.md)[]\>; `newsletterFollow`: (`jid`) => `Promise`\<`void`\>; `newsletterMetadata`: (`type`, `key`, `role`?) => `Promise`\<[`NewsletterMetadata`](../type-aliases/NewsletterMetadata.md)\>; `newsletterMute`: (`jid`) => `Promise`\<`void`\>; `newsletterQuery`: (`jid`, `type`, `content`) => `Promise`\<`BinaryNode`\>; `newsletterReactionMode`: (`jid`, `mode`) => `Promise`\<`void`\>; `newsletterReactMessage`: (`jid`, `server_id`, `code`?) => `Promise`\<`void`\>; `newsletterRemovePicture`: (`jid`) => `Promise`\<`void`\>; `newsletterUnfollow`: (`jid`) => `Promise`\<`void`\>; `newsletterUnmute`: (`jid`) => `Promise`\<`void`\>; `newsletterUpdateDescription`: (`jid`, `description`?) => `Promise`\<`void`\>; `newsletterUpdateName`: (`jid`, `name`) => `Promise`\<`void`\>; `newsletterUpdatePicture`: (`jid`, `content`) => `Promise`\<`void`\>; `newsletterWMexQuery`: (`jid`?, `query_id`, `content`) => `Promise`\<`BinaryNode`\>; `offerCall`: (`toJid`, `isVideo`?) => `Promise`\<\{ `id`: `any`; `to`: `string`; \}\>; `onUnexpectedError`: (`err`, `msg`) => `void`; `presenceSubscribe`: (`toJid`, `tcToken`?) => `Promise`\<`void`\>; `processingMutex`: \{ `mutex`: `Promise`\<`T`\>; \}; `productCreate`: (`create`) => `Promise`\<[`Product`](../type-aliases/Product.md)\>; `productDelete`: (`productIds`) => `Promise`\<\{ `deleted`: `number`; \}\>; `productUpdate`: (`productId`, `update`) => `Promise`\<[`Product`](../type-aliases/Product.md)\>; `profilePictureUrl`: (`jids`) => `Promise`\<`string`\>; `query`: (`node`, `timeoutMs`?) => `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>; `readMessages`: (`keys`) => `Promise`\<`void`\>; `refreshMediaConn`: (`forceGet`?) => `Promise`\<[`MediaConnInfo`](../type-aliases/MediaConnInfo.md)\>; `rejectCall`: (`callId`, `callFrom`) => `Promise`\<`void`\>; `relayMessage`: (`jid`, `message`, `__namedParameters`) => `Promise`\<`string`\>; `removeChatLabel`: (`jid`, `labelId`) => `Promise`\<`void`\>; `removeContact`: (`jid`) => `Promise`\<`void`\>; `removeCoverPhoto`: (`id`) => `Promise`\<`any`\>; `removeMessageLabel`: (`jid`, `messageId`, `labelId`) => `Promise`\<`void`\>; `removeProfilePicture`: (`jid`) => `Promise`\<`void`\>; `removeQuickReply`: (`timestamp`) => `Promise`\<`void`\>; `requestPairingCode`: (`phoneNumber`, `code`?) => `Promise`\<`string`\>; `requestPlaceholderResend`: (`messageKey`) => `Promise`\<`undefined` \| `string`\>; `resyncAppState`: (`collections`, `isInitialSync`) => `Promise`\<`void`\>; `sendMessage`: (`jid`, `content`, `options`?) => `Promise`\<`any`\>; `sendMessageAck`: (`__namedParameters`, `errorCode`?) => `Promise`\<`void`\>; `sendNode`: (`frame`) => `Promise`\<`void`\>; `sendPeerDataOperationMessage`: (`pdoMessage`) => `Promise`\<`string`\>; `sendPresenceUpdate`: (`type`, `toJid`?) => `Promise`\<`void`\>; `sendRawMessage`: (`data`) => `Promise`\<`void`\>; `sendReceipt`: (`jid`, `participant`, `messageIds`, `type`) => `Promise`\<`void`\>; `sendReceipts`: (`keys`, `type`) => `Promise`\<`void`\>; `sendRetryRequest`: (`node`, `forceIncludeKeys`?) => `Promise`\<`void`\>; `sendStatusMentions`: (`content`, `jid`, `Private`?) => `Promise`\<`string`\>; `sendWAMBuffer`: (`wamBuffer`) => `Promise`\<[`BinaryNode`](../type-aliases/BinaryNode.md)\>; `signalRepository`: [`SignalRepository`](../type-aliases/SignalRepository.md); `star`: (`jid`, `messages`, `star`) => `Promise`\<`void`\>; `subscribeNewsletterUpdates`: (`jid`) => `Promise`\<\{ `duration`: `string`; \}\>; `type`: `"md"`; `updateBlockStatus`: (`jid`, `action`) => `Promise`\<`void`\>; `updateBussinesProfile`: (`args`) => `Promise`\<`any`\>; `updateCallPrivacy`: (`value`) => `Promise`\<`void`\>; `updateCoverPhoto`: (`photo`) => `Promise`\<`number`\>; `updateDefaultDisappearingMode`: (`duration`) => `Promise`\<`void`\>; `updateDisableLinkPreviewsPrivacy`: (`isPreviewsDisabled`) => `Promise`\<`void`\>; `updateGroupsAddPrivacy`: (`value`) => `Promise`\<`void`\>; `updateLastSeenPrivacy`: (`value`) => `Promise`\<`void`\>; `updateMediaMessage`: (`message`) => `Promise`\<`any`\>; `updateOnlinePrivacy`: (`value`) => `Promise`\<`void`\>; `updateProfileName`: (`name`) => `Promise`\<`void`\>; `updateProfilePicture`: (`jid`, `content`) => `Promise`\<`void`\>; `updateProfilePicturePrivacy`: (`value`) => `Promise`\<`void`\>; `updateProfileStatus`: (`status`) => `Promise`\<`void`\>; `updateReadReceiptsPrivacy`: (`value`) => `Promise`\<`void`\>; `updateStatusPrivacy`: (`value`) => `Promise`\<`void`\>; `uploadPreKeys`: (`count`?) => `Promise`\<`void`\>; `uploadPreKeysToServerIfRequired`: () => `Promise`\<`void`\>; `upsertMessage`: (`msg`, `type`) => `Promise`\<`void`\>; `user`: `undefined` \| [`Contact`](../interfaces/Contact.md); `waitForConnectionUpdate`: (`check`, `timeoutMs`?) => `Promise`\<`void`\>; `waitForMessage`: \<`T_2`\>(`msgId`, `timeoutMs`?) => `Promise`\<`T_2`\>; `waitForSocketOpen`: () => `Promise`\<`void`\>; `waUploadToServer`: [`WAMediaUploadFunction`](../type-aliases/WAMediaUploadFunction.md); `ws`: `WebSocketClient`; \}

#### Returns

`Promise`\<`undefined` \| `null` \| `string`\>

### fetchMessageReceipts()

> **fetchMessageReceipts**: (`__namedParameters`) => `Promise`\<`undefined` \| `null` \| `IUserReceipt`[]\>

#### Parameters

##### \_\_namedParameters

`any`

#### Returns

`Promise`\<`undefined` \| `null` \| `IUserReceipt`[]\>

### fromJSON()

> **fromJSON**: (`json`) => `void`

#### Parameters

##### json

###### chats

`any`[]

###### contacts

\{\}

###### labelAssociations

`LabelAssociation`[]

###### labels

\{\}

###### messages

\{\}

#### Returns

`void`

### getChatLabels()

> **getChatLabels**: (`chatId`) => `LabelAssociation`[]

Get labels for chat

#### Parameters

##### chatId

`string`

#### Returns

`LabelAssociation`[]

Label IDs

### getLabels()

> **getLabels**: () => [`ObjectRepository`](../classes/ObjectRepository.md)\<`Label`\>

Get all available labels for profile

Keep in mind that the list is formed from predefined tags and tags
that were "caught" during their editing.

#### Returns

[`ObjectRepository`](../classes/ObjectRepository.md)\<`Label`\>

### getMessageLabels()

> **getMessageLabels**: (`messageId`) => `string`[]

Get labels for message

#### Parameters

##### messageId

`string`

#### Returns

`string`[]

Label IDs

### groupMetadata

> **groupMetadata**: `object`

#### Index Signature

\[`_`: `string`\]: [`GroupMetadata`](../interfaces/GroupMetadata.md)

### labelAssociations

> **labelAssociations**: `KeyedDB`\<`LabelAssociation`, `string`\>

### labels

> **labels**: [`ObjectRepository`](../classes/ObjectRepository.md)\<`Label`\>

### loadMessage()

> **loadMessage**: (`jid`, `id`) => `Promise`\<`any`\>

#### Parameters

##### jid

`string`

##### id

`string`

#### Returns

`Promise`\<`any`\>

### loadMessages()

> **loadMessages**: (`jid`, `count`, `cursor`) => `Promise`\<`IWebMessageInfo`[]\>

loads messages from the store, if not found -- uses the legacy connection

#### Parameters

##### jid

`string`

##### count

`number`

##### cursor

[`WAMessageCursor`](../type-aliases/WAMessageCursor.md)

#### Returns

`Promise`\<`IWebMessageInfo`[]\>

### messages

> **messages**: `object`

#### Index Signature

\[`_`: `string`\]: `object`

### mostRecentMessage()

> **mostRecentMessage**: (`jid`) => `Promise`\<`IWebMessageInfo`\>

#### Parameters

##### jid

`string`

#### Returns

`Promise`\<`IWebMessageInfo`\>

### presences

> **presences**: `object`

#### Index Signature

\[`id`: `string`\]: `object`

### readFromFile()

> **readFromFile**: (`path`) => `void`

#### Parameters

##### path

`string`

#### Returns

`void`

### state

> **state**: [`ConnectionState`](../type-aliases/ConnectionState.md)

### toJSON()

> **toJSON**: () => `object`

#### Returns

`object`

##### chats

> **chats**: `KeyedDB`\<`any`, `string`\>

##### contacts

> **contacts**: `object`

###### Index Signature

\[`_`: `string`\]: [`Contact`](../interfaces/Contact.md)

##### labelAssociations

> **labelAssociations**: `KeyedDB`\<`LabelAssociation`, `string`\>

##### labels

> **labels**: [`ObjectRepository`](../classes/ObjectRepository.md)\<`Label`\>

##### messages

> **messages**: `object`

###### Index Signature

\[`_`: `string`\]: `object`

### writeToFile()

> **writeToFile**: (`path`) => `void`

#### Parameters

##### path

`string`

#### Returns

`void`
