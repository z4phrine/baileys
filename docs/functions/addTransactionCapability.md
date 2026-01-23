[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / addTransactionCapability

# Function: addTransactionCapability()

> **addTransactionCapability**(`state`, `logger`?, `__namedParameters`?): [`SignalKeyStoreWithTransaction`](../type-aliases/SignalKeyStoreWithTransaction.md)

Defined in: [lib/Utils/auth-utils.d.ts:19](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/auth-utils.d.ts#L19)

Adds DB like transaction capability (https://en.wikipedia.org/wiki/Database_transaction) to the SignalKeyStore,
this allows batch read & write operations & improves the performance of the lib

## Parameters

### state

[`SignalKeyStore`](../type-aliases/SignalKeyStore.md)

the key store to apply this capability to

### logger?

`ILogger`

logger to log events

### \_\_namedParameters?

[`TransactionCapabilityOptions`](../type-aliases/TransactionCapabilityOptions.md)

## Returns

[`SignalKeyStoreWithTransaction`](../type-aliases/SignalKeyStoreWithTransaction.md)

SignalKeyStore with transaction capability
