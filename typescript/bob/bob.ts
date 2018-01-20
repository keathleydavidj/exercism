const isQuestion = (str: string): boolean => str.endsWith('?')
const isEmpty = (str: string): boolean => str.trim() === ''
const isLoud = (str: string): boolean => (str === str.toUpperCase() && str !== str.toLowerCase())

class Bob {
    hey(input: string = ''): string {
        return isEmpty(input) ? 'Fine. Be that way!' :
            isLoud(input) ? 'Whoa, chill out!' :
            isQuestion(input) ? 'Sure.' :
            'Whatever.'
    }
}

export default Bob