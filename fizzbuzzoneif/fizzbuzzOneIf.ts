export const fizzbuzzOneIf = (num: number) => {
    let obj: { [key: number]: string } = { 3: "Fizz", 5: "Buzz" }; 
    let out: string = '';
    for (const [key, value] of Object.entries(obj)) { 
        if (num % Number(key) === 0) { 
            out += value; 
        }
    }
    return out || num.toString();
}