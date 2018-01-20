export function keep<T>(collection: T[], valid: (item: T) => boolean): T[] {
    return collection.reduce(
        (accumulator: T[], element: T) => 
            valid(element) ? accumulator.concat([element]) : accumulator, [])
}

export function discard<T>(collection: T[], valid: (item: T) => boolean): T[] {
    return collection.reduce(
        (accumulator: T[], element: T) =>
            !valid(element) ? accumulator.concat([element]) : accumulator, [])
}