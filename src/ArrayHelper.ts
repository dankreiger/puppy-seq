import type { TIdxFn } from './types'

/** @since 0.0.0 */
const prevIdx: TIdxFn = (idx, arr) =>
  idx <= 0 ? (arr.length - 1 + idx) % arr.length : idx - 1

/** @since 0.0.0 */
const nextIdx: TIdxFn = (idx, arr) => (idx + 1) % arr.length

/** @since 0.0.0 */
const pushReducer = <T>(list: T[], v: T): T[] => [...list, v]

/** @since 0.0.6 */
export const ArrayHelper = {
  pushReducer,
  prevIdx,
  nextIdx,
}
