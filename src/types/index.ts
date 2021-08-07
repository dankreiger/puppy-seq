/** @since 0.0.0 */
export interface IIdxMap {
  readonly prev: number
  readonly now: number
  readonly next: number
}

/** @since 0.0.0 */
export type TReducer<T, U, V = any> = (
  acc: T[],
  cur: T | ReturnType<TTransformFn<T, U, V>>,
  config: IThreadConfig<T, V>
) => U[]

/** @since 0.0.0 */
export type TTransformFn<A, B, C = any> = (
  arg: A,
  config: IThreadConfig<A, C>
) => B

/** @since 0.0.1 */
export interface IThreadConfig<R, S> {
  writeable: S
  readonly idxMap: IIdxMap
  readonly arrCopy: R[]
}

/** @since 0.0.1 */
export type TIdxFn = <T>(arr: T[]) => (idx: number) => number

export type TArrayHelperApi = {
  prev: ReturnType<TIdxFn>
  next: ReturnType<TIdxFn>
}

/** @since 0.0.1 */
export type TXFormer = <I, S = any>(input: I, config?: IThreadConfig<I, S>) => I
