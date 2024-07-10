import { fizzbuzz } from "./fizzbuzz"

describe('Fizz Buzz', () => {
    it('should return 1 for number = 1', () => {
      const result = fizzbuzz(1)
      expect(result).toEqual("1")
    })

})
