---
title: types/index.ts
nav_order: 2
parent: Modules
---

## index overview

Added in v0.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [IIdxMap (interface)](#iidxmap-interface)
  - [TReducer (type alias)](#treducer-type-alias)
  - [TTransformFn (type alias)](#ttransformfn-type-alias)

---

# utils

## IIdxMap (interface)

**Signature**

```ts
export interface IIdxMap {
  prev: number
  now: number
  next: number
}
```

Added in v0.0.0

## TReducer (type alias)

**Signature**

```ts
export type TReducer<T, U> = (acc: T[], cur: T | ReturnType<TTransformFn<T, U>>, indexMap: IIdxMap, array: T[]) => U[]
```

Added in v0.0.0

## TTransformFn (type alias)

**Signature**

```ts
export type TTransformFn<A, B> = (arg: A, index: IIdxMap, original: A[]) => B
```

Added in v0.0.0
