# puppy-seq

[![Test](https://github.com/dankreiger/puppy-seq/actions/workflows/build.yml/badge.svg)](https://github.com/dankreiger/puppy-seq/actions/workflows/build.yml)

---

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->

- [puppy-seq](#puppy-seq)
  - [Install](#install)
  - [Just for my own notes](#just-for-my-own-notes)
  - [Example](#example)
  <!-- AUTO-GENERATED-CONTENT:END -->

[docs](https://dankreiger.github.io/puppy-seq)

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
import { Map, seq } from 'puppy-seq'
import { compose } from 'ramda' // or whatever fp library

const fnPipeline = compose(
  Map.mapReducer(somexformreducer),
  Map.mapReducer(anotherxformfunction)
)
seq(fnPipeline, Object.entries(realisticF0))
```
