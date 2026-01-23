[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / SyncState

# Enumeration: SyncState

Defined in: [lib/Types/State.d.ts:4](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/State.d.ts#L4)

## Enumeration Members

### AwaitingInitialSync

> **AwaitingInitialSync**: `1`

Defined in: [lib/Types/State.d.ts:8](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/State.d.ts#L8)

Pending notifications received. Buffering events until we decide whether to sync or not.

***

### Connecting

> **Connecting**: `0`

Defined in: [lib/Types/State.d.ts:6](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/State.d.ts#L6)

The socket is connecting, but we haven't received pending notifications yet.

***

### Online

> **Online**: `3`

Defined in: [lib/Types/State.d.ts:12](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/State.d.ts#L12)

Initial sync is complete, or was skipped. The socket is fully operational and events are processed in real-time.

***

### Syncing

> **Syncing**: `2`

Defined in: [lib/Types/State.d.ts:10](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/State.d.ts#L10)

The initial app state sync (history, etc.) is in progress. Buffering continues.
