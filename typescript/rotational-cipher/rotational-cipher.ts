const lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const zip: <T>(arr1: T[]) => (arr2: T[]) => Array<[T, T]> =
    <T>(arr1: T[]) => (arr2: T[]) =>
        arr1.map( (x: T, i: number) => <[T, T]>[x, arr2[i]] )

const shiftArr: (letters: string[]) => string[] = 
    ([head, ...tail]) => tail.concat([head])

const shiftByN: (n: number, letters: string[]) => string[] = 
    (n, letters) =>
        n > 0 ? shiftByN(n - 1, shiftArr(letters)) : letters

const mkLookupMap: (count: number) => Map<string, string> =
    (count) => {
        const zippedLowers = zip(lowers)(shiftByN(count, lowers))
        const zippedUppers = zip(uppers)(shiftByN(count, uppers))
        const uppersAndLowers = zippedLowers.concat(zippedUppers)
        return new Map(uppersAndLowers)
    }

export default class RotationalCipher { 
    static rotate(input: string, shift: number): string {
        const lookupMap: Map<string, string> = mkLookupMap(shift)
        const transform = (char: string) =>
            lookupMap.has(char) ? lookupMap.get(char) : char
    
        return [...input]
            .map(transform)
            .join('')
    }
}