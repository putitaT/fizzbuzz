import { fizzbuzzOneIf } from "./fizzbuzzoneif"

describe('Fizz Buzz with One If', () => {
    it('should return 1 for number = 1', () => {
      const result = fizzbuzzOneIf(1)
      expect(result).toEqual("1")
    })

    it('should return 2 for number = 2', () => {
        const result = fizzbuzzOneIf(2)
        expect(result).toEqual("2")
    })

    it('should return Fizz for number = 3', () => {
        const result = fizzbuzzOneIf(3)
        expect(result).toEqual("Fizz")
    })
})
