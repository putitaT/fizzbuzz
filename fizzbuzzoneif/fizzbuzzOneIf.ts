export const fizzbuzzOneIf = (num: number) => {
    const text = [num.toString(), 'Fizz', 'Buzz', 'FizzBuzz'];
    const index = (num%3 == 0 ? 1 : 0) + (num%5 == 0 ? 2 : 0);
    return text[index];
}