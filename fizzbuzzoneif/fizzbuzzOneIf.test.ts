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

    it('should return 7 for number = 7', () => {
        const result = fizzbuzzOneIf(7)
        expect(result).toEqual("7")
    })

    it('should return 8 for number = 8', () => {
        const result = fizzbuzzOneIf(8)
        expect(result).toEqual("8")
    })

    it('should return Fizz for number = 9', () => {
        const result = fizzbuzzOneIf(9)
        expect(result).toEqual("Fizz")
    })

    it('should return Buzz for number = 10', () => {
        const result = fizzbuzzOneIf(10)
        expect(result).toEqual("Buzz")
    })

    it('should return 11 for number = 11', () => {
        const result = fizzbuzzOneIf(11)
        expect(result).toEqual("11")
    })

    it('should return Fizz for number = 12', () => {
        const result = fizzbuzzOneIf(12)
        expect(result).toEqual("Fizz")
    })

    it('should return 13 for number = 13', () => {
        const result = fizzbuzzOneIf(13)
        expect(result).toEqual("13")
    })

    it('should return 14 for number = 14', () => {
        const result = fizzbuzzOneIf(14)
        expect(result).toEqual("14")
    })
})
