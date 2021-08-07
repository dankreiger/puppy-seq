/** @since 0.0.0 */
export interface IIdxMap {
  prev: number
  now: number
  next: number
}
/** @since 0.0.1 */
export interface IThreadConfig {
  arrCopy: any[]
  idxMap: IIdxMap
  ___: any
}
/** @since 0.0.0 */
export declare type TReducer<T, U> = (
  acc: T[],
  cur: T | ReturnType<TTransformFn<T, U>>,
  config: IThreadConfig
) => U[]
/** @since 0.0.0 */
export declare type TTransformFn<A, B> = (arg: A, config: IThreadConfig) => B
