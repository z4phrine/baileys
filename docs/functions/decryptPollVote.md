[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / decryptPollVote

# Function: decryptPollVote()

> **decryptPollVote**(`vote`, `ctx`): `PollVoteMessage`

Defined in: [lib/Utils/process-message.d.ts:47](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/process-message.d.ts#L47)

Decrypt a poll vote

## Parameters

### vote

`IPollEncValue`

encrypted vote

### ctx

[`PollContext`](../type-aliases/PollContext.md)

additional info about the poll required for decryption

## Returns

`PollVoteMessage`

list of SHA256 options
