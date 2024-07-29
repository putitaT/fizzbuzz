import { fizzbuzzOneIf } from "./fizzbuzzoneif"

describe('Fizz Buzz with One If', () => {
    it('should return 1 for number = 1', () => {
      const result = fizzbuzzOneIf(1)
      expect(result).toEqual("1")
    })
})
