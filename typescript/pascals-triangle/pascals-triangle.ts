import {
    append, init, length,
    last, map, tail, pipe, prepend,
    unfold, zip, KeyValuePair
} from 'ramda'

const combinePairs = map(([fst, snd]: [number, number]): number => fst + snd)
const createPairs = (array: number[]): Array<KeyValuePair<number, number>> =>
    zip(init(array), tail(array))

const nextRow = pipe(
    createPairs,
    combinePairs,
    prepend(1),
    append(1)
)

const generateTriangle = (num: number): number[][] =>
    unfold((row: number[]) => (length(row) > num) ? false : [row, nextRow(row)], [1])

const Triangle = (numberOfRows: number): { rows: number[][], lastRow: number[] } => {
    const rows = generateTriangle(numberOfRows)
    const lastRow = last(rows) as number[]
    return { rows, lastRow }
}
export default Triangle