/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import * as fc from 'fast-check'
import { pipe } from 'fp-ts/function'
import * as myLib from '../src'

describe('greet', () => {
  it('greets anything', () => {
    fc.assert(
      fc.property(fc.string(), (name) => {
        const add2 = myLib.mapReducer((x: any) => x + 3)

        const fnPipeline = pipe(add2)
        expect(myLib.seq(fnPipeline, [1, 2, 3])).toEqual([4, 5, 6])
      })
    )
  })
})
