const zip =
    (arr1: string[], arr2: string[]): Array<[string, string]> =>
        arr1.map((key, i) => <[string, string]>[key, arr2[i]])

const invalidateDNA = () => {
    throw new Error('Invalid input DNA.')
}

const dnaNukes = ['C', 'G', 'A', 'T']
const rnaNukes = ['G', 'C', 'U', 'A']
const dna2Rna = new Map(zip(dnaNukes, rnaNukes))

class Transcriptor {
    toRna(dnaSeq: string): string | Error {
        const splitDNA = dnaSeq.split('')
        const splitRNA = splitDNA
            .map((a) => dna2Rna.has(a) ? dna2Rna.get(a) : false)
        const isValidDNA = splitRNA
            .reduce((acc, val) => acc && !!val, true)
        return isValidDNA ? splitRNA.join('') : invalidateDNA()
    }
}

export default Transcriptor