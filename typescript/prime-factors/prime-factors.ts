const reducer = (acc: [number, number[]], x: number): [number, number[]] => {
    const [val, xs] = acc
    const isFactor: boolean = val % x === 0
   return isFactor ? reducer([val / x, xs.concat([x])], x) : acc
}

const calculatePrimeFactors = (input: number): number[] => {
    // still failing the last test case because input > max Array length (2 ** 32 - 1)
    const nums = [...Array(input + 1).keys()].filter((x) => x >= 2)
    const [, result] = nums.reduce(reducer, [input, []])
    return result
}

export default calculatePrimeFactors