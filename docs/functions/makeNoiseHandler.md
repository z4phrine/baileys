[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / makeNoiseHandler

# Function: makeNoiseHandler()

> **makeNoiseHandler**(`__namedParameters`): `object`

Defined in: [lib/Utils/noise-handler.d.ts:6](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/noise-handler.d.ts#L6)

## Parameters

### \_\_namedParameters

#### keyPair

[`KeyPair`](../type-aliases/KeyPair.md)

#### logger

`ILogger`

#### NOISE_HEADER

`Uint8Array`

#### routingInfo?

`Buffer`\<`ArrayBufferLike`\>

## Returns

`object`

### authenticate()

> **authenticate**: (`data`) => `void`

#### Parameters

##### data

`Uint8Array`

#### Returns

`void`

### decodeFrame()

> **decodeFrame**: (`newData`, `onFrame`) => `Promise`\<`void`\>

#### Parameters

##### newData

`Buffer`\<`ArrayBufferLike`\> | `Uint8Array`\<`ArrayBufferLike`\>

##### onFrame

(`buff`) => `void`

#### Returns

`Promise`\<`void`\>

### decrypt()

> **decrypt**: (`ciphertext`) => `Buffer`

#### Parameters

##### ciphertext

`Uint8Array`

#### Returns

`Buffer`

### encodeFrame()

> **encodeFrame**: (`data`) => `Buffer`

#### Parameters

##### data

`Buffer`\<`ArrayBufferLike`\> | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`Buffer`

### encrypt()

> **encrypt**: (`plaintext`) => `Buffer`

#### Parameters

##### plaintext

`Uint8Array`

#### Returns

`Buffer`

### finishInit()

> **finishInit**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

### mixIntoKey()

> **mixIntoKey**: (`data`) => `Promise`\<`void`\>

#### Parameters

##### data

`Uint8Array`

#### Returns

`Promise`\<`void`\>

### processHandshake()

> **processHandshake**: (`__namedParameters`, `noiseKey`) => `Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

#### Parameters

##### \_\_namedParameters

`HandshakeMessage`

##### noiseKey

[`KeyPair`](../type-aliases/KeyPair.md)

#### Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>
