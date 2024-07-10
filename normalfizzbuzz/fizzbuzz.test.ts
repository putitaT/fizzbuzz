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

    it('should return buzz for number = 5', () => {
      const result = fizzbuzz(5)
      expect(result).toEqual("Buzz")
    })

    it('should return 6 for number = 6', () => {
      const result = fizzbuzz(6)
      expect(result).toEqual("Fizz")
    })

})