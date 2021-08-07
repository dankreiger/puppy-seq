/** @since 0.0.0 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IThreadConfig, TReducer, TTransformFn } from './types'
import { nextIdx, prevIdx, pushReducer } from './utils'

/** @since 0.0.0 */
export const mapReducer =
  <A, B>(xf: TTransformFn<A, B>) =>
  (reducer: TReducer<A, B>): any =>
  (list: A[], item: A, config: IThreadConfig): ReturnType<typeof reducer> =>
    reducer(list, xf(item, config), config)

/**
 * @since 0.0.0
 * @param xf
 * @param reducer
 * @param seed
 * @param arr
 * @returns
 */
export const transduce = <T, U>(
  xf: (fn: TReducer<T, U>) => any,
  reducer: TReducer<T, U>,
  seed: U[],
  arr: T[]
): U[] => {
  const transformedReducer = xf(reducer)
  const arrCopy = [...arr]
  let acc = seed as U[]

  const ___ = {}
  let i = 0

  for (const data of arr) {
    const prev = prevIdx(i, arrCopy)
    const now = i
    const next = nextIdx(i, arrCopy)
    const idxMap = { prev, now, next }

    acc = transformedReducer(acc, data, { ___, idxMap, arrCopy })
    i += 1
  }
  return acc
}

/**
 * @since 0.0.0
 * @param xf
 * @param collection
 * @returns
 */
export const seq = <T, U>(
  xf: (fn: TReducer<T, U>) => TTransformFn<T, U>,
  collection: any[]
): ReturnType<typeof transduce> => {
  if (Array.isArray(collection))
    return transduce(xf, pushReducer, [], collection)
  throw new Error('collection must be an array')
}
