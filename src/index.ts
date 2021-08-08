/** @since 0.0.0 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrayHelper } from './ArrayHelper'
import { Transduce } from './Transduce'
import { TReducer, TTransformFn } from './types'

/**
 * @since 0.0.0
 * @param xf
 * @param collection
 * @returns
 */
export const seq = <T, U>(
  xf: (fn: TReducer<T, U>) => TTransformFn<T, U>,
  collection: any[]
): ReturnType<typeof Transduce.transduce> => {
  if (Array.isArray(collection))
    return Transduce.transduce(xf, ArrayHelper.pushReducer, [], collection)
  throw new Error('collection must be an array')
}

export * from './Map'
