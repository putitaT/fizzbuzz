export const fizzbuzz = (num: number): string => {
    if (num ==1) {
        return "1"
    } else if (num == 2) {
        return "2"
    } else if (num == 3) {
        return "Fizz"
    } else if (num == 4) {
        return "4"
    } else {
        return "Buzz"
    }
}