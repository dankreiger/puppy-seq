---
title: Transduce.ts
nav_order: 4
parent: Modules
---

## Transduce overview

Added in v0.0.6

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Transduce](#transduce)

---

# utils

## Transduce

**Signature**

```ts
export declare const Transduce: {
  transduce: <T, U>(xf: (fn: TReducer<T, U>) => any, reducer: TReducer<T, U>, seed: U[], arr: T[]) => U[]
}
```

Added in v0.0.5
