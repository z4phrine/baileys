[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / ChatModification

# Type Alias: ChatModification

> **ChatModification**: \{ `archive`: `boolean`; `lastMessages`: [`LastMessageList`](LastMessageList.md); \} \| \{ `contact`: `ContactAction` \| `null`; \} \| \{ `pushNameSetting`: `string`; \} \| \{ `pin`: `boolean`; \} \| \{ `mute`: `number` \| `null`; \} \| \{ `clear`: `boolean`; \} \| \{ `deleteForMe`: \{ `deleteMedia`: `boolean`; `key`: [`WAMessageKey`](WAMessageKey.md); `timestamp`: `number`; \}; \} \| \{ `star`: \{ `messages`: `object`[]; `star`: `boolean`; \}; \} \| \{ `lastMessages`: [`LastMessageList`](LastMessageList.md); `markRead`: `boolean`; \} \| \{ `delete`: `true`; `lastMessages`: [`LastMessageList`](LastMessageList.md); \} \| \{ `contact`: `proto.SyncActionValue.IContactAction` \| `null`; \} \| \{ `disableLinkPreviews`: `proto.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction`; \} \| \{ `addLabel`: `LabelActionBody`; \} \| \{ `addChatLabel`: `ChatLabelAssociationActionBody`; \} \| \{ `removeChatLabel`: `ChatLabelAssociationActionBody`; \} \| \{ `addMessageLabel`: `MessageLabelAssociationActionBody`; \} \| \{ `removeMessageLabel`: `MessageLabelAssociationActionBody`; \} \| \{ `quickReply`: `QuickReplyAction`; \}

Defined in: [lib/Types/Chat.d.ts:80](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Chat.d.ts#L80)

## Type declaration

\{ `archive`: `boolean`; `lastMessages`: [`LastMessageList`](LastMessageList.md); \}

### archive

> **archive**: `boolean`

### lastMessages

> **lastMessages**: [`LastMessageList`](LastMessageList.md)

\{ `contact`: `ContactAction` \| `null`; \}

### contact

> **contact**: `ContactAction` \| `null`

\{ `pushNameSetting`: `string`; \}

### pushNameSetting

> **pushNameSetting**: `string`

\{ `pin`: `boolean`; \}

### pin

> **pin**: `boolean`

\{ `mute`: `number` \| `null`; \}

### mute

> **mute**: `number` \| `null`

mute for duration, or provide timestamp of mute to remove

\{ `clear`: `boolean`; \}

### clear

> **clear**: `boolean`

\{ `deleteForMe`: \{ `deleteMedia`: `boolean`; `key`: [`WAMessageKey`](WAMessageKey.md); `timestamp`: `number`; \}; \}

### deleteForMe

> **deleteForMe**: `object`

#### deleteForMe.deleteMedia

> **deleteMedia**: `boolean`

#### deleteForMe.key

> **key**: [`WAMessageKey`](WAMessageKey.md)

#### deleteForMe.timestamp

> **timestamp**: `number`

\{ `star`: \{ `messages`: `object`[]; `star`: `boolean`; \}; \}

### star

> **star**: `object`

#### star.messages

> **messages**: `object`[]

#### star.star

> **star**: `boolean`

\{ `lastMessages`: [`LastMessageList`](LastMessageList.md); `markRead`: `boolean`; \}

### lastMessages

> **lastMessages**: [`LastMessageList`](LastMessageList.md)

### markRead

> **markRead**: `boolean`

\{ `delete`: `true`; `lastMessages`: [`LastMessageList`](LastMessageList.md); \}

### delete

> **delete**: `true`

### lastMessages

> **lastMessages**: [`LastMessageList`](LastMessageList.md)

\{ `contact`: `proto.SyncActionValue.IContactAction` \| `null`; \}

### contact

> **contact**: `proto.SyncActionValue.IContactAction` \| `null`

\{ `disableLinkPreviews`: `proto.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction`; \}

### disableLinkPreviews

> **disableLinkPreviews**: `proto.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction`

\{ `addLabel`: `LabelActionBody`; \}

### addLabel

> **addLabel**: `LabelActionBody`

\{ `addChatLabel`: `ChatLabelAssociationActionBody`; \}

### addChatLabel

> **addChatLabel**: `ChatLabelAssociationActionBody`

\{ `removeChatLabel`: `ChatLabelAssociationActionBody`; \}

### removeChatLabel

> **removeChatLabel**: `ChatLabelAssociationActionBody`

\{ `addMessageLabel`: `MessageLabelAssociationActionBody`; \}

### addMessageLabel

> **addMessageLabel**: `MessageLabelAssociationActionBody`

\{ `removeMessageLabel`: `MessageLabelAssociationActionBody`; \}

### removeMessageLabel

> **removeMessageLabel**: `MessageLabelAssociationActionBody`

\{ `quickReply`: `QuickReplyAction`; \}

### quickReply

> **quickReply**: `QuickReplyAction`
