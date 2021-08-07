/** @since 0.0.0 */
import { MapReducer } from './MapReducer'
import { PushReducer } from './PushReducer'
import { Transduce } from './Transduce'
import { TXFormer } from './types'

/**
 * @since 0.0.0
 * @param xf
 * @param collection
 * @returns
 */
export const seq = <T, U extends Record<string, any>>(
  xformers: TXFormer[],
  writeable?: U
): { call: (collection: T[]) => ReturnType<typeof Transduce> } => {
  const transformedReducer = xformers.reduce((a, b, _, _) => {
    const x = MapReducer<T>(b)
    const y = x(a)
    return y
  }, PushReducer)

  return {
    call: (collection) => {
      if (Array.isArray(collection))
        return Transduce(
          transformedReducer,
          [],
          collection,
          (writeable || {}) as U
        )
      throw new Error('collection must be an array')
    },
  }
}
