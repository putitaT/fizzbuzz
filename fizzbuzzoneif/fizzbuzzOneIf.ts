export const fizzbuzzOneIf = (num: number) => {
    if (num%3 === 0 || num%5 === 0) {
        const text = ["Fizz", "Buzz", "Buzz"]
        return text[num%3]
    } else {
        return num.toString()
    }
}