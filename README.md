# puppy-seq

[![Test](https://github.com/dankreiger/puppy-seq/actions/workflows/build.yml/badge.svg)](https://github.com/dankreiger/puppy-seq/actions/workflows/build.yml)


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
