[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / GroupMetadata

# Interface: GroupMetadata

Defined in: [lib/Types/GroupMetadata.d.ts:15](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L15)

## Properties

### addressingMode

> **addressingMode**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:17](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L17)

***

### announce?

> `optional` **announce**: `boolean`

Defined in: [lib/Types/GroupMetadata.d.ts:34](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L34)

is set when the group only allows admins to write messages

***

### author?

> `optional` **author**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:50](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L50)

the person who added you to group or changed some setting in group

***

### creation?

> `optional` **creation**: `number`

Defined in: [lib/Types/GroupMetadata.d.ts:25](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L25)

***

### desc?

> `optional` **desc**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:26](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L26)

***

### descId?

> `optional` **descId**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:28](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L28)

***

### descOwner?

> `optional` **descOwner**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:27](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L27)

***

### ephemeralDuration?

> `optional` **ephemeralDuration**: `number`

Defined in: [lib/Types/GroupMetadata.d.ts:47](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L47)

***

### id

> **id**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:16](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L16)

***

### inviteCode?

> `optional` **inviteCode**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:48](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L48)

***

### isCommunity?

> `optional` **isCommunity**: `boolean`

Defined in: [lib/Types/GroupMetadata.d.ts:40](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L40)

is this a community

***

### isCommunityAnnounce?

> `optional` **isCommunityAnnounce**: `boolean`

Defined in: [lib/Types/GroupMetadata.d.ts:42](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L42)

is this the announce of a community

***

### joinApprovalMode?

> `optional` **joinApprovalMode**: `boolean`

Defined in: [lib/Types/GroupMetadata.d.ts:38](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L38)

Request approval to join the group

***

### linkedParent?

> `optional` **linkedParent**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:30](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L30)

if this group is part of a community, it returns the jid of the community to which it belongs

***

### memberAddMode?

> `optional` **memberAddMode**: `boolean`

Defined in: [lib/Types/GroupMetadata.d.ts:36](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L36)

is set when the group also allows members to add participants

***

### owner

> **owner**: `undefined` \| `string`

Defined in: [lib/Types/GroupMetadata.d.ts:18](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L18)

***

### ownerCountry

> **ownerCountry**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:19](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L19)

***

### participants

> **participants**: [`GroupParticipant`](../type-aliases/GroupParticipant.md)[]

Defined in: [lib/Types/GroupMetadata.d.ts:45](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L45)

***

### picture?

> `optional` **picture**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:46](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L46)

***

### restrict?

> `optional` **restrict**: `boolean`

Defined in: [lib/Types/GroupMetadata.d.ts:32](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L32)

is set when the group only allows admins to change group settings

***

### size?

> `optional` **size**: `number`

Defined in: [lib/Types/GroupMetadata.d.ts:44](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L44)

number of group participants

***

### subject

> **subject**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:20](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L20)

***

### subjectOwner?

> `optional` **subjectOwner**: `string`

Defined in: [lib/Types/GroupMetadata.d.ts:22](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L22)

group subject owner

***

### subjectTime?

> `optional` **subjectTime**: `number`

Defined in: [lib/Types/GroupMetadata.d.ts:24](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/GroupMetadata.d.ts#L24)

group subject modification date
