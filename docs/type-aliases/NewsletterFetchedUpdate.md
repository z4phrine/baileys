[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / NewsletterFetchedUpdate

# Type Alias: NewsletterFetchedUpdate

> **NewsletterFetchedUpdate**: `object`

Defined in: [lib/Types/Newsletter.d.ts:69](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Types/Newsletter.d.ts#L69)

## Type declaration

### message?

> `optional` **message**: `proto.IWebMessageInfo`

the message, if you requested only updates, you will not receive message

### reactions

> **reactions**: [`NewsletterReaction`](NewsletterReaction.md)[]

reactions in this message

### server\_id

> **server\_id**: `string`

id of message in newsletter, starts from 100

### views?

> `optional` **views**: `number`

count of views in this message
