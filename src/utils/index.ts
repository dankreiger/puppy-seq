/** @since 0.0.0 */

// helper functions
export const prevIdx = <T>(idx: number, arr: T[]): number =>
  idx <= 0 ? (arr.length - 1 + idx) % arr.length : idx - 1
/** @since 0.0.0 */
export const nextIdx = <T>(idx: number, arr: T[]): number =>
  (idx + 1) % arr.length

// helper reducers
/** @since 0.0.0 */
export const pushReducer = <T>(list: T[], v: T): T[] => [...list, v]
