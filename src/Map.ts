/** @since 0.0.6 */

import type { IThreadConfig, TReducer, TTransformFn } from './types'

/** @since 0.0.0 */
/**
 * @param xf
 * @returns
 */
const mapReducer =
  <A, B>(xf: TTransformFn<A, B>) =>
  (reducer: TReducer<A, B>): any =>
  (list: A[], item: A, config: IThreadConfig<A>): ReturnType<typeof reducer> =>
    reducer(list, xf(item, config), config)

/** @since 0.0.5 */
export const Map = {
  mapReducer,
}
