/** @since 0.0.0 */
export interface IIdxMap {
  prev: number
  now: number
  next: number
}

/** @since 0.0.0 */
export type TReducer<T, U> = (
  acc: T[],
  cur: T | ReturnType<TTransformFn<T, U>>,
  indexMap: IIdxMap,
  array: T[]
) => U[]

/** @since 0.0.0 */
export type TTransformFn<A, B> = (arg: A, index: IIdxMap, original: A[]) => B
