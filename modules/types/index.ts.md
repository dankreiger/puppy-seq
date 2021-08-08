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
  - [IThreadConfig (interface)](#ithreadconfig-interface)
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

## IThreadConfig (interface)

**Signature**

```ts
export interface IThreadConfig<T> {
  arrCopy: T[]
  idxMap: IIdxMap
  ___: Record<string, any>
}
```

Added in v0.0.1

## TReducer (type alias)

**Signature**

```ts
export declare type TReducer<T, U> = (
  acc: T[],
  cur: T | ReturnType<TTransformFn<T, U>>,
  config: IThreadConfig<T>
) => U[]
```

Added in v0.0.0

## TTransformFn (type alias)

**Signature**

```ts
export declare type TTransformFn<A, B> = (arg: A, config: IThreadConfig<A>) => B
```

Added in v0.0.0
