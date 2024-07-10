import { fizzbuzz } from "./fizzbuzz"

describe('Fizz Buzz', () => {
    it('should return 1 for number = 1', () => {
      const result = fizzbuzz(1)
      expect(result).toEqual("1")
    })

    it('should return 2 for number = 2', () => {
      const result = fizzbuzz(2)
      expect(result).toEqual("2")
    })
})
