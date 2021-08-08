/** @since 0.0.6 */

import { ArrayHelper } from './ArrayHelper'
import { TReducer } from './types'

/**
 * @since 0.0.0
 * @param xf
 * @param reducer
 * @param seed
 * @param arr
 * @returns
 */
const _transduce = <T, U>(
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
    const prev = ArrayHelper.prevIdx(i, arrCopy)
    const now = i
    const next = ArrayHelper.nextIdx(i, arrCopy)
    const idxMap = { prev, now, next }

    acc = transformedReducer(acc, data, { ___, idxMap, arrCopy })
    i += 1
  }
  return acc
}

/** @since 0.0.5 */
export const Transduce = {
  transduce: _transduce,
}
