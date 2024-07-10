export const fizzbuzzOneIf = (num: number) => {
    if ((num%3 != 0) && (num%5 != 0)) {
        return num.toString()
    } else {
        const index = num%3 == 0 ? 0 : 1
        const text = ['Fizz', 'Buzz']
        return text[index]
    }
}