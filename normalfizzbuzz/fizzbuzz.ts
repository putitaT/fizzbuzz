export const fizzbuzz = (num: number): string => {
    if (num % 3 == 0) {
        return "Fizz"
    } else {
        return num.toString()
    }
}