---
title: index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v0.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [mapReducer](#mapreducer)
  - [seq](#seq)
  - [transduce](#transduce)

---

# utils

## mapReducer

**Signature**

```ts
export declare const mapReducer: <A, B>(xf: TTransformFn<A, B>) => (reducer: TReducer<A, B>) => any
```

Added in v0.0.0

## seq

**Signature**

```ts
export declare const seq: <T, U>(
  xf: (fn: TReducer<T, U>) => TTransformFn<T, U>,
  collection: any[]
) => ReturnType<typeof transduce>
```

Added in v0.0.0

## transduce

**Signature**

```ts
export declare const transduce: <T, U>(
  xf: (fn: TReducer<T, U>) => any,
  reducer: TReducer<T, U>,
  seed: U[],
  arr: T[]
) => U[]
```

Added in v0.0.0
