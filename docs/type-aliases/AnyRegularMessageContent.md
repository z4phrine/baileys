[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / AnyRegularMessageContent

# Type Alias: AnyRegularMessageContent

> **AnyRegularMessageContent**: `object` & `Mentionable` & `Contextable` & `Buttonable` & `Templatable` & `Interactiveable` & `Shopable` & `Collectionable` & `Cardsable` & `Listable` & `Editable` & `WithDimensions` \| [`AnyMediaMessageContent`](AnyMediaMessageContent.md) \| `object` & `Mentionable` & `Contextable` & `Buttonable` & `Templatable` & `Interactiveable` & `Shopable` & `Collectionable` & `Cardsable` & `Listable` & `Editable` & `WithDimensions` \| \{ `contacts`: \{ `contacts`: `proto.Message.IContactMessage`[]; `displayName`: `string`; \}; \} \| \{ `location`: [`WALocationMessage`](WALocationMessage.md); \} \| \{ `react`: `proto.Message.IReactionMessage`; \} \| \{ `buttonReply`: [`ButtonReplyInfo`](ButtonReplyInfo.md); `type`: `"template"` \| `"plain"` \| `"list"` \| `"interactive"`; \} \| \{ `groupInvite`: [`GroupInviteInfo`](GroupInviteInfo.md); \} \| \{ `pin`: [`PinInfo`](PinInfo.md); \} \| \{ `keep`: [`KeepInfo`](KeepInfo.md); \} \| \{ `call`: [`CallCreationInfo`](CallCreationInfo.md); \} \| \{ `event`: [`WAEventMessage`](WAEventMessage.md); \} \| \{ `adminInvite`: [`AdminInviteInfo`](AdminInviteInfo.md); \} \| \{ `payment`: [`PaymentInfo`](PaymentInfo.md); \} \| \{ `paymentInvite`: \{ `expiry`: `number`; `type`: `number`; \}; \} \| \{ `pollResult`: [`PollResultOptions`](PollResultOptions.md); \} \| \{ `order`: [`WAOrderMessage`](WAOrderMessage.md); \} \| \{ `body`: `string`; `businessOwnerJid`: `string`; `footer`: `string`; `product`: [`WASendableProduct`](WASendableProduct.md); \} \| \{ `stickerPack`: [`StickerPack`](../interfaces/StickerPack.md); \} \| `SharePhoneNumber` \| `RequestPhoneNumber` & `ViewOnce` & `ViewOnceExt`

Defined in: [lib/Types/Message.d.ts:305](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Message.d.ts#L305)
