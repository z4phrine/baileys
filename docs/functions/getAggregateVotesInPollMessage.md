[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / getAggregateVotesInPollMessage

# Function: getAggregateVotesInPollMessage()

> **getAggregateVotesInPollMessage**(`msg`, `meId`?): `VoteAggregation`[]

Defined in: [lib/Utils/messages.d.ts:77](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/messages.d.ts#L77)

Aggregates all poll updates in a poll.

## Parameters

### msg

`Pick`\<`IWebMessageInfo`, `"pollUpdates"` \| `"message"`\>

the poll creation message

### meId?

`string`

your jid

## Returns

`VoteAggregation`[]

A list of options & their voters
