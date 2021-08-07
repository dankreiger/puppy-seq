# puppy-seq

[![Test](http:&#x2F;&#x2F;&#x2F;actions&#x2F;workflows&#x2F;build.yml&#x2F;badge.svg)](http:&#x2F;&#x2F;&#x2F;actions&#x2F;workflows&#x2F;build.yml)

[API Docs](http://)

---

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [puppy-seq](#puppy-seq)
  - [Install](#install)
  - [Just for my own notes](#just-for-my-own-notes)
  - [Example](#example)
<!-- AUTO-GENERATED-CONTENT:END -->

## Install


```bash
yarn add fp-ts puppy-seq
```

or

```bash
npm install fp-ts puppy-seq
```

## Just for my own notes

## Example

```ts
import * as DOGGIE from 'puppy-seq'

const fnPipeline = compose(
  DOGGIE.mapReducer(somexformreducer), 
  DOGGIE.mapReducer(anotherxformfunction)
)
DOGGIE.seq(fnPipeline, Object.entries(realisticF0));
```
