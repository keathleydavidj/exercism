function isLeapYear(year: number) {
    const isDivBy4 = year % 4 == 0
    const isDivBy100 = year % 100 == 0
    const isDivBy400 = year % 400 == 0
    return isDivBy4 && !isDivBy100 || isDivBy400
}
export default isLeapYear