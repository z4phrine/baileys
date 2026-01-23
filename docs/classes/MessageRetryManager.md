[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / MessageRetryManager

# Class: MessageRetryManager

Defined in: [lib/Utils/message-retry-manager.d.ts:35](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L35)

## Constructors

### new MessageRetryManager()

> **new MessageRetryManager**(`logger`, `maxMsgRetryCount`): [`MessageRetryManager`](MessageRetryManager.md)

Defined in: [lib/Utils/message-retry-manager.d.ts:43](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L43)

#### Parameters

##### logger

`ILogger`

##### maxMsgRetryCount

`number`

#### Returns

[`MessageRetryManager`](MessageRetryManager.md)

## Methods

### addRecentMessage()

> **addRecentMessage**(`to`, `id`, `message`): `void`

Defined in: [lib/Utils/message-retry-manager.d.ts:47](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L47)

Add a recent message to the cache for retry handling

#### Parameters

##### to

`string`

##### id

`string`

##### message

`IMessage`

#### Returns

`void`

***

### cancelPendingPhoneRequest()

> **cancelPendingPhoneRequest**(`messageId`): `void`

Defined in: [lib/Utils/message-retry-manager.d.ts:86](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L86)

Cancel pending phone request

#### Parameters

##### messageId

`string`

#### Returns

`void`

***

### getRecentMessage()

> **getRecentMessage**(`to`, `id`): `undefined` \| [`RecentMessage`](../interfaces/RecentMessage.md)

Defined in: [lib/Utils/message-retry-manager.d.ts:51](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L51)

Get a recent message from the cache

#### Parameters

##### to

`string`

##### id

`string`

#### Returns

`undefined` \| [`RecentMessage`](../interfaces/RecentMessage.md)

***

### getRetryCount()

> **getRetryCount**(`messageId`): `number`

Defined in: [lib/Utils/message-retry-manager.d.ts:66](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L66)

Get retry count for a message

#### Parameters

##### messageId

`string`

#### Returns

`number`

***

### hasExceededMaxRetries()

> **hasExceededMaxRetries**(`messageId`): `boolean`

Defined in: [lib/Utils/message-retry-manager.d.ts:70](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L70)

Check if message has exceeded maximum retry attempts

#### Parameters

##### messageId

`string`

#### Returns

`boolean`

***

### incrementRetryCount()

> **incrementRetryCount**(`messageId`): `number`

Defined in: [lib/Utils/message-retry-manager.d.ts:62](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L62)

Increment retry counter for a message

#### Parameters

##### messageId

`string`

#### Returns

`number`

***

### markRetryFailed()

> **markRetryFailed**(`messageId`): `void`

Defined in: [lib/Utils/message-retry-manager.d.ts:78](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L78)

Mark retry as failed

#### Parameters

##### messageId

`string`

#### Returns

`void`

***

### markRetrySuccess()

> **markRetrySuccess**(`messageId`): `void`

Defined in: [lib/Utils/message-retry-manager.d.ts:74](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L74)

Mark retry as successful

#### Parameters

##### messageId

`string`

#### Returns

`void`

***

### schedulePhoneRequest()

> **schedulePhoneRequest**(`messageId`, `callback`, `delay`?): `void`

Defined in: [lib/Utils/message-retry-manager.d.ts:82](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L82)

Schedule a phone request with delay

#### Parameters

##### messageId

`string`

##### callback

() => `void`

##### delay?

`number`

#### Returns

`void`

***

### shouldRecreateSession()

> **shouldRecreateSession**(`jid`, `retryCount`, `hasSession`): `object`

Defined in: [lib/Utils/message-retry-manager.d.ts:55](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/message-retry-manager.d.ts#L55)

Check if a session should be recreated based on retry count and history

#### Parameters

##### jid

`string`

##### retryCount

`number`

##### hasSession

`boolean`

#### Returns

`object`

##### reason

> **reason**: `string`

##### recreate

> **recreate**: `boolean`
