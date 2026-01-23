[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / SignalRepository

# Type Alias: SignalRepository

> **SignalRepository**: `object`

Defined in: [lib/Types/Signal.d.ts:59](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L59)

## Type declaration

### decryptGroupMessage()

#### Parameters

##### opts

`DecryptGroupSignalOpts`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

### decryptMessage()

#### Parameters

##### opts

`DecryptSignalProtoOpts`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

### deleteSession()

#### Parameters

##### jids

`string`[]

#### Returns

`Promise`\<`void`\>

### encryptGroupMessage()

#### Parameters

##### opts

`EncryptGroupMessageOpts`

#### Returns

`Promise`\<\{ `ciphertext`: `Uint8Array`; `senderKeyDistributionMessage`: `Uint8Array`; \}\>

### encryptMessage()

#### Parameters

##### opts

`EncryptMessageOpts`

#### Returns

`Promise`\<\{ `ciphertext`: `Uint8Array`; `type`: `"pkmsg"` \| `"msg"`; \}\>

### encryptMessageWithWire()

#### Parameters

##### opts

`EncryptMessageWithWireOpts`

#### Returns

`Promise`\<\{ `ciphertext`: `Uint8Array`; `type`: `"pkmsg"` \| `"msg"`; `wireJid`: `string`; \}\>

### injectE2ESession()

#### Parameters

##### opts

`E2ESessionOpts`

#### Returns

`Promise`\<`void`\>

### jidToSignalProtocolAddress()

#### Parameters

##### jid

`string`

#### Returns

`string`

### migrateSession()

#### Parameters

##### fromJids

`string`[]

##### toJid

`string`

#### Returns

`Promise`\<\{ `migrated`: `number`; `skipped`: `number`; `total`: `number`; \}\>

### processSenderKeyDistributionMessage()

#### Parameters

##### opts

`ProcessSenderKeyDistributionMessageOpts`

#### Returns

`Promise`\<`void`\>

### validateSession()

#### Call Signature

##### Parameters

###### jid

`string`

##### Returns

`Promise`\<\{ `exists`: `boolean`; `reason`: `string`; \}\>

#### Call Signature

##### Parameters

###### jid

`string`

##### Returns

`Promise`\<\{ `exists`: `boolean`; `reason`: `string`; \}\>
