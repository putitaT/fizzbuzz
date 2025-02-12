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

    it('should return Buzz for number = 10', () => {
      const result = fizzbuzz(10)
      expect(result).toEqual("Buzz")
    })

    it('should return 11 for number = 11', () => {
      const result = fizzbuzz(11)
      expect(result).toEqual("11")
    })

    it('should return Fizz for number = 12', () => {
      const result = fizzbuzz(12)
      expect(result).toEqual("Fizz")
    })

    it('should return 13 for number = 13', () => {
      const result = fizzbuzz(13)
      expect(result).toEqual("13")
    })

    it('should return 14 for number = 14', () => {
      const result = fizzbuzz(14)
      expect(result).toEqual("14")
    })

    it('should return 14 for number = 15', () => {
      const result = fizzbuzz(15)
      expect(result).toEqual("FizzBuzz")
    })
})
