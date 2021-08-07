import type { TArrayHelperApi, TIdxFn } from './types'

/** @since 0.0.1 */
export const _prevIdx: TIdxFn = (arr) => (idx) =>
  idx <= 0 ? (arr.length - 1 + idx) % arr.length : idx - 1

/** @since 0.0.1 */
export const _nextIdx: TIdxFn = (arr) => (idx) => (idx + 1) % arr.length

/** @since 0.0.1 */
export const ArrayHelper = <T>(arr: T[]): TArrayHelperApi => ({
  prev: _prevIdx(arr),
  next: _nextIdx(arr),
})
