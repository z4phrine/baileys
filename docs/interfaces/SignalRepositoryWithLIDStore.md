[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / SignalRepositoryWithLIDStore

# Interface: SignalRepositoryWithLIDStore

Defined in: [lib/Types/Signal.d.ts:94](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L94)

## Extends

- [`SignalRepository`](../type-aliases/SignalRepository.md)

## Properties

### lidMapping

> **lidMapping**: `LIDMappingStore`

Defined in: [lib/Types/Signal.d.ts:95](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L95)

## Methods

### decryptGroupMessage()

> **decryptGroupMessage**(`opts`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [lib/Types/Signal.d.ts:60](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L60)

#### Parameters

##### opts

`DecryptGroupSignalOpts`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

`SignalRepository.decryptGroupMessage`

***

### decryptMessage()

> **decryptMessage**(`opts`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [lib/Types/Signal.d.ts:62](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L62)

#### Parameters

##### opts

`DecryptSignalProtoOpts`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Inherited from

`SignalRepository.decryptMessage`

***

### deleteSession()

> **deleteSession**(`jids`): `Promise`\<`void`\>

Defined in: [lib/Types/Signal.d.ts:91](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L91)

#### Parameters

##### jids

`string`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

`SignalRepository.deleteSession`

***

### encryptGroupMessage()

> **encryptGroupMessage**(`opts`): `Promise`\<\{ `ciphertext`: `Uint8Array`; `senderKeyDistributionMessage`: `Uint8Array`; \}\>

Defined in: [lib/Types/Signal.d.ts:72](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L72)

#### Parameters

##### opts

`EncryptGroupMessageOpts`

#### Returns

`Promise`\<\{ `ciphertext`: `Uint8Array`; `senderKeyDistributionMessage`: `Uint8Array`; \}\>

#### Inherited from

`SignalRepository.encryptGroupMessage`

***

### encryptMessage()

> **encryptMessage**(`opts`): `Promise`\<\{ `ciphertext`: `Uint8Array`; `type`: `"pkmsg"` \| `"msg"`; \}\>

Defined in: [lib/Types/Signal.d.ts:63](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L63)

#### Parameters

##### opts

`EncryptMessageOpts`

#### Returns

`Promise`\<\{ `ciphertext`: `Uint8Array`; `type`: `"pkmsg"` \| `"msg"`; \}\>

#### Inherited from

`SignalRepository.encryptMessage`

***

### encryptMessageWithWire()

> **encryptMessageWithWire**(`opts`): `Promise`\<\{ `ciphertext`: `Uint8Array`; `type`: `"pkmsg"` \| `"msg"`; `wireJid`: `string`; \}\>

Defined in: [lib/Types/Signal.d.ts:67](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L67)

#### Parameters

##### opts

`EncryptMessageWithWireOpts`

#### Returns

`Promise`\<\{ `ciphertext`: `Uint8Array`; `type`: `"pkmsg"` \| `"msg"`; `wireJid`: `string`; \}\>

#### Inherited from

`SignalRepository.encryptMessageWithWire`

***

### injectE2ESession()

> **injectE2ESession**(`opts`): `Promise`\<`void`\>

Defined in: [lib/Types/Signal.d.ts:76](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L76)

#### Parameters

##### opts

`E2ESessionOpts`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`SignalRepository.injectE2ESession`

***

### jidToSignalProtocolAddress()

> **jidToSignalProtocolAddress**(`jid`): `string`

Defined in: [lib/Types/Signal.d.ts:81](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L81)

#### Parameters

##### jid

`string`

#### Returns

`string`

#### Inherited from

`SignalRepository.jidToSignalProtocolAddress`

***

### migrateSession()

> **migrateSession**(`fromJids`, `toJid`): `Promise`\<\{ `migrated`: `number`; `skipped`: `number`; `total`: `number`; \}\>

Defined in: [lib/Types/Signal.d.ts:82](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L82)

#### Parameters

##### fromJids

`string`[]

##### toJid

`string`

#### Returns

`Promise`\<\{ `migrated`: `number`; `skipped`: `number`; `total`: `number`; \}\>

#### Inherited from

`SignalRepository.migrateSession`

***

### processSenderKeyDistributionMessage()

> **processSenderKeyDistributionMessage**(`opts`): `Promise`\<`void`\>

Defined in: [lib/Types/Signal.d.ts:61](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L61)

#### Parameters

##### opts

`ProcessSenderKeyDistributionMessageOpts`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`SignalRepository.processSenderKeyDistributionMessage`

***

### validateSession()

#### Call Signature

> **validateSession**(`jid`): `Promise`\<\{ `exists`: `boolean`; `reason`: `string`; \}\>

Defined in: [lib/Types/Signal.d.ts:77](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L77)

##### Parameters

###### jid

`string`

##### Returns

`Promise`\<\{ `exists`: `boolean`; `reason`: `string`; \}\>

##### Inherited from

`SignalRepository.validateSession`

#### Call Signature

> **validateSession**(`jid`): `Promise`\<\{ `exists`: `boolean`; `reason`: `string`; \}\>

Defined in: [lib/Types/Signal.d.ts:87](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Signal.d.ts#L87)

##### Parameters

###### jid

`string`

##### Returns

`Promise`\<\{ `exists`: `boolean`; `reason`: `string`; \}\>

##### Inherited from

`SignalRepository.validateSession`
