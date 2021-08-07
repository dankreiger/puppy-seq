import { PushReducer } from './PushReducer'
import type { IThreadConfig, TXFormer } from './types'

/** @since 0.0.0 */

export const MapReducer =
  <I, S = any>(xf: TXFormer) =>
  (reducer: typeof PushReducer) =>
  (list: I[], item: I, i: number, arr: I[], config: IThreadConfig<I, S>): I[] =>
    reducer(list, xf<I, S>(item, config), i, arr)
