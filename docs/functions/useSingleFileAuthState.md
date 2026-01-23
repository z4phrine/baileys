[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / useSingleFileAuthState

# Function: ~~useSingleFileAuthState()~~

> **useSingleFileAuthState**(`filename`, `logger`?): `object`

Defined in: [lib/Utils/use-single-file-auth-state.d.ts:10](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/use-single-file-auth-state.d.ts#L10)

## Parameters

### filename

`string`

### logger?

`ILogger`

## Returns

`object`

### ~~saveState()~~

> **saveState**: () => `void`

#### Returns

`void`

### ~~state~~

> **state**: [`AuthenticationState`](../type-aliases/AuthenticationState.md)

## Deprecated

use multi file auth state instead please
stores the full authentication state in a single JSON file

DO NOT USE IN A PROD ENVIRONMENT, only meant to serve as an example
