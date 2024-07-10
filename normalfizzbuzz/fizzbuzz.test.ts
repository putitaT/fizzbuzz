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

    it('should return Fizz for number = 3', () => {
      const result = fizzbuzz(3)
      expect(result).toEqual("Fizz")
    })

    it('should return 4 for number = 4', () => {
      const result = fizzbuzz(4)
      expect(result).toEqual("4")
    })

    it('should return Buzz for number = 5', () => {
      const result = fizzbuzz(5)
      expect(result).toEqual("Buzz")
    })

    it('should return Fizz for number = 6', () => {
      const result = fizzbuzz(6)
      expect(result).toEqual("Fizz")
    })

    it('should return 7 for number = 7', () => {
      const result = fizzbuzz(7)
      expect(result).toEqual("7")
    })

    it('should return 8 for number = 8', () => {
      const result = fizzbuzz(8)
      expect(result).toEqual("8")
    })

    it('should return Fizz for number = 9', () => {
      const result = fizzbuzz(9)
      expect(result).toEqual("Fizz")
    })
})
