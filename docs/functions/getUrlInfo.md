[**@innovatorssoft/baileys v7.3.5**](../README.md)

***

[@innovatorssoft/baileys](../globals.md) / getUrlInfo

# Function: getUrlInfo()

> **getUrlInfo**(`text`, `opts`?): `Promise`\<`undefined` \| [`WAUrlInfo`](../interfaces/WAUrlInfo.md)\>

Defined in: [lib/Utils/link-preview.d.ts:23](https://github.com/innovatorssoft/Baileys/blob/04838aff6e2fc8f9aa3ebaf00c4a148759d7bbd4/lib/Utils/link-preview.d.ts#L23)

Given a piece of text, checks for any URL present, generates link preview for the same and returns it
Return undefined if the fetch failed or no URL was found

## Parameters

### text

`string`

first matched URL in text

### opts?

[`URLGenerationOptions`](../type-aliases/URLGenerationOptions.md)

## Returns

`Promise`\<`undefined` \| [`WAUrlInfo`](../interfaces/WAUrlInfo.md)\>

the URL info required to generate link preview
