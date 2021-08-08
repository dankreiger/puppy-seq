/** @since 0.0.0 */
const prevIdx = <T>(idx: number, arr: T[]): number =>
  idx <= 0 ? (arr.length - 1 + idx) % arr.length : idx - 1
/** @since 0.0.0 */
const nextIdx = <T>(idx: number, arr: T[]): number => (idx + 1) % arr.length

// helper reducers
/** @since 0.0.0 */
const pushReducer = <T>(list: T[], v: T): T[] => [...list, v]

/** @since 0.0.6 */
export const ArrayHelper = {
  pushReducer,
  prevIdx,
  nextIdx,
}
