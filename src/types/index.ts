/** @since 0.0.0 */
export interface IIdxMap {
  prev: number
  now: number
  next: number
}
/** @since 0.0.1 */
export interface IThreadConfig<T> {
  arrCopy: T[]
  idxMap: IIdxMap
  ___: Record<string, any>
}
/** @since 0.0.0 */
export declare type TReducer<T, U> = (
  acc: T[],
  cur: T | ReturnType<TTransformFn<T, U>>,
  config: IThreadConfig<T>
) => U[]
/** @since 0.0.0 */
export declare type TTransformFn<A, B> = (arg: A, config: IThreadConfig<A>) => B

/** @since 0.0.0 */
export declare type TIdxFn = <T>(idx: number, arr: T[]) => number
