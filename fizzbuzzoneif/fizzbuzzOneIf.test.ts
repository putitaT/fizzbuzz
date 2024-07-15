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

    it('should return 4 for number = 4', () => {
        const result = fizzbuzzOneIf(4)
        expect(result).toEqual("4")
    })

    it('should return Buzz for number = 5', () => {
        const result = fizzbuzzOneIf(5)
        expect(result).toEqual("Buzz")
    })

    it('should return Fizz for number = 6', () => {
        const result = fizzbuzzOneIf(6)
        expect(result).toEqual("Fizz")
    })
})
