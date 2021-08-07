// @ts-ignore
import * as fc from 'fast-check'
import { seq } from '../src'
describe('greet', () => {
  it('greets anything', () => {
    fc.assert(
      fc.property(fc.string(), (name) => {
        const add2 = (x: number) => x + 3
        const multiply100 = (x: number) => x * 100

        const fnPipeline = [add2, multiply100]
        expect(seq(fnPipeline as any).call([1, 2, 3])).toEqual([103, 203, 303])

        expect(name).toBe(name)
      })
    )
  })
})
