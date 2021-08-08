---
title: index.ts
nav_order: 2
parent: Modules
---

## index overview

Added in v0.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [seq](#seq)

---

# utils

## seq

**Signature**

```ts
export declare const seq: <T, U>(
  xf: (fn: TReducer<T, U>) => TTransformFn<T, U>,
  collection: any[]
) => ReturnType<typeof Transduce.transduce>
```

Added in v0.0.0
