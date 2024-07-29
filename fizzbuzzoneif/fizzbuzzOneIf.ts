export const fizzbuzzOneIf = (num: number) => {
    if (num % 3 !== 0 && num % 5 !== 0) {
        return num.toString()
    } else {
        const text = ['Fizz', 'Buzz', 'Buzz']
        return text[num%3]
    }
}