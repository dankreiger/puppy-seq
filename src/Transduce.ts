/** @since 0.0.0 */

import { ArrayHelper } from './ArrayHelper'
import { IThreadConfig } from './types'

/**
 * @since 0.0.0
 * @param xf
 * @param reducer
 * @param seed
 * @param arr
 * @returns
 */
export const Transduce = <T, U, V>(
  xformReducer: (acc: U[], data: T, config: IThreadConfig<T, V>) => U[],
  seed: U[],
  arr: T[],
  writeable: V
): U[] => {
  const arrHelper = ArrayHelper(arr)

  const arrCopy = [...arr]
  let acc = seed as U[]

  let i = 0

  for (const data of arr) {
    const prev = arrHelper.prev(i)
    const now = i
    const next = arrHelper.next(i)
    const idxMap = { prev, now, next }

    acc = xformReducer(acc, data, { writeable, idxMap, arrCopy })
    i += 1
  }
  return acc
}
