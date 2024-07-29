export const fizzbuzzOneIf = (num: number) => {
    if (num % 3 !== 0) {
        return num.toString()
    } else {
        return 'Fizz'
    }
}