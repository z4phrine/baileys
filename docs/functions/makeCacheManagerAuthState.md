[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / makeCacheManagerAuthState

# Function: makeCacheManagerAuthState()

> **makeCacheManagerAuthState**(`store`, `sessionKey`): `Promise`\<\{ `clearState`: () => `Promise`\<`void`\>; `saveCreds`: () => `Promise`\<`void`\>; `state`: \{ `creds`: [`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md); `keys`: \{ `get`: (`type`, `ids`) => `Promise`\<\{\}\>; `set`: (`data`) => `Promise`\<`void`\>; \}; \}; \}\>

Defined in: [lib/Store/make-cache-manager-store.d.ts:4](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Store/make-cache-manager-store.d.ts#L4)

## Parameters

### store

`Store`

### sessionKey

`string`

## Returns

`Promise`\<\{ `clearState`: () => `Promise`\<`void`\>; `saveCreds`: () => `Promise`\<`void`\>; `state`: \{ `creds`: [`AuthenticationCreds`](../type-aliases/AuthenticationCreds.md); `keys`: \{ `get`: (`type`, `ids`) => `Promise`\<\{\}\>; `set`: (`data`) => `Promise`\<`void`\>; \}; \}; \}\>
