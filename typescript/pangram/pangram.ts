const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const letterMatches = (input: string) => (letter: string) => (input.includes(letter) || input.includes(letter.toUpperCase()))

class Pangram {
    constructor(sentence = '') {
        this.sentence = sentence
    }

    sentence: string

    isPangram() {
        const sentenceIncludes = letterMatches(this.sentence)
        return [...alphabet]
            .map((a) => sentenceIncludes(a))
            .reduce((prev, curr) => prev && curr, true)
    }
}

export default Pangram
