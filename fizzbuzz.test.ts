import { fizzbuzz } from "./fizzbuzz"

describe('Taxi', () => {
    it('test', () => {
      const result = fizzbuzz()
      expect(result).toEqual(5)
    })

})
